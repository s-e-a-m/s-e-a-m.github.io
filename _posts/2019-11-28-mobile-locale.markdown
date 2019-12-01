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

La lettura della partitura, l'articolazione degli schemi di connessione e dei
diagrammi di flusso (in partitura è presente un secondo diagramma, più esploso e
dettagliato del precedente, che verrà illustrato in seguito) suggeriscono di
iniziare la stesura del codice posizionando qualche scatola vuota che riempiremo
di codice un po' per volta.

```
import("stdfaust.lib");
process = _ <: _,_;
```

I primi 7 caratteri aggiunti ci forniscono la prima ramificazione del segnale:
una copia del segnale si dirigerà verso la linea di ritardo, *QA&QF*, mentre una seconda
copia del segnale entrerà nel blocco *early reflections*.

```
import("stdfaust.lib");
qaqf = _,_,_,_;
er8comb = _,_,_,_;
process = _ <: qaqf, er8comb;
```

La riga `qaqf = _,_,_,_;` ci dice che ci saranno 4 uscite da *QA&QF* mentre in
partitura ne troviamo richieste solo 2: `output 1 - 3`. Potremmo dirgli
`qaqf = _,_;` ed avere solo due uscite ma sarebbe molto più articolato poi
spiegare a **Faust** che la seconda uscita in realtà è la terza, che in realtà è
identica alla prima. Il problema è quindi di *routing* che, nella fase iniziale
della progettazione dovrebbe essere più semplice possibile. Se impostassiimo
un routing di uscita *complesso* non riusciremmo più a gestire il traffico dei
canali. È molto più semplice gestire la simmetria, magari *spegnendo* qualche
canale (moltiplicandolo per zero) piuttosto che impostare in partenza un routing
articolato. Anche perché con un minimo sguardo in avanti dalle *early reflections*
dovranno uscire 5 canali… *fidatevi!* simmetrici è meglio.

Dovremo accettare di rompere un po' di cose prima di arrivare a *QA&QF* completo.

Il primo passo, un oscillatore sinusoidale. Faust ne ha un catalogo… partiamo dal
semplice oscillatore tabellare `os.osc(freq)`.

```
qaqf = poscil <: _,_,_,_
  with{
      poscil = os.osc(42);
  };
```

In questo modo chiediamo ad un oscillatore sinusoidale di uscire sulle 4 uscite
di *QA&QF*. Abbiamo rotto l'entrata, ma ne siamo consapevoli.

```
qaqf(x) = poscil <: _,_,_,_
  with{
      poscil = os.osc(42);
  };
```

L'aggiunta della variabile `x` ci permette ri ripristinare un canale di entrata
non ancora utilizzato dalla funzione.

L'oscillatore sta vibrando tra `+1` e `-1`. Il nostro oscillatore, ci viene
chiesto dal compositore, dovrà controllare l'*indice* di lettura di un delay.
Ora, dovremmo ragionare un po' sul funzionamento di questo meccanismo di lettura.
Se immaginate un'oscillazione sinusoidale orizzontale è piuttosto complicata la
questione, ma se ve la figurate verticale, come se, leggendo un libro con il
vostro indice di lettura seguiste un moto ondulatorio, oscillatorio, avanti e
dietro sulla stessa riga di testo, ecco che avete già plasmato il vostro
oscillatore di lettura. Se non avete un libro a portata di mano, fatelo ora con
la tastiera del vostro computer:

```
qwertyuiopoiuytrewqwertyuiopoiuytrewqwertyuiopoiuytrewq
```

ho oscillato tra tra `q` e `p`, tre volte. Il mio indice di lettura si è mosso tre volte
avanti e dietro lungo le lettere `qwertyuiop`.

L'oscillarore dovà fare la stessa cosa. La tabella del ritardo sarà una tabella
di campioni, quanti campioni, tanti campioni, mettiamo `qwertyuiop` campioni.
L'oscillatore dovrà muoversi tra il suo minimo `q` e il suo massimo `p` in
maniera sinuosa.

Per farlo però l'oscillatore non dovrà più avere valori negativi (`-1`), il suo
minimo dovrà essere il valore zero, la nostra lettera `q`, ed il suo massimo il
valore uno, `p`.

```
qaqf(x) = poscil <: _,_,_,_
  with{
      poscil = os.osc(42) *(0.5) +(0.5);
  };
```

Abbiamo realizzato quello che si definisce un oscillatore unipolare positivo (*poscil*).
Di seguito 16 campioni di *poscil*, come vedrete, varianti tra zero e uno:

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

Il compositore distingue tra parametri operativi e parametri esecutivi. I primi
sono quelli che si impostano per rendere il tutto funzionante ed adatto all'esecuzione,
i secondi sono gestiti durante l'interpretazione stessa. I  parametri *QF* e *QA*
sono etichettati in partitura *RTC* (*Real Time Control*) e quindi apparteneneti
alla seconda categoria, devono avere *pomelli* variabili espressivamente.
Sostituiamo quindi ai valori precedentemente immessi con dei valori forniti da
controlli rotativi:

```
qaqf(x) = poscil <: _,_,_,_
  with{
    poscil = os.osc(freq) : *(amp) : +(amp);
    freq = vslider("[01] QF [style:knob]", 0.1,0.1,320,0.01) : si.smoo;
    amp = vslider("[02] QA [style:knob]", 0.5,0.0,0.5,0.01) : si.smoo;
  };
```

Passando all'oggetto grafico `vslider` l'opzione `style:knob` si predispone un
controllo rotativo. I controlli grafici richiedono quattro parametri: *valore iniziale,
valore minimo, valore massimo, precisione*. Per fissare gli ambiti di frequenza
è necessario uno sguardo più approfondito alla partitura, dalla quale si ricava un ambito
di azione tra *0.1Hz* a *320.0Hz*. L'ampiezza varia solo positivamente tra *0* e *1* attraverso
l'operazione `*(amp) : +(amp)` dove ad *amp = 0.5* avremmo `0.5 + 0.5 = 1`.

Un altro parametro di controllo appartenente al blocco *QA&QF* è *gain*, controllo di
ampiezza a valle del delay, che possiamo già inserire nel nostro codice attraverso

```
qaqf(x) = poscil <: _,_,_,_
  with{
    qaqf(x) = poscil : *(gain) <: _,_,_,_
    freq = vslider("[01] QF [style:knob]", 0.1,0.1,320,0.01) : si.smoo;
    amp = vslider("[02] QA [style:knob]", 0.5,0.0,0.5,0.01) : si.smoo;
    gain = vslider("[03] GAIN [style:knob]", 0,0,5,0.01) : si.smoo;
  };
```

È giunto il momento di inserire la linea di ritardo. Faust offre una libreria *delay*
di meravigliose e dettagliate funzioni di ritardo. Scegliamo `fdelayltv`. Perché?
È troppo presto per rispondere. Applichiamola e poi ne parliamo.

Questo il blocco comleto, funzionante che poi descriveremo.

```
qaqf(x) = de.fdelayltv(1,writesize, poscil*(writesize), x) : *(gain) <: _,_*(0),_,*(0)
  with{
    oscgroup(x) = hgroup("[01] OSCILLATOR", x);
    poscil = oscgroup(os.oscsin(freq) : *(amp) : +(amp));
    freq = vslider("[01] QF [style:knob]", 0.1,0.1,320,0.01) : si.smoo;
    amp = vslider("[02] QA [style:knob]", 0.5,0.0,0.5,0.01) : si.smoo;
    writesize = ba.sec2samp(0.046);
    gain = oscgroup(vslider("[03] GAIN [style:knob]", 0,0,5,0.01) : si.smoo);
  };
```

Ora che ci avete giocato un  po' attraverso i controlli rotativi attraverso l'IDE online, possiamo descriverlo brevemente.
