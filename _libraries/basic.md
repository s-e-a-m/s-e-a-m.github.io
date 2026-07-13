---
title: "Faust Libraries · basic"
permalink: /faustlibraries/basic/
toc: true
---

#  seam.basic.lib 

SEAM Basics library. Its official prefix is `sba`.

Reusable low-level building blocks that EXTEND the standard Faust `basics.lib`:
only elements not already provided upstream are kept here.

* [References](#references)
* [Sweep Functions](#sweep-functions)
* [List Functions](#list-functions)
* [Scaling](#scaling)

## References

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

#### Diagram

<div class="faust-diagram">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 336.000000 128.000000" width="168.000000mm" height="64.000000mm" version="1.1">
<rect x="1.000000" y="1.000000" width="335.000000" height="127.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="0.000000" y="0.000000" width="335.000000" height="127.000000" rx="0" ry="0" style="stroke:none;fill:#ffffff;"/>
<text x="10.000000" y="7.000000" font-family="Arial" font-size="7"></text>
<rect x="25.000000" y="53.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="24.000000" y="52.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="36.000000" y="66.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="26.000000" cy="54.000000" r="1"/>
<rect x="73.000000" y="81.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="72.000000" y="80.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="84.000000" y="94.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">10</text>
<circle cx="74.000000" cy="82.000000" r="1"/>
<rect x="113.000000" y="77.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="112.000000" y="76.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="124.000000" y="90.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">*</text>
<circle cx="114.000000" cy="78.000000" r="1"/>
<line x1="109.000000" y1="83.000000" x2="112.000000" y2="84.000000"  transform="rotate(0.000000,112.000000,84.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="109.000000" y1="85.000000" x2="112.000000" y2="84.000000"  transform="rotate(0.000000,112.000000,84.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="109.000000" y1="91.000000" x2="112.000000" y2="92.000000"  transform="rotate(0.000000,112.000000,92.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="109.000000" y1="93.000000" x2="112.000000" y2="92.000000"  transform="rotate(0.000000,112.000000,92.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="153.000000" y="73.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="152.000000" y="72.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="164.000000" y="86.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="154.000000" cy="74.000000" r="1"/>
<rect x="193.000000" y="77.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="192.000000" y="76.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="204.000000" y="90.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">max</text>
<circle cx="194.000000" cy="78.000000" r="1"/>
<line x1="189.000000" y1="83.000000" x2="192.000000" y2="84.000000"  transform="rotate(0.000000,192.000000,84.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="189.000000" y1="85.000000" x2="192.000000" y2="84.000000"  transform="rotate(0.000000,192.000000,84.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="189.000000" y1="91.000000" x2="192.000000" y2="92.000000"  transform="rotate(0.000000,192.000000,92.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="189.000000" y1="93.000000" x2="192.000000" y2="92.000000"  transform="rotate(0.000000,192.000000,92.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="225.000000" y="77.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="224.000000" y="76.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="236.000000" y="90.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">int</text>
<circle cx="226.000000" cy="78.000000" r="1"/>
<line x1="221.000000" y1="87.000000" x2="224.000000" y2="88.000000"  transform="rotate(0.000000,224.000000,88.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="221.000000" y1="89.000000" x2="224.000000" y2="88.000000"  transform="rotate(0.000000,224.000000,88.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="265.000000" y="73.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="264.000000" y="72.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="276.000000" y="86.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">%</text>
<circle cx="266.000000" cy="74.000000" r="1"/>
<line x1="261.000000" y1="79.000000" x2="264.000000" y2="80.000000"  transform="rotate(0.000000,264.000000,80.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="261.000000" y1="81.000000" x2="264.000000" y2="80.000000"  transform="rotate(0.000000,264.000000,80.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="261.000000" y1="87.000000" x2="264.000000" y2="88.000000"  transform="rotate(0.000000,264.000000,88.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="261.000000" y1="89.000000" x2="264.000000" y2="88.000000"  transform="rotate(0.000000,264.000000,88.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="205.000000" y="25.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="204.000000" y="24.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="216.000000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="226.000000" cy="46.000000" r="1"/>
<rect x="173.000000" y="25.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="172.000000" y="24.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="184.000000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">mem</text>
<circle cx="194.000000" cy="46.000000" r="1"/>
<line x1="199.000000" y1="35.000000" x2="196.000000" y2="36.000000"  transform="rotate(0.000000,196.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="199.000000" y1="37.000000" x2="196.000000" y2="36.000000"  transform="rotate(0.000000,196.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="133.000000" y="29.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="132.000000" y="28.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="144.000000" y="42.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">+</text>
<circle cx="154.000000" cy="50.000000" r="1"/>
<line x1="159.000000" y1="43.000000" x2="156.000000" y2="44.000000"  transform="rotate(0.000000,156.000000,44.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="159.000000" y1="45.000000" x2="156.000000" y2="44.000000"  transform="rotate(0.000000,156.000000,44.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="159.000000" y1="35.000000" x2="156.000000" y2="36.000000"  transform="rotate(0.000000,156.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="159.000000" y1="37.000000" x2="156.000000" y2="36.000000"  transform="rotate(0.000000,156.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="290.000000" y1="84.000000" x2="290.000000" y2="80.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="290.000000" y1="80.000000" x2="294.000000" y2="80.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="294.000000" y1="80.000000" x2="294.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="15.000000" y1="15.000000" x2="15.000000" y2="113.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="113.000000" x2="321.000000" y2="113.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="321.000000" y1="113.000000" x2="321.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="15.000000" x2="20.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="49.025000" y1="15.000000" x2="321.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="20.000000" y="17.000000" font-family="Arial" font-size="7">process</text>
<line x1="323.000000" y1="63.000000" x2="326.000000" y2="64.000000"  transform="rotate(0.000000,326.000000,64.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="323.000000" y1="65.000000" x2="326.000000" y2="64.000000"  transform="rotate(0.000000,326.000000,64.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="48.000000" y1="64.000000" x2="52.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="52.000000" y1="64.000000" x2="60.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="60.000000" y1="64.000000" x2="60.000000" y2="72.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="60.000000" y1="72.000000" x2="60.000000" y2="72.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="60.000000" y1="72.000000" x2="68.000000" y2="72.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="68.000000" y1="40.000000" x2="68.000000" y2="40.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="68.000000" y1="40.000000" x2="68.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="68.000000" y1="64.000000" x2="68.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="68.000000" y1="64.000000" x2="160.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="68.000000" y1="72.000000" x2="84.000000" y2="72.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="84.000000" y1="72.000000" x2="100.000000" y2="72.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="96.000000" y1="92.000000" x2="100.000000" y2="92.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="100.000000" y1="72.000000" x2="108.000000" y2="72.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="100.000000" y1="92.000000" x2="108.000000" y2="92.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="108.000000" y1="72.000000" x2="108.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="108.000000" y1="84.000000" x2="108.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="108.000000" y1="84.000000" x2="112.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="108.000000" y1="92.000000" x2="112.000000" y2="92.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="128.000000" y1="40.000000" x2="68.000000" y2="40.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="132.000000" y1="40.000000" x2="128.000000" y2="40.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="136.000000" y1="88.000000" x2="140.000000" y2="88.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="140.000000" y1="88.000000" x2="148.000000" y2="88.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="148.000000" y1="88.000000" x2="148.000000" y2="104.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="148.000000" y1="104.000000" x2="148.000000" y2="104.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="148.000000" y1="104.000000" x2="164.000000" y2="104.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="160.000000" y1="36.000000" x2="156.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="160.000000" y1="44.000000" x2="156.000000" y2="44.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="160.000000" y1="44.000000" x2="160.000000" y2="44.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="160.000000" y1="56.000000" x2="160.000000" y2="44.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="160.000000" y1="64.000000" x2="252.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="164.000000" y1="104.000000" x2="180.000000" y2="104.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="168.000000" y1="36.000000" x2="160.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="168.000000" y1="56.000000" x2="160.000000" y2="56.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="172.000000" y1="36.000000" x2="168.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="176.000000" y1="84.000000" x2="180.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="180.000000" y1="84.000000" x2="188.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="180.000000" y1="92.000000" x2="188.000000" y2="92.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="180.000000" y1="104.000000" x2="180.000000" y2="92.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="180.000000" y1="104.000000" x2="180.000000" y2="104.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="188.000000" y1="84.000000" x2="192.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="188.000000" y1="92.000000" x2="192.000000" y2="92.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="200.000000" y1="36.000000" x2="196.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="200.000000" y1="36.000000" x2="200.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="200.000000" y1="56.000000" x2="168.000000" y2="56.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="204.000000" y1="36.000000" x2="200.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="216.000000" y1="88.000000" x2="220.000000" y2="88.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="220.000000" y1="88.000000" x2="220.000000" y2="88.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="220.000000" y1="88.000000" x2="224.000000" y2="88.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="232.000000" y1="56.000000" x2="200.000000" y2="56.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="248.000000" y1="88.000000" x2="252.000000" y2="88.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="252.000000" y1="64.000000" x2="260.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="252.000000" y1="88.000000" x2="260.000000" y2="88.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="260.000000" y1="64.000000" x2="260.000000" y2="80.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="260.000000" y1="80.000000" x2="260.000000" y2="80.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="260.000000" y1="80.000000" x2="264.000000" y2="80.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="260.000000" y1="88.000000" x2="264.000000" y2="88.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="288.000000" y1="84.000000" x2="292.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="292.000000" y1="56.000000" x2="232.000000" y2="56.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="292.000000" y1="56.000000" x2="292.000000" y2="56.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="292.000000" y1="80.000000" x2="292.000000" y2="56.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="292.000000" y1="84.000000" x2="294.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="294.000000" y1="84.000000" x2="300.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="300.000000" y1="64.000000" x2="308.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="300.000000" y1="84.000000" x2="300.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="300.000000" y1="84.000000" x2="300.000000" y2="84.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="308.000000" y1="64.000000" x2="312.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="312.000000" y1="64.000000" x2="316.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="316.000000" y1="64.000000" x2="326.000000" y2="64.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
</svg>
</div>

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

#### Diagram

<div class="faust-diagram">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 516.500000 188.000000" width="258.250000mm" height="94.000000mm" version="1.1">
<rect x="1.000000" y="1.000000" width="515.500000" height="187.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="0.000000" y="0.000000" width="515.500000" height="187.000000" rx="0" ry="0" style="stroke:none;fill:#ffffff;"/>
<text x="10.000000" y="7.000000" font-family="Arial" font-size="7"></text>
<rect x="67.900000" y="35.000000" width="38.700000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="66.900000" y="34.000000" width="38.700000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="86.250000" y="48.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1.92e+05f</text>
<circle cx="68.900000" cy="36.000000" r="1"/>
<rect x="54.350000" y="67.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="53.350000" y="66.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="66.250000" y="80.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1.0f</text>
<circle cx="55.350000" cy="68.000000" r="1"/>
<rect x="35.000000" y="99.000000" width="64.500000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="34.000000" y="98.000000" width="64.500000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="66.250000" y="112.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">fSamplingFreq</text>
<circle cx="36.000000" cy="100.000000" r="1"/>
<rect x="115.500000" y="83.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="114.500000" y="82.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="126.500000" y="96.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">max</text>
<circle cx="116.500000" cy="84.000000" r="1"/>
<line x1="111.500000" y1="89.000000" x2="114.500000" y2="90.000000"  transform="rotate(0.000000,114.500000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="111.500000" y1="91.000000" x2="114.500000" y2="90.000000"  transform="rotate(0.000000,114.500000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="111.500000" y1="97.000000" x2="114.500000" y2="98.000000"  transform="rotate(0.000000,114.500000,98.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="111.500000" y1="99.000000" x2="114.500000" y2="98.000000"  transform="rotate(0.000000,114.500000,98.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="155.500000" y="67.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="154.500000" y="66.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="166.500000" y="80.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">min</text>
<circle cx="156.500000" cy="68.000000" r="1"/>
<line x1="151.500000" y1="73.000000" x2="154.500000" y2="74.000000"  transform="rotate(0.000000,154.500000,74.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="151.500000" y1="75.000000" x2="154.500000" y2="74.000000"  transform="rotate(0.000000,154.500000,74.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="151.500000" y1="81.000000" x2="154.500000" y2="82.000000"  transform="rotate(0.000000,154.500000,82.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="151.500000" y1="83.000000" x2="154.500000" y2="82.000000"  transform="rotate(0.000000,154.500000,82.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="25.000000" y1="25.000000" x2="25.000000" y2="131.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="25.000000" y1="131.000000" x2="187.500000" y2="131.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="187.500000" y1="131.000000" x2="187.500000" y2="25.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="25.000000" y1="25.000000" x2="30.000000" y2="25.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="42.900000" y1="25.000000" x2="187.500000" y2="25.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="30.000000" y="27.000000" font-family="Arial" font-size="7">SR</text>
<rect x="95.250000" y="141.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="94.250000" y="140.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="106.250000" y="154.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">2</text>
<circle cx="96.250000" cy="142.000000" r="1"/>
<rect x="205.500000" y="83.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="204.500000" y="82.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="216.500000" y="96.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">/</text>
<circle cx="206.500000" cy="84.000000" r="1"/>
<line x1="201.500000" y1="89.000000" x2="204.500000" y2="90.000000"  transform="rotate(0.000000,204.500000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="201.500000" y1="91.000000" x2="204.500000" y2="90.000000"  transform="rotate(0.000000,204.500000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="201.500000" y1="97.000000" x2="204.500000" y2="98.000000"  transform="rotate(0.000000,204.500000,98.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="201.500000" y1="99.000000" x2="204.500000" y2="98.000000"  transform="rotate(0.000000,204.500000,98.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="253.500000" y="111.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="252.500000" y="110.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="264.500000" y="124.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="254.500000" cy="112.000000" r="1"/>
<rect x="293.500000" y="107.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="292.500000" y="106.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="304.500000" y="120.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">*</text>
<circle cx="294.500000" cy="108.000000" r="1"/>
<line x1="289.500000" y1="113.000000" x2="292.500000" y2="114.000000"  transform="rotate(0.000000,292.500000,114.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="289.500000" y1="115.000000" x2="292.500000" y2="114.000000"  transform="rotate(0.000000,292.500000,114.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="289.500000" y1="121.000000" x2="292.500000" y2="122.000000"  transform="rotate(0.000000,292.500000,122.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="289.500000" y1="123.000000" x2="292.500000" y2="122.000000"  transform="rotate(0.000000,292.500000,122.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="333.500000" y="103.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="332.500000" y="102.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="344.500000" y="116.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="334.500000" cy="104.000000" r="1"/>
<rect x="373.500000" y="107.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="372.500000" y="106.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="384.500000" y="120.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">max</text>
<circle cx="374.500000" cy="108.000000" r="1"/>
<line x1="369.500000" y1="113.000000" x2="372.500000" y2="114.000000"  transform="rotate(0.000000,372.500000,114.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="369.500000" y1="115.000000" x2="372.500000" y2="114.000000"  transform="rotate(0.000000,372.500000,114.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="369.500000" y1="121.000000" x2="372.500000" y2="122.000000"  transform="rotate(0.000000,372.500000,122.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="369.500000" y1="123.000000" x2="372.500000" y2="122.000000"  transform="rotate(0.000000,372.500000,122.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="405.500000" y="107.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="404.500000" y="106.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="416.500000" y="120.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">int</text>
<circle cx="406.500000" cy="108.000000" r="1"/>
<line x1="401.500000" y1="117.000000" x2="404.500000" y2="118.000000"  transform="rotate(0.000000,404.500000,118.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="401.500000" y1="119.000000" x2="404.500000" y2="118.000000"  transform="rotate(0.000000,404.500000,118.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="445.500000" y="103.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="444.500000" y="102.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="456.500000" y="116.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">%</text>
<circle cx="446.500000" cy="104.000000" r="1"/>
<line x1="441.500000" y1="109.000000" x2="444.500000" y2="110.000000"  transform="rotate(0.000000,444.500000,110.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="441.500000" y1="111.000000" x2="444.500000" y2="110.000000"  transform="rotate(0.000000,444.500000,110.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="441.500000" y1="117.000000" x2="444.500000" y2="118.000000"  transform="rotate(0.000000,444.500000,118.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="441.500000" y1="119.000000" x2="444.500000" y2="118.000000"  transform="rotate(0.000000,444.500000,118.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="384.600000" y="55.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="383.600000" y="54.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="396.500000" y="68.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1e+02f</text>
<circle cx="407.400000" cy="76.000000" r="1"/>
<rect x="352.600000" y="55.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="351.600000" y="54.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="363.600000" y="68.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">mem</text>
<circle cx="373.600000" cy="76.000000" r="1"/>
<line x1="378.600000" y1="65.000000" x2="375.600000" y2="66.000000"  transform="rotate(0.000000,375.600000,66.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="378.600000" y1="67.000000" x2="375.600000" y2="66.000000"  transform="rotate(0.000000,375.600000,66.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="312.600000" y="59.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="311.600000" y="58.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="323.600000" y="72.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">+</text>
<circle cx="333.600000" cy="80.000000" r="1"/>
<line x1="338.600000" y1="73.000000" x2="335.600000" y2="74.000000"  transform="rotate(0.000000,335.600000,74.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="338.600000" y1="75.000000" x2="335.600000" y2="74.000000"  transform="rotate(0.000000,335.600000,74.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="338.600000" y1="65.000000" x2="335.600000" y2="66.000000"  transform="rotate(0.000000,335.600000,66.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="338.600000" y1="67.000000" x2="335.600000" y2="66.000000"  transform="rotate(0.000000,335.600000,66.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="470.500000" y1="114.000000" x2="470.500000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="470.500000" y1="110.000000" x2="474.500000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="474.500000" y1="110.000000" x2="474.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="15.000000" y1="15.000000" x2="15.000000" y2="173.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="173.000000" x2="501.500000" y2="173.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="501.500000" y1="173.000000" x2="501.500000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="15.000000" x2="20.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="49.025000" y1="15.000000" x2="501.500000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="20.000000" y="17.000000" font-family="Arial" font-size="7">process</text>
<line x1="503.500000" y1="93.000000" x2="506.500000" y2="94.000000"  transform="rotate(0.000000,506.500000,94.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="503.500000" y1="95.000000" x2="506.500000" y2="94.000000"  transform="rotate(0.000000,506.500000,94.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="79.150000" y1="78.000000" x2="83.150000" y2="78.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="83.150000" y1="78.000000" x2="102.500000" y2="78.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="98.500000" y1="110.000000" x2="102.500000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="102.500000" y1="78.000000" x2="110.500000" y2="78.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="102.500000" y1="98.000000" x2="110.500000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="102.500000" y1="110.000000" x2="102.500000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="102.500000" y1="110.000000" x2="102.500000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="105.600000" y1="46.000000" x2="109.600000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="109.600000" y1="46.000000" x2="142.500000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="110.500000" y1="78.000000" x2="110.500000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="110.500000" y1="90.000000" x2="110.500000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="110.500000" y1="90.000000" x2="114.500000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="110.500000" y1="98.000000" x2="114.500000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="118.250000" y1="152.000000" x2="122.250000" y2="152.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="122.250000" y1="152.000000" x2="192.500000" y2="152.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="138.500000" y1="94.000000" x2="142.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="142.500000" y1="46.000000" x2="150.500000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="142.500000" y1="82.000000" x2="150.500000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="142.500000" y1="94.000000" x2="142.500000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="142.500000" y1="94.000000" x2="142.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="150.500000" y1="46.000000" x2="150.500000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="150.500000" y1="74.000000" x2="150.500000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="150.500000" y1="74.000000" x2="154.500000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="150.500000" y1="82.000000" x2="154.500000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="178.500000" y1="78.000000" x2="182.500000" y2="78.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="182.500000" y1="78.000000" x2="192.500000" y2="78.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="192.500000" y1="78.000000" x2="200.500000" y2="78.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="192.500000" y1="98.000000" x2="200.500000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="192.500000" y1="152.000000" x2="192.500000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="192.500000" y1="152.000000" x2="192.500000" y2="152.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="200.500000" y1="78.000000" x2="200.500000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="200.500000" y1="90.000000" x2="200.500000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="200.500000" y1="90.000000" x2="204.500000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="200.500000" y1="98.000000" x2="204.500000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="228.500000" y1="94.000000" x2="232.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="232.500000" y1="94.000000" x2="240.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="240.500000" y1="94.000000" x2="240.500000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="240.500000" y1="102.000000" x2="240.500000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="240.500000" y1="102.000000" x2="248.500000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="248.500000" y1="94.000000" x2="340.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="248.500000" y1="102.000000" x2="264.500000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="248.500000" y1="70.000000" x2="248.500000" y2="70.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="248.500000" y1="70.000000" x2="248.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="248.500000" y1="94.000000" x2="248.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="264.500000" y1="102.000000" x2="280.500000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="276.500000" y1="122.000000" x2="280.500000" y2="122.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="280.500000" y1="102.000000" x2="288.500000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="280.500000" y1="122.000000" x2="288.500000" y2="122.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="288.500000" y1="102.000000" x2="288.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="288.500000" y1="114.000000" x2="288.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="288.500000" y1="114.000000" x2="292.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="288.500000" y1="122.000000" x2="292.500000" y2="122.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="307.600000" y1="70.000000" x2="248.500000" y2="70.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="311.600000" y1="70.000000" x2="307.600000" y2="70.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="316.500000" y1="118.000000" x2="320.500000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="320.500000" y1="118.000000" x2="328.500000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="328.500000" y1="118.000000" x2="328.500000" y2="134.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="328.500000" y1="134.000000" x2="328.500000" y2="134.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="328.500000" y1="134.000000" x2="344.500000" y2="134.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="339.600000" y1="66.000000" x2="335.600000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="339.600000" y1="74.000000" x2="335.600000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="339.600000" y1="74.000000" x2="339.600000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="339.600000" y1="86.000000" x2="339.600000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="340.500000" y1="94.000000" x2="432.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="344.500000" y1="134.000000" x2="360.500000" y2="134.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="347.600000" y1="66.000000" x2="339.600000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="347.600000" y1="86.000000" x2="339.600000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="351.600000" y1="66.000000" x2="347.600000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="356.500000" y1="114.000000" x2="360.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="360.500000" y1="114.000000" x2="368.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="360.500000" y1="122.000000" x2="368.500000" y2="122.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="360.500000" y1="134.000000" x2="360.500000" y2="122.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="360.500000" y1="134.000000" x2="360.500000" y2="134.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="368.500000" y1="114.000000" x2="372.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="368.500000" y1="122.000000" x2="372.500000" y2="122.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="379.600000" y1="66.000000" x2="375.600000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="379.600000" y1="66.000000" x2="379.600000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="380.500000" y1="86.000000" x2="347.600000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="383.600000" y1="66.000000" x2="379.600000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="396.500000" y1="118.000000" x2="400.500000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="400.500000" y1="118.000000" x2="400.500000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="400.500000" y1="118.000000" x2="404.500000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="413.400000" y1="86.000000" x2="380.500000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="428.500000" y1="118.000000" x2="432.500000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="432.500000" y1="94.000000" x2="440.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="432.500000" y1="118.000000" x2="440.500000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="440.500000" y1="94.000000" x2="440.500000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="440.500000" y1="110.000000" x2="440.500000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="440.500000" y1="110.000000" x2="444.500000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="440.500000" y1="118.000000" x2="444.500000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="468.500000" y1="114.000000" x2="472.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="472.500000" y1="86.000000" x2="413.400000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="472.500000" y1="86.000000" x2="472.500000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="472.500000" y1="110.000000" x2="472.500000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="472.500000" y1="114.000000" x2="474.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="474.500000" y1="114.000000" x2="480.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="480.500000" y1="94.000000" x2="488.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="480.500000" y1="114.000000" x2="480.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="480.500000" y1="114.000000" x2="480.500000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="488.500000" y1="94.000000" x2="492.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="492.500000" y1="94.000000" x2="496.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="496.500000" y1="94.000000" x2="506.500000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
</svg>
</div>

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

#### Diagram

<div class="faust-diagram">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 739.600000 180.000000" width="369.800000mm" height="90.000000mm" version="1.1">
<rect x="1.000000" y="1.000000" width="738.600000" height="179.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="0.000000" y="0.000000" width="738.600000" height="179.000000" rx="0" ry="0" style="stroke:none;fill:#ffffff;"/>
<text x="10.000000" y="7.000000" font-family="Arial" font-size="7"></text>
<rect x="35.000000" y="63.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="34.000000" y="62.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="46.000000" y="76.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">21</text>
<circle cx="36.000000" cy="64.000000" r="1"/>
<rect x="83.000000" y="91.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="82.000000" y="90.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="94.000000" y="104.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="84.000000" cy="92.000000" r="1"/>
<rect x="123.000000" y="87.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="122.000000" y="86.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="134.000000" y="100.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">*</text>
<circle cx="124.000000" cy="88.000000" r="1"/>
<line x1="119.000000" y1="93.000000" x2="122.000000" y2="94.000000"  transform="rotate(0.000000,122.000000,94.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="119.000000" y1="95.000000" x2="122.000000" y2="94.000000"  transform="rotate(0.000000,122.000000,94.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="119.000000" y1="101.000000" x2="122.000000" y2="102.000000"  transform="rotate(0.000000,122.000000,102.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="119.000000" y1="103.000000" x2="122.000000" y2="102.000000"  transform="rotate(0.000000,122.000000,102.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="163.000000" y="83.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="162.000000" y="82.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="174.000000" y="96.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="164.000000" cy="84.000000" r="1"/>
<rect x="203.000000" y="87.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="202.000000" y="86.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="214.000000" y="100.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">max</text>
<circle cx="204.000000" cy="88.000000" r="1"/>
<line x1="199.000000" y1="93.000000" x2="202.000000" y2="94.000000"  transform="rotate(0.000000,202.000000,94.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="199.000000" y1="95.000000" x2="202.000000" y2="94.000000"  transform="rotate(0.000000,202.000000,94.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="199.000000" y1="101.000000" x2="202.000000" y2="102.000000"  transform="rotate(0.000000,202.000000,102.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="199.000000" y1="103.000000" x2="202.000000" y2="102.000000"  transform="rotate(0.000000,202.000000,102.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="235.000000" y="87.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="234.000000" y="86.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="246.000000" y="100.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">int</text>
<circle cx="236.000000" cy="88.000000" r="1"/>
<line x1="231.000000" y1="97.000000" x2="234.000000" y2="98.000000"  transform="rotate(0.000000,234.000000,98.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="231.000000" y1="99.000000" x2="234.000000" y2="98.000000"  transform="rotate(0.000000,234.000000,98.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="275.000000" y="83.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="274.000000" y="82.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="286.000000" y="96.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">%</text>
<circle cx="276.000000" cy="84.000000" r="1"/>
<line x1="271.000000" y1="89.000000" x2="274.000000" y2="90.000000"  transform="rotate(0.000000,274.000000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="271.000000" y1="91.000000" x2="274.000000" y2="90.000000"  transform="rotate(0.000000,274.000000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="271.000000" y1="97.000000" x2="274.000000" y2="98.000000"  transform="rotate(0.000000,274.000000,98.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="271.000000" y1="99.000000" x2="274.000000" y2="98.000000"  transform="rotate(0.000000,274.000000,98.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="215.000000" y="35.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="214.000000" y="34.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="226.000000" y="48.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="236.000000" cy="56.000000" r="1"/>
<rect x="183.000000" y="35.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="182.000000" y="34.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="194.000000" y="48.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">mem</text>
<circle cx="204.000000" cy="56.000000" r="1"/>
<line x1="209.000000" y1="45.000000" x2="206.000000" y2="46.000000"  transform="rotate(0.000000,206.000000,46.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="209.000000" y1="47.000000" x2="206.000000" y2="46.000000"  transform="rotate(0.000000,206.000000,46.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="143.000000" y="39.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="142.000000" y="38.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="154.000000" y="52.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">+</text>
<circle cx="164.000000" cy="60.000000" r="1"/>
<line x1="169.000000" y1="53.000000" x2="166.000000" y2="54.000000"  transform="rotate(0.000000,166.000000,54.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="169.000000" y1="55.000000" x2="166.000000" y2="54.000000"  transform="rotate(0.000000,166.000000,54.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="169.000000" y1="45.000000" x2="166.000000" y2="46.000000"  transform="rotate(0.000000,166.000000,46.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="169.000000" y1="47.000000" x2="166.000000" y2="46.000000"  transform="rotate(0.000000,166.000000,46.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="300.000000" y1="94.000000" x2="300.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="300.000000" y1="90.000000" x2="304.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="304.000000" y1="90.000000" x2="304.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="25.000000" y1="25.000000" x2="25.000000" y2="123.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="25.000000" y1="123.000000" x2="315.000000" y2="123.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="315.000000" y1="123.000000" x2="315.000000" y2="25.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="25.000000" y1="25.000000" x2="30.000000" y2="25.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="75.150000" y1="25.000000" x2="315.000000" y2="25.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="30.000000" y="27.000000" font-family="Arial" font-size="7">sweep(21)(1)</text>
<rect x="159.000000" y="133.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="158.000000" y="132.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="170.000000" y="146.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">10</text>
<circle cx="160.000000" cy="134.000000" r="1"/>
<rect x="341.000000" y="79.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="340.000000" y="78.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="352.000000" y="92.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">&lt;</text>
<circle cx="342.000000" cy="80.000000" r="1"/>
<line x1="337.000000" y1="85.000000" x2="340.000000" y2="86.000000"  transform="rotate(0.000000,340.000000,86.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="337.000000" y1="87.000000" x2="340.000000" y2="86.000000"  transform="rotate(0.000000,340.000000,86.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="337.000000" y1="93.000000" x2="340.000000" y2="94.000000"  transform="rotate(0.000000,340.000000,94.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="337.000000" y1="95.000000" x2="340.000000" y2="94.000000"  transform="rotate(0.000000,340.000000,94.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="383.000000" y="79.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="382.000000" y="78.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#47945E;"/>
<text x="394.900000" y="92.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">[1] t</text>
<circle cx="384.000000" cy="80.000000" r="1"/>
<line x1="379.000000" y1="89.000000" x2="382.000000" y2="90.000000"  transform="rotate(0.000000,382.000000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="379.000000" y1="91.000000" x2="382.000000" y2="90.000000"  transform="rotate(0.000000,382.000000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="416.800000" y="79.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="415.800000" y="78.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="427.800000" y="92.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">10</text>
<circle cx="417.800000" cy="80.000000" r="1"/>
<rect x="464.800000" y="107.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="463.800000" y="106.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#47945E;"/>
<text x="476.700000" y="120.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">[1] t</text>
<circle cx="465.800000" cy="108.000000" r="1"/>
<rect x="506.600000" y="103.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="505.600000" y="102.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="517.600000" y="116.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">*</text>
<circle cx="507.600000" cy="104.000000" r="1"/>
<line x1="502.600000" y1="109.000000" x2="505.600000" y2="110.000000"  transform="rotate(0.000000,505.600000,110.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="502.600000" y1="111.000000" x2="505.600000" y2="110.000000"  transform="rotate(0.000000,505.600000,110.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="502.600000" y1="117.000000" x2="505.600000" y2="118.000000"  transform="rotate(0.000000,505.600000,118.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="502.600000" y1="119.000000" x2="505.600000" y2="118.000000"  transform="rotate(0.000000,505.600000,118.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="546.600000" y="99.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="545.600000" y="98.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="557.600000" y="112.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="547.600000" cy="100.000000" r="1"/>
<rect x="586.600000" y="103.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="585.600000" y="102.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="597.600000" y="116.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">max</text>
<circle cx="587.600000" cy="104.000000" r="1"/>
<line x1="582.600000" y1="109.000000" x2="585.600000" y2="110.000000"  transform="rotate(0.000000,585.600000,110.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="582.600000" y1="111.000000" x2="585.600000" y2="110.000000"  transform="rotate(0.000000,585.600000,110.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="582.600000" y1="117.000000" x2="585.600000" y2="118.000000"  transform="rotate(0.000000,585.600000,118.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="582.600000" y1="119.000000" x2="585.600000" y2="118.000000"  transform="rotate(0.000000,585.600000,118.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="618.600000" y="103.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="617.600000" y="102.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="629.600000" y="116.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">int</text>
<circle cx="619.600000" cy="104.000000" r="1"/>
<line x1="614.600000" y1="113.000000" x2="617.600000" y2="114.000000"  transform="rotate(0.000000,617.600000,114.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="614.600000" y1="115.000000" x2="617.600000" y2="114.000000"  transform="rotate(0.000000,617.600000,114.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="658.600000" y="99.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="657.600000" y="98.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="669.600000" y="112.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">%</text>
<circle cx="659.600000" cy="100.000000" r="1"/>
<line x1="654.600000" y1="105.000000" x2="657.600000" y2="106.000000"  transform="rotate(0.000000,657.600000,106.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="654.600000" y1="107.000000" x2="657.600000" y2="106.000000"  transform="rotate(0.000000,657.600000,106.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="654.600000" y1="113.000000" x2="657.600000" y2="114.000000"  transform="rotate(0.000000,657.600000,114.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="654.600000" y1="115.000000" x2="657.600000" y2="114.000000"  transform="rotate(0.000000,657.600000,114.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="597.700000" y="51.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="596.700000" y="50.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#f44800;"/>
<text x="608.700000" y="64.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">1</text>
<circle cx="618.700000" cy="72.000000" r="1"/>
<rect x="565.700000" y="51.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="564.700000" y="50.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="576.700000" y="64.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">mem</text>
<circle cx="586.700000" cy="72.000000" r="1"/>
<line x1="591.700000" y1="61.000000" x2="588.700000" y2="62.000000"  transform="rotate(0.000000,588.700000,62.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="591.700000" y1="63.000000" x2="588.700000" y2="62.000000"  transform="rotate(0.000000,588.700000,62.000000)" style="stroke: black; stroke-width:0.25;"/>
<rect x="525.700000" y="55.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="524.700000" y="54.000000" width="24.000000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#4B71A1;"/>
<text x="536.700000" y="68.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">+</text>
<circle cx="546.700000" cy="76.000000" r="1"/>
<line x1="551.700000" y1="69.000000" x2="548.700000" y2="70.000000"  transform="rotate(0.000000,548.700000,70.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="551.700000" y1="71.000000" x2="548.700000" y2="70.000000"  transform="rotate(0.000000,548.700000,70.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="551.700000" y1="61.000000" x2="548.700000" y2="62.000000"  transform="rotate(0.000000,548.700000,62.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="551.700000" y1="63.000000" x2="548.700000" y2="62.000000"  transform="rotate(0.000000,548.700000,62.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="683.600000" y1="110.000000" x2="683.600000" y2="106.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="683.600000" y1="106.000000" x2="687.600000" y2="106.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="687.600000" y1="106.000000" x2="687.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="373.000000" y1="41.000000" x2="373.000000" y2="139.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="373.000000" y1="139.000000" x2="698.600000" y2="139.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="698.600000" y1="139.000000" x2="698.600000" y2="41.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="373.000000" y1="41.000000" x2="378.000000" y2="41.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="413.475000" y1="41.000000" x2="698.600000" y2="41.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="378.000000" y="43.000000" font-family="Arial" font-size="7">sweep(10)</text>
<line x1="15.000000" y1="15.000000" x2="15.000000" y2="165.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="165.000000" x2="724.600000" y2="165.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="724.600000" y1="165.000000" x2="724.600000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="15.000000" x2="20.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="49.025000" y1="15.000000" x2="724.600000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="20.000000" y="17.000000" font-family="Arial" font-size="7">process</text>
<line x1="726.600000" y1="89.000000" x2="729.600000" y2="90.000000"  transform="rotate(0.000000,729.600000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="726.600000" y1="91.000000" x2="729.600000" y2="90.000000"  transform="rotate(0.000000,729.600000,90.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="58.000000" y1="74.000000" x2="62.000000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="62.000000" y1="74.000000" x2="70.000000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="70.000000" y1="74.000000" x2="70.000000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="70.000000" y1="82.000000" x2="70.000000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="70.000000" y1="82.000000" x2="78.000000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="78.000000" y1="50.000000" x2="78.000000" y2="50.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="78.000000" y1="50.000000" x2="78.000000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="78.000000" y1="74.000000" x2="78.000000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="78.000000" y1="74.000000" x2="170.000000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="78.000000" y1="82.000000" x2="94.000000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="94.000000" y1="82.000000" x2="110.000000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="106.000000" y1="102.000000" x2="110.000000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="110.000000" y1="82.000000" x2="118.000000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="110.000000" y1="102.000000" x2="118.000000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="118.000000" y1="82.000000" x2="118.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="118.000000" y1="94.000000" x2="118.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="118.000000" y1="94.000000" x2="122.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="118.000000" y1="102.000000" x2="122.000000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="138.000000" y1="50.000000" x2="78.000000" y2="50.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="142.000000" y1="50.000000" x2="138.000000" y2="50.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="146.000000" y1="98.000000" x2="150.000000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="150.000000" y1="98.000000" x2="158.000000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="158.000000" y1="98.000000" x2="158.000000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="158.000000" y1="114.000000" x2="158.000000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="158.000000" y1="114.000000" x2="174.000000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="170.000000" y1="46.000000" x2="166.000000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="170.000000" y1="54.000000" x2="166.000000" y2="54.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="170.000000" y1="54.000000" x2="170.000000" y2="54.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="170.000000" y1="66.000000" x2="170.000000" y2="54.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="170.000000" y1="74.000000" x2="262.000000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="174.000000" y1="114.000000" x2="190.000000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="178.000000" y1="46.000000" x2="170.000000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="178.000000" y1="66.000000" x2="170.000000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="182.000000" y1="46.000000" x2="178.000000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="182.000000" y1="144.000000" x2="186.000000" y2="144.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="186.000000" y1="94.000000" x2="190.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="186.000000" y1="144.000000" x2="320.000000" y2="144.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="190.000000" y1="94.000000" x2="198.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="190.000000" y1="102.000000" x2="198.000000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="190.000000" y1="114.000000" x2="190.000000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="190.000000" y1="114.000000" x2="190.000000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="198.000000" y1="94.000000" x2="202.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="198.000000" y1="102.000000" x2="202.000000" y2="102.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="210.000000" y1="46.000000" x2="206.000000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="210.000000" y1="46.000000" x2="210.000000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="210.000000" y1="66.000000" x2="178.000000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="214.000000" y1="46.000000" x2="210.000000" y2="46.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="226.000000" y1="98.000000" x2="230.000000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="230.000000" y1="98.000000" x2="230.000000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="230.000000" y1="98.000000" x2="234.000000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="242.000000" y1="66.000000" x2="210.000000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="258.000000" y1="98.000000" x2="262.000000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="262.000000" y1="74.000000" x2="270.000000" y2="74.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="262.000000" y1="98.000000" x2="270.000000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="270.000000" y1="74.000000" x2="270.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="270.000000" y1="90.000000" x2="270.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="270.000000" y1="90.000000" x2="274.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="270.000000" y1="98.000000" x2="274.000000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="298.000000" y1="94.000000" x2="302.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="302.000000" y1="66.000000" x2="242.000000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="302.000000" y1="66.000000" x2="302.000000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="302.000000" y1="90.000000" x2="302.000000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="302.000000" y1="94.000000" x2="304.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="304.000000" y1="94.000000" x2="310.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="310.000000" y1="94.000000" x2="320.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="320.000000" y1="86.000000" x2="336.000000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="320.000000" y1="94.000000" x2="320.000000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="320.000000" y1="94.000000" x2="320.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="320.000000" y1="144.000000" x2="328.000000" y2="144.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="328.000000" y1="94.000000" x2="336.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="328.000000" y1="144.000000" x2="328.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="336.000000" y1="86.000000" x2="340.000000" y2="86.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="336.000000" y1="94.000000" x2="340.000000" y2="94.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="364.000000" y1="90.000000" x2="368.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="368.000000" y1="90.000000" x2="368.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="368.000000" y1="90.000000" x2="378.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="378.000000" y1="90.000000" x2="382.000000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="439.800000" y1="90.000000" x2="443.800000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="443.800000" y1="90.000000" x2="451.800000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="451.800000" y1="90.000000" x2="451.800000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="451.800000" y1="98.000000" x2="451.800000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="451.800000" y1="98.000000" x2="459.800000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="459.800000" y1="98.000000" x2="476.700000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="459.800000" y1="66.000000" x2="459.800000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="459.800000" y1="66.000000" x2="459.800000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="459.800000" y1="90.000000" x2="459.800000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="459.800000" y1="90.000000" x2="552.700000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="476.700000" y1="98.000000" x2="493.600000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="489.600000" y1="118.000000" x2="493.600000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="493.600000" y1="98.000000" x2="501.600000" y2="98.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="493.600000" y1="118.000000" x2="501.600000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="501.600000" y1="98.000000" x2="501.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="501.600000" y1="110.000000" x2="501.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="501.600000" y1="110.000000" x2="505.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="501.600000" y1="118.000000" x2="505.600000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="520.700000" y1="66.000000" x2="459.800000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="524.700000" y1="66.000000" x2="520.700000" y2="66.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="529.600000" y1="114.000000" x2="533.600000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="533.600000" y1="114.000000" x2="541.600000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="541.600000" y1="114.000000" x2="541.600000" y2="130.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="541.600000" y1="130.000000" x2="541.600000" y2="130.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="541.600000" y1="130.000000" x2="557.600000" y2="130.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="552.700000" y1="62.000000" x2="548.700000" y2="62.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="552.700000" y1="70.000000" x2="548.700000" y2="70.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="552.700000" y1="70.000000" x2="552.700000" y2="70.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="552.700000" y1="82.000000" x2="552.700000" y2="70.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="552.700000" y1="90.000000" x2="645.600000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="557.600000" y1="130.000000" x2="573.600000" y2="130.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="560.700000" y1="62.000000" x2="552.700000" y2="62.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="560.700000" y1="82.000000" x2="552.700000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="564.700000" y1="62.000000" x2="560.700000" y2="62.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="569.600000" y1="110.000000" x2="573.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="573.600000" y1="110.000000" x2="581.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="573.600000" y1="118.000000" x2="581.600000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="573.600000" y1="130.000000" x2="573.600000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="573.600000" y1="130.000000" x2="573.600000" y2="130.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="581.600000" y1="110.000000" x2="585.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="581.600000" y1="118.000000" x2="585.600000" y2="118.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="592.700000" y1="62.000000" x2="588.700000" y2="62.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="592.700000" y1="62.000000" x2="592.700000" y2="62.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="592.700000" y1="82.000000" x2="560.700000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="596.700000" y1="62.000000" x2="592.700000" y2="62.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="609.600000" y1="114.000000" x2="613.600000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="613.600000" y1="114.000000" x2="613.600000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="613.600000" y1="114.000000" x2="617.600000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="624.700000" y1="82.000000" x2="592.700000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="641.600000" y1="114.000000" x2="645.600000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="645.600000" y1="90.000000" x2="653.600000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="645.600000" y1="114.000000" x2="653.600000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="653.600000" y1="90.000000" x2="653.600000" y2="106.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="653.600000" y1="106.000000" x2="653.600000" y2="106.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="653.600000" y1="106.000000" x2="657.600000" y2="106.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="653.600000" y1="114.000000" x2="657.600000" y2="114.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="681.600000" y1="110.000000" x2="685.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="685.600000" y1="82.000000" x2="624.700000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="685.600000" y1="82.000000" x2="685.600000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="685.600000" y1="106.000000" x2="685.600000" y2="82.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="685.600000" y1="110.000000" x2="687.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="687.600000" y1="110.000000" x2="693.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="693.600000" y1="110.000000" x2="703.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="703.600000" y1="90.000000" x2="711.600000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="703.600000" y1="110.000000" x2="703.600000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="703.600000" y1="110.000000" x2="703.600000" y2="110.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="711.600000" y1="90.000000" x2="715.600000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="715.600000" y1="90.000000" x2="719.600000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="719.600000" y1="90.000000" x2="729.600000" y2="90.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
</svg>
</div>

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

#### Diagram

<div class="faust-diagram">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128.500000 72.000000" width="64.250000mm" height="36.000000mm" version="1.1">
<rect x="1.000000" y="1.000000" width="127.500000" height="71.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="0.000000" y="0.000000" width="127.500000" height="71.000000" rx="0" ry="0" style="stroke:none;fill:#ffffff;"/>
<text x="10.000000" y="7.000000" font-family="Arial" font-size="7"></text>

<rect x="25.000000" y="25.000000" width="38.700000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="24.000000" y="24.000000" width="38.700000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#003366;"/>


<text x="43.350000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">osc(1000)</text>

<circle cx="26.000000" cy="26.000000" r="1"/>

<rect x="71.700000" y="25.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="70.700000" y="24.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#003366;"/>


<text x="83.600000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">zerox</text>

<circle cx="72.700000" cy="26.000000" r="1"/>
<line x1="67.700000" y1="35.000000" x2="70.700000" y2="36.000000"  transform="rotate(0.000000,70.700000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="67.700000" y1="37.000000" x2="70.700000" y2="36.000000"  transform="rotate(0.000000,70.700000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="15.000000" y1="15.000000" x2="15.000000" y2="57.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="57.000000" x2="113.500000" y2="57.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="113.500000" y1="57.000000" x2="113.500000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="15.000000" x2="20.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="49.025000" y1="15.000000" x2="113.500000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="20.000000" y="17.000000" font-family="Arial" font-size="7">process</text>
<line x1="115.500000" y1="35.000000" x2="118.500000" y2="36.000000"  transform="rotate(0.000000,118.500000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="115.500000" y1="37.000000" x2="118.500000" y2="36.000000"  transform="rotate(0.000000,118.500000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="62.700000" y1="36.000000" x2="66.700000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="66.700000" y1="36.000000" x2="66.700000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="66.700000" y1="36.000000" x2="70.700000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="96.500000" y1="36.000000" x2="100.500000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="100.500000" y1="36.000000" x2="100.500000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="100.500000" y1="36.000000" x2="104.500000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="104.500000" y1="36.000000" x2="108.500000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="108.500000" y1="36.000000" x2="118.500000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
</svg>
</div>

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

----

### `(sba.)lrev`

Reverse a list-literal: the parallel bus `(x0,x1,...,xn)` becomes
`(xn,...,x1,x0)`. Generalizes `revlist` (which only generates a descending
counter) to any list of values.

#### Usage
```
lrev((x0,x1,...,xn))
```
Where:

* the argument is a list-literal (compile-time parallel expression)

#### Test
```
sba = library("seam.basic.lib");
lrev_test = sba.lrev((10,20,30));
```

----

### `(sba.)lrot`

Cyclically rotate a list-literal by `k`: `((1,2,3,4),1)` becomes
`(2,3,4,1)`. `k` is taken modulo the list length, so any integer is valid;
positive `k` rotates left, negative rotates right.

#### Usage
```
lrot((x0,x1,...,xn), k)
```
Where:

* the first argument is a list-literal
* `k`: rotation amount (compile-time integer)

#### Test
```
sba = library("seam.basic.lib");
lrot_test = sba.lrot((1,2,3,4),1);
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

#### Diagram

<div class="faust-diagram">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 193.000000 72.000000" width="96.500000mm" height="36.000000mm" version="1.1">
<rect x="1.000000" y="1.000000" width="192.000000" height="71.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="0.000000" y="0.000000" width="192.000000" height="71.000000" rx="0" ry="0" style="stroke:none;fill:#ffffff;"/>
<text x="10.000000" y="7.000000" font-family="Arial" font-size="7"></text>

<rect x="25.000000" y="25.000000" width="38.700000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="24.000000" y="24.000000" width="38.700000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#003366;"/>


<text x="43.350000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">osc(1000)</text>

<circle cx="26.000000" cy="26.000000" r="1"/>

<rect x="71.700000" y="25.000000" width="90.300000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="70.700000" y="24.000000" width="90.300000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#003366;"/>


<text x="115.850000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">scalel(-1)(1)(0)(1)</text>

<circle cx="72.700000" cy="26.000000" r="1"/>
<line x1="67.700000" y1="35.000000" x2="70.700000" y2="36.000000"  transform="rotate(0.000000,70.700000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="67.700000" y1="37.000000" x2="70.700000" y2="36.000000"  transform="rotate(0.000000,70.700000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="15.000000" y1="15.000000" x2="15.000000" y2="57.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="57.000000" x2="178.000000" y2="57.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="178.000000" y1="57.000000" x2="178.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="15.000000" x2="20.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="49.025000" y1="15.000000" x2="178.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="20.000000" y="17.000000" font-family="Arial" font-size="7">process</text>
<line x1="180.000000" y1="35.000000" x2="183.000000" y2="36.000000"  transform="rotate(0.000000,183.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="180.000000" y1="37.000000" x2="183.000000" y2="36.000000"  transform="rotate(0.000000,183.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="62.700000" y1="36.000000" x2="66.700000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="66.700000" y1="36.000000" x2="66.700000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="66.700000" y1="36.000000" x2="70.700000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="161.000000" y1="36.000000" x2="165.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="165.000000" y1="36.000000" x2="165.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="165.000000" y1="36.000000" x2="169.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="169.000000" y1="36.000000" x2="173.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="173.000000" y1="36.000000" x2="183.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
</svg>
</div>

----

### `(sba.)scalee`

Exponential (geometric) rescale of `x` from input range `[a,b]` to output
range `[c,d]`. Perceptually uniform — a linear control sounds even — so it
is ideal for frequency and gain. The curve is fixed by the ratio `d/c`.

Requires `c` and `d` non-zero and of the same sign; for ranges that include
zero use `scalec`.

#### Usage
```
_ : scalee(a,b,c,d) : _
```
Where:

* `a`, `b`: input range (min, max)
* `c`, `d`: output range (min, max), same sign, non-zero

#### Test
```
os = library("oscillators.lib");
sba = library("seam.basic.lib");
scalee_test = os.osc(1) : sba.scalee(-1,1,20,20000);
```

#### Diagram

<div class="faust-diagram">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 193.000000 72.000000" width="96.500000mm" height="36.000000mm" version="1.1">
<rect x="1.000000" y="1.000000" width="192.000000" height="71.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="0.000000" y="0.000000" width="192.000000" height="71.000000" rx="0" ry="0" style="stroke:none;fill:#ffffff;"/>
<text x="10.000000" y="7.000000" font-family="Arial" font-size="7"></text>

<rect x="25.000000" y="25.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="24.000000" y="24.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#003366;"/>


<text x="36.900000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">osc(1)</text>

<circle cx="26.000000" cy="26.000000" r="1"/>

<rect x="58.800000" y="25.000000" width="103.200000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="57.800000" y="24.000000" width="103.200000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#003366;"/>


<text x="109.400000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">scalee(-1)(1)(20)(20000)</text>

<circle cx="59.800000" cy="26.000000" r="1"/>
<line x1="54.800000" y1="35.000000" x2="57.800000" y2="36.000000"  transform="rotate(0.000000,57.800000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="54.800000" y1="37.000000" x2="57.800000" y2="36.000000"  transform="rotate(0.000000,57.800000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="15.000000" y1="15.000000" x2="15.000000" y2="57.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="57.000000" x2="178.000000" y2="57.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="178.000000" y1="57.000000" x2="178.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="15.000000" x2="20.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="49.025000" y1="15.000000" x2="178.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="20.000000" y="17.000000" font-family="Arial" font-size="7">process</text>
<line x1="180.000000" y1="35.000000" x2="183.000000" y2="36.000000"  transform="rotate(0.000000,183.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="180.000000" y1="37.000000" x2="183.000000" y2="36.000000"  transform="rotate(0.000000,183.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="49.800000" y1="36.000000" x2="53.800000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="53.800000" y1="36.000000" x2="53.800000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="53.800000" y1="36.000000" x2="57.800000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="161.000000" y1="36.000000" x2="165.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="165.000000" y1="36.000000" x2="165.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="165.000000" y1="36.000000" x2="169.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="169.000000" y1="36.000000" x2="173.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="173.000000" y1="36.000000" x2="183.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
</svg>
</div>

----

### `(sba.)scalec`

Curved (power) rescale of `x` from `[a,b]` to `[c,d]`, shaped by `curve`:
`curve=1` is linear, `curve>1` eases in (slow start), `curve<1` eases out
(fast start). Works for any output range, including `c=0`. Keep `x` within
`[a,b]` (a negative normalized base with a fractional `curve` is undefined).

#### Usage
```
_ : scalec(a,b,c,d,curve) : _
```
Where:

* `a`, `b`: input range (min, max)
* `c`, `d`: output range (min, max)
* `curve`: curvature exponent (>0); 1 = linear

#### Test
```
os = library("oscillators.lib");
sba = library("seam.basic.lib");
scalec_test = os.osc(1) : sba.scalec(-1,1,0,1,2);
```

#### Diagram

<div class="faust-diagram">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 193.000000 72.000000" width="96.500000mm" height="36.000000mm" version="1.1">
<rect x="1.000000" y="1.000000" width="192.000000" height="71.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="0.000000" y="0.000000" width="192.000000" height="71.000000" rx="0" ry="0" style="stroke:none;fill:#ffffff;"/>
<text x="10.000000" y="7.000000" font-family="Arial" font-size="7"></text>

<rect x="25.000000" y="25.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="24.000000" y="24.000000" width="25.800000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#003366;"/>


<text x="36.900000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">osc(1)</text>

<circle cx="26.000000" cy="26.000000" r="1"/>

<rect x="58.800000" y="25.000000" width="103.200000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#cccccc;"/>
<rect x="57.800000" y="24.000000" width="103.200000" height="24.000000" rx="0" ry="0" style="stroke:none;fill:#003366;"/>


<text x="109.400000" y="38.000000" font-family="Arial" font-size="7" text-anchor="middle" fill="#FFFFFF">scalec(-1)(1)(0)(1)(2)</text>

<circle cx="59.800000" cy="26.000000" r="1"/>
<line x1="54.800000" y1="35.000000" x2="57.800000" y2="36.000000"  transform="rotate(0.000000,57.800000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="54.800000" y1="37.000000" x2="57.800000" y2="36.000000"  transform="rotate(0.000000,57.800000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="15.000000" y1="15.000000" x2="15.000000" y2="57.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="57.000000" x2="178.000000" y2="57.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="178.000000" y1="57.000000" x2="178.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="15.000000" y1="15.000000" x2="20.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<line x1="49.025000" y1="15.000000" x2="178.000000" y2="15.000000"  style="stroke: black; stroke-linecap:round; stroke-width:0.25; stroke-dasharray:3,3;"/>
<text x="20.000000" y="17.000000" font-family="Arial" font-size="7">process</text>
<line x1="180.000000" y1="35.000000" x2="183.000000" y2="36.000000"  transform="rotate(0.000000,183.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="180.000000" y1="37.000000" x2="183.000000" y2="36.000000"  transform="rotate(0.000000,183.000000,36.000000)" style="stroke: black; stroke-width:0.25;"/>
<line x1="49.800000" y1="36.000000" x2="53.800000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="53.800000" y1="36.000000" x2="53.800000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="53.800000" y1="36.000000" x2="57.800000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="161.000000" y1="36.000000" x2="165.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="165.000000" y1="36.000000" x2="165.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="165.000000" y1="36.000000" x2="169.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="169.000000" y1="36.000000" x2="173.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
<line x1="173.000000" y1="36.000000" x2="183.000000" y2="36.000000"  style="stroke:black; stroke-linecap:round; stroke-width:0.25;"/>
</svg>
</div>
