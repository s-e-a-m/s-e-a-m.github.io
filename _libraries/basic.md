---
title: "Faust Libraries · basic"
permalink: /faustlibraries/basic/
toc: true
---

#  seam.basic.lib 

SEAM Basics library. Its official prefix is `sba`.

Reusable low-level building blocks that EXTEND the standard Faust `basics.lib`:
only elements not already provided upstream are kept here.

* [Sweep Functions](#sweep-functions)
* [List Functions](#list-functions)
* [Scaling](#scaling)
* [Routing](#routing)

#### References

* [https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.basic.lib](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.basic.lib)

##  Sweep Functions 

Ramp/counter generators used across SEAM instruments.

----

### `(sba.)sweep`

Repeating sample counter. Differs from `ba.sweep`: it counts from **0** to
`(p*t)-1` (via the `1'` seed) rather than starting at 1, and uses `p*t` as
the period.

#### Usage
```
sweep(p,t) : _
```
Where:

* `p`: base period in samples
* `t`: period multiplier (final period is `p*t`)

#### Test
```
sba = library("seam.basic.lib");
sweep_test = sba.sweep(1,10);
```

----

### `(sba.)lsweep`

Linear sweep from 0 up to Nyquist (`ma.SR/2`), repeating every `sec` seconds.

#### Usage
```
lsweep(sec,t) : _
```
Where:

* `sec`: sweep duration in seconds
* `t`: period multiplier

#### Test
```
sba = library("seam.basic.lib");
lsweep_test = sba.lsweep(0.01,1);
```

----

### `(sba.)zsweep`

Zero-padded sweep: a `sweep` of length `p` preceded by `p` samples of zero,
yielding a `2p+1` frame useful for zero-padded spectral analysis.

#### Usage
```
zsweep(p) : _
```
Where:

* `p`: sweep length in samples

#### Test
```
sba = library("seam.basic.lib");
zsweep_test = sba.zsweep(10);
```

----

### `(sba.)zerox`

One-sample pulse on a **rising** zero crossing (negative -> non-negative).
A directional variant of `ma.zc`, which fires on any crossing.

#### Usage
```
_ : zerox : _
```
Where the input is any signal; output is 1 for one sample at each upward
zero crossing, 0 otherwise.

#### Test
```
os = library("oscillators.lib");
sba = library("seam.basic.lib");
zerox_test = os.osc(1000) : sba.zerox;
```

##  List Functions 


----

### `(sba.)revlist`

Parallel bus of `n` constants counting DOWN: `n, n-1, ... , 1`.

#### Usage
```
revlist(n)
```
Where:

* `n`: number of parallel outputs (compile-time constant)

#### Test
```
sba = library("seam.basic.lib");
revlist_test = sba.revlist(23);
```

##  Scaling 


----

### `(sba.)scalel`

Linear (affine) rescale of `x` from input range `[a,b]` to output range
`[c,d]`.

#### Usage
```
_ : scalel(a,b,c,d) : _
```
Where:

* `a`, `b`: input range (min, max)
* `c`, `d`: output range (min, max)

#### Test
```
os = library("oscillators.lib");
sba = library("seam.basic.lib");
scalel_test = os.osc(1000) : sba.scalel(-1,1,0,1);
```

##  Routing 


----

### `(sba.)vstin`

Input manager: pass the first `y` channels through, block the next `n`.

#### Usage
```
si.bus(y+n) : vstin(y,n) : si.bus(y)
```
Where:

* `y`: number of channels to pass
* `n`: number of channels to block

#### Test
```
sba = library("seam.basic.lib");
vstin_test = sba.vstin(1,3);
```
