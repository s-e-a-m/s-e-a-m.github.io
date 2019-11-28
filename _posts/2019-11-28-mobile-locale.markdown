---
layout: post
title:  "Mobile Locale: porting"
date:   2019-11-27 23:44:00 +0200
categories: seam
author: grammaton
---

### Scheda del brano

| Titolo:  | Mobile Locale |
| Autore:  | Michelangelo Lupone |
| Anno:    | 1991 |
| Dedica:  | Gianluca Ruggeri |
| Organico | Percussioni |
| Sistema informatico | Fly30 |
| Elettronica | Live Electronics _4ch_ |
| | Tape _2ch_ |


### Strumenti

Un moderno web browser che punti l'[IDE di Faust](http://faust.grame.fr/ide)

### Faust Porting

```
import("stdfaust.lib");
process = _;
```

Così comincia il percorso di porting.    
Un blocco di codice vuoto.    
Un diagramma di flusso.

![diagramma](https://raw.githubusercontent.com/s-e-a-m/s-e-a-m.github.io/master/img/blog/ML-ESTRATTO.jpeg)

La lettura della partitura, l'articolazione degli schemi di connessione e dei diagrammi di flusso
(in partitura è presente un secondo diagramma, più esploso e dettagliato del precedente,
  che verrà illustrato in seguito) suggeriscono di iniziare la stesura del codice
  posizionando qualche scatola vuota e scrivendo codice un po' per volta.

```
import("stdfaust.lib");
process = _ <: _,_;
```

I primi 7 caratteri aggiunti ci forniscono la prima ramificazione del segnale:
una copia del segnale si dirige verso una linea di ritardo, *QA&QF*, mentre una seconda
copia del segnale entra nel blocco *early reflections*.

```
import("stdfaust.lib");
qaqf = _,_,_,_;
er8comb = _,_,_,_;
process = _ <: qaqf, er8comb;
```

La riga `qaqf = _,_,_,_;` ci dice che ci saranno 4 uscite da *QA&QF* mentre in
partitura ne troviamo richieste solo 2: `output 1 - 3`. Il problema è che se già nella
fase iniziale della progettazione impostiamo un routing di uscita *complesso* non
riusciremo più a gestire il traffico dei canali. È molto più semplice gestire
la simmetria, magari spegnendo qualche canale (magari moltiplicandolo per zero) piuttosto
che impostare già in partenza un routing articolato. Anche perché con un minimo sguardo
in avanti dalle *early reflections* dovranno uscire 5 canali… *fidatevi!* simmetrici è
meglio.

Dovremo accettare di rompere un po' di cose prima di arrivare a *QA&QF* completo.

Il primo passo, un oscillatore sinusoidale. Faust ne ha un catalogo… partiamo dal
semplice oscillatore tabellare `os.osc(freq)`.

```
qaqf = poscil <: _,_,_,_
  with{
      poscil = os.osc(42);
  };
```

In questo modo chiediamo un oscillatore sinusoidale di uscire sulle 4 uscite posticce
di *QA&QF*. Abbiamo rotto l'entrata. Ne siamo consapevoli.

```
qaqf(x) = poscil <: _,_,_,_
  with{
      poscil = os.osc(42);
  };
```

L'aggiunta della variabile `x` ci permette ri ripristinarla, anche questa, in maniera piuttosto inutile,
in quanto non riutilizzata, ancora, dalla funzione.

L'oscillatore sta vibrando tra `+1` e `-1`, potete osservarlo dal piccolo riquadro
che mostra la forma d'onda a destra del vostro browser se utilizzate l'IDE di Faust online.

Il nostro oscillatore, ci viene chiesto dal compositore, dovrà controllare l'*indice*
di lettura di un delay. Ora, dovremmo ragionare un po' sul funzionamento di questo
meccanismo di lettura. Se immaginate un'oscillazione sinusoidale orizzontale è piuttosto
complicata la questione. Ma se ve la figurate verticale, come se, leggendo un  libro
con il  vostro indice di lettura seguiste un moto ondulatorio, oscillatorio, avanti e dietro,
ecco che avete già plasmato il vostro oscillatore di lettura. Fatelo ora con la tastiera
del vostro computer:

```
qwertyuiopoiuytrewqwertyuiopoiuytrewqwertyuiopoiuytrewq
```

ho oscillato tra tra `q` e `p`, 4 volte. Il mio indice di lettura si è mosso 4 volte
avanti e dietro lungo le lettere `qwertyuiop`.

L'oscillarore dovà fare la stessa cosa, la tabella del ritardo sarà una tabella
di campioni, quanti campioni, tanti campioni, mettiamo `qwertyuiop` campioni. L'oscillatore
dovrà muoversi tra il suo minimo `q` e il suo massimo `p` in  maniera sinuosa.

Per farlo però l'oscillatore non dovrà più avere valori negativi, il suo minimo dovrà essere
il valore zero, la nostra lettera `q` ed il suo massimo il valore uno, `p`.

```
qaqf(x) = poscil <: _,_,_,_
  with{
      poscil = os.osc(42) *(0.5) +(0.5);
  };
```

di seguito 16 campioni di un oscillatore unipolare positivo (*poscil*)

```
faustout = [ ...
>  0.667632; ...
>  0.815898; ...
>  0.927553; ...
>  0.989727; ...
>  0.99519; ...
>  0.943311; ...
>  0.84009; ...
>  0.697525; ...
>  0.532048; ...
>  0.362905; ...
>  0.209593; ...
>  0.0899144; ...
>  0.017743; ...
>  0.00139743; ...
>  0.0427786; ...
>  0.137117; ...
> ];
```

come vedete varianti tra zero e uno.
