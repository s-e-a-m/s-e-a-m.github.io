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
