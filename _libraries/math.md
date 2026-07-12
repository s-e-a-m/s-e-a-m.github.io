---
title: "Faust Libraries · math"
permalink: /faustlibraries/math/
toc: true
---

#  seam.math.lib 

SEAM Math library. Its official prefix is `sma`.

General-purpose mathematical helpers used across SEAM instruments: angular
and frequency quantities, squared trigonometry, angle and coordinate
conversions, the golden ratio, combinatorics, and acoustic distance/delay
utilities. Only elements not already provided by the standard Faust
`maths.lib` are kept here.

* [References](#references)
* [Constants and Angular Frequency](#constants-and-angular-frequency)
* [Trigonometry](#trigonometry)
* [Angle Conversion](#angle-conversion)
* [Coordinates](#coordinates)
* [Golden Ratio](#golden-ratio)
* [Combinatorics](#combinatorics)
* [Acoustics](#acoustics)

## References

* [https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.math.lib](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.math.lib)

##  Constants and Angular Frequency 

Angular constants and helpers that turn a frequency in Hz into the angular
quantities used by oscillators and filter design.

----

### `(sma.)twoPI`

The constant `2*pi` (a full turn in radians). Convenience for angular-rate
math, where a cycle spans `2*pi` radians.

#### Usage
```
sma.twoPI : _
```

#### Test
```
sma = library("seam.math.lib");
twoPI_test = sma.twoPI;
```

----

### `(sma.)omega`

Normalised angular frequency of `fc` in radians per sample:
`omega = fc*2*pi/SR`. This is the per-sample phase increment of a sinusoid
at `fc` Hz.

#### Usage
```
omega(fc) : _
```
Where:

* `fc`: frequency in Hz

#### Test
```
sma = library("seam.math.lib");
omega_test = sma.omega(1000);
```

----

### `(sma.)prewarp`

Bilinear-transform frequency pre-warping: `tan(pi*fc/SR/2)`. Maps a target
cutoff `fc` (Hz) to the warped value the bilinear transform expects, so an
analog prototype lands on the intended digital frequency. Used by the
`seam.filters` designs.

#### Usage
```
prewarp(fc) : _
```
Where:

* `fc`: cutoff frequency in Hz

#### Test
```
sma = library("seam.math.lib");
prewarp_test = sma.prewarp(1000);
```

##  Trigonometry 

Squared trigonometric helpers (e.g. for equal-power laws and identities).

----

### `(sma.)cosq`

Squared cosine: `cos(x)^2`.

#### Usage
```
cosq(x) : _
```
Where:

* `x`: angle in radians

#### Test
```
sma = library("seam.math.lib");
cosq_test = sma.cosq(ma.PI);
```

----

### `(sma.)sinq`

Squared sine: `sin(x)^2`.

#### Usage
```
sinq(x) : _
```
Where:

* `x`: angle in radians

#### Test
```
sma = library("seam.math.lib");
sinq_test = sma.sinq(3/2*ma.PI);
```

##  Angle Conversion 


----

### `(sma.)d2r`

Degrees to radians: `d*pi/180`.

#### Usage
```
d2r(d) : _
```
Where:

* `d`: angle in degrees

#### Test
```
sma = library("seam.math.lib");
d2r_test = sma.d2r(90);
```

----

### `(sma.)r2d`

Radians to degrees: `r*180/pi`.

#### Usage
```
r2d(r) : _
```
Where:

* `r`: angle in radians

#### Test
```
sma = library("seam.math.lib");
r2d_test = sma.r2d(ma.PI);
```

##  Coordinates 

Conversions between spherical (azimuth, elevation, distance) and Cartesian
(x, y, z) coordinates. Angles are in radians; elevation is measured from
the horizontal plane (`e=0` on the plane, `e=pi/2` straight up). `aed2xyz`
and `xyz2aed` are exact inverses.

----

### `(sma.)aed2xyz`

Azimuth / elevation / distance to Cartesian `x, y, z`:
`x = d*cos(a)*cos(e)`, `y = d*sin(a)*cos(e)`, `z = d*sin(e)`.

#### Usage
```
aed2xyz(a,e,d) : _,_,_
```
Where:

* `a`: azimuth in radians
* `e`: elevation in radians (from the horizontal plane)
* `d`: distance (radius)

#### Test
```
sma = library("seam.math.lib");
aed2xyz_test = sma.aed2xyz(0,0,1);
```

----

### `(sma.)xyz2aed`

Cartesian `x, y, z` to azimuth / elevation / distance:
`a = atan2(y,x)`, `e = atan2(z, sqrt(x^2+y^2))`, `d = sqrt(x^2+y^2+z^2)`.
The exact inverse of `aed2xyz` (elevation measured from the horizontal
plane).

#### Usage
```
xyz2aed(x,y,z) : _,_,_
```
Where:

* `x`, `y`, `z`: Cartesian coordinates

#### Test
```
sma = library("seam.math.lib");
xyz2aed_test = sma.xyz2aed(1,1,1) : sma.r2d, sma.r2d, _;
```

##  Golden Ratio 


----

### `(sma.)phi`

Scales `x` by the golden ratio `phi = (1+sqrt(5))/2 ~= 1.618`.

#### Usage
```
phi(x) : _
```
Where:

* `x`: value to scale

#### Test
```
sma = library("seam.math.lib");
phi_test = sma.phi(1);
```

----

### `(sma.)rphi`

Scales `x` by the reciprocal golden ratio `1/phi = (sqrt(5)-1)/2 ~= 0.618`.

#### Usage
```
rphi(x) : _
```
Where:

* `x`: value to scale

#### Test
```
sma = library("seam.math.lib");
rphi_test = sma.rphi(1);
```

----

### `(sma.)srphi`

Reciprocal-golden progression: applies `rphi` to `x` a total of `i` times,
i.e. the `i`-th term of the geometric sequence with ratio `1/phi`.

#### Usage
```
srphi(i,x) : _
```
Where:

* `i`: number of iterations (compile-time integer)
* `x`: starting value

#### Test
```
sma = library("seam.math.lib");
srphi_test = par(i,16,sma.srphi(i,ma.SR/2));
```

##  Combinatorics 


----

### `(sma.)factorial`

Factorial `n! = n*(n-1)*...*1` (with `0! = 1`), by compile-time recursion.

#### Usage
```
factorial(n)
```
Where:

* `n`: non-negative integer (compile-time constant)

#### Test
```
sma = library("seam.math.lib");
factorial_test = sma.factorial(5);
```

----

### `(sma.)permutation`

Number of ordered arrangements of `k` items taken from `n`:
`P(n,k) = n!/(n-k)!`. Requires `n >= k >= 0`.

#### Usage
```
permutation(n,k)
```
Where:

* `n`: size of the set (compile-time integer)
* `k`: number of items chosen (compile-time integer, `<= n`)

#### Test
```
sma = library("seam.math.lib");
permutation_test = sma.permutation(5,2);
```

##  Acoustics 

Speed of sound and distance-to-delay helpers for physical spatialisation.
SEAM distinguishes an `exterior` (open-air) and an `interior` (room) speed
of sound.

----

### `(sma.)esos`

Exterior speed of sound: `344` m/s (open air, ~20 degrees C).

#### Usage
```
sma.esos : _
```

#### Test
```
sma = library("seam.math.lib");
esos_test = sma.esos;
```

----

### `(sma.)isos`

Interior speed of sound: `331.4` m/s (~0 degrees C reference).

#### Usage
```
sma.isos : _
```

#### Test
```
sma = library("seam.math.lib");
isos_test = sma.isos;
```

----

### `(sma.)emt2samp`

Metres to whole samples using the exterior speed of sound:
`int(mt*SR/esos)`.

#### Usage
```
emt2samp(mt)
```
Where:

* `mt`: distance in metres

#### Test
```
sma = library("seam.math.lib");
emt2samp_test = sma.emt2samp(3.4);
```

----

### `(sma.)imt2samp`

Metres to whole samples using the interior speed of sound:
`int(mt*SR/isos)`.

#### Usage
```
imt2samp(mt)
```
Where:

* `mt`: distance in metres

#### Test
```
sma = library("seam.math.lib");
imt2samp_test = sma.imt2samp(3.4);
```

----

### `(sma.)imdelay`

Pure integer-sample delay for a distance `mt` in metres, using the interior
speed of sound. The one stateful function in this library. Delay line is
`1<<15` samples (~0.68 s at 48 kHz, ~226 m). Used by the SEAM-LTM DDELAY
plugin (per channel).

#### Usage
```
_ : imdelay(mt) : _
```
Where:

* `mt`: distance in metres

#### Test
```
no = library("noises.lib");
sma = library("seam.math.lib");
imdelay_test = no.noise : sma.imdelay(3.4);
```
