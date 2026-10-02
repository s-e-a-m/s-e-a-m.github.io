---
title: "SEAM-LTM — Plugin Suite"
permalink: /seam-ltm/
toc: true
generated_from: seam-ltm
generated_rev: 3fd18b8
generated_at: 2026-10-02
---

<!-- GENERATO — non modificare qui: la fonte è doc/plugins.toml di seam-ltm -->
Sixteen VST3 plugins for sustained electroacoustic music, built directly on the Steinberg VST3 SDK — no JUCE, no frameworks.
They fall into three families: converters that move a signal from one spatial format to another, generators that produce the test signals a room is measured with, and the measurement and processing tools that listen to the result.

Several of them are the C++ counterpart of an algorithm that also lives in Faust: where that is the case, the entry links the library source.

Building the suite, the VST3 SDK and the installation paths are documented in the [repository README](https://github.com/s-e-a-m/seam-ltm) — they belong next to the code, where they cannot quietly go stale.

Generated from [github.com/s-e-a-m/seam-ltm](https://github.com/s-e-a-m/seam-ltm) at `3fd18b8`.

## Format converters and rotators

### SDMX

**stereo → stereo**

Sum and Difference Matrix (Blumlein M/S). The matrix is involutory (A = A⁻¹), so one instance encodes LR → MS and a second one decodes MS → LR

<img src="/assets/seam-ltm/img/sdmx.png" alt="SDMX" class="ltm-shot">

Faust counterpart: [`seam.stereophony.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.stereophony.lib).

### B2XROT

**B-format 4ch → AmbiX 4ch**

B-format (FuMa) to AmbiX with rotation: W is scaled by √2, channels are reordered to ACN/SN3D, then Yaw/Pitch/Roll is applied

<img src="/assets/seam-ltm/img/b2xrot.png" alt="B2XROT" class="ltm-shot">

### XYPRROT

**AmbiX 4ch → AmbiX 4ch**

First-order AmbiX rotation (Yaw, Pitch, Roll). Channel A0 is omnidirectional and passes through untouched

<img src="/assets/seam-ltm/img/xyprrot.png" alt="XYPRROT" class="ltm-shot">

### M2XHGR

**mono → AmbiX 4ch**

Mono to AmbiX via Haar Decomposition: the Haar QMF bank `haarmn(1)` spreads one channel across four spatial components, which are then rotated by Yaw/Pitch/Roll

<img src="/assets/seam-ltm/img/m2xhgr.png" alt="M2XHGR" class="ltm-shot">

Faust counterpart: [`seam.ambisonics.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.ambisonics.lib).

### LR2XHGR

**stereo → AmbiX 4ch**

Stereo to AmbiX via Haar (Silvi's method): each channel is Haar-decomposed, placed by a Divergence half-angle, summed, and finally oriented by a global Yaw/Pitch/Roll

<img src="/assets/seam-ltm/img/lr2xhgr.png" alt="LR2XHGR" class="ltm-shot">

Faust counterpart: [`seam.ambisonics.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.ambisonics.lib).

### ABMODULEX

**A-format 4ch → AmbiX 4ch**

Tetrahedral microphone A-format to first-order AmbiX: LFU RFD RBU LBD → A0 A1 A2 A3. Pure matrix, involutory (M² = I), the inverse of BAMODULEX, and the front end of the TETRAREC chain

<img src="/assets/seam-ltm/img/abmodulex.png" alt="ABMODULEX" class="ltm-shot">

Faust counterpart: [`seam.ambisonics.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.ambisonics.lib).

### BAMODULEX

**AmbiX 4ch → tetrahedral 4ch**

Gerzon's BA-module in the AmbiX domain: a decoder to the LFU · RFD · RBU · LBD vertices, which are the four drivers of a STONE loudspeaker. The Gerzon compensation shelves are omitted by design — the STONE amplifier corrects HF/LF downstream

<img src="/assets/seam-ltm/img/bamodulex.png" alt="BAMODULEX" class="ltm-shot">

Faust counterpart: [`seam.ambisonics.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.ambisonics.lib).

### X2UHJ

**AmbiX 4ch → UHJ C-format 4ch**

First-order AmbiX (ACN/SN3D) to UHJ C-format (L, R, T, Q) — the "UHJ decoder" that makes an Ambisonic mix audible on two channels. The ±90° quadrature pair is designed live at the host sample rate by the shared `seam_quadrature` engine, and the GUI reads out the resulting coefficients together with the achieved maximum phase error

<img src="/assets/seam-ltm/img/x2uhj.png" alt="X2UHJ" class="ltm-shot">

Faust counterpart: [`seam.ambisonics.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.ambisonics.lib).

## Signal generators

### LTBURST

**none → mono**

Linkwitz shaped tone-burst: N = 5 cycles of a sine under a Hann window, repeated at a fixed frequency. Frequency, Dwell and Level are the whole interface

<img src="/assets/seam-ltm/img/ltburst.png" alt="LTBURST" class="ltm-shot">

Faust counterpart: [`seam.linkwitz.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.linkwitz.lib).

### LTGLIDE

**none → mono**

Linkwitz glissando tone-burst: the carrier of each N = 5 grain is latched from a linear or exponential sweep F0 → F1 spread over a Sweep Time, with grains spaced in step or gap timing. It loops, declares a STONE id, and publishes what it is playing on the calibration bus

<img src="/assets/seam-ltm/img/ltglide.png" alt="LTGLIDE" class="ltm-shot">

Faust counterpart: [`seam.linkwitz.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.linkwitz.lib).

### MULTIPINK

**none → 1..64ch**

Multichannel pink noise drawn from a shared 64-slot logical pool, so that separate instances never emit the same stream. Layout-adaptive from mono to 64 channels, band-calibrated (-23/-20/-18 dBFS reference, read as the total RMS at 48 kHz, ±6 dB trim) so that the per-third-octave level an amplifier is set against holds still when the sample rate changes, with a POWER switch, a STONE id, and a calibration-bus announcement

<img src="/assets/seam-ltm/img/multipink.png" alt="MULTIPINK" class="ltm-shot">

Faust counterpart: [`seam.filters.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.filters.lib).

## Measurement and processing

### STRX

**stereo → stereo**

Stereo M/S Analyser: goniometer, overlaid M/S Welch spectra, and In L / In R / M / S / Width meters, plus a status line fed by the calibration bus. It observes only — the audio is passed through unchanged and there are no automatable parameters

<img src="/assets/seam-ltm/img/strx.png" alt="STRX" class="ltm-shot">

Faust counterpart: [`seam.analyzers.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.analyzers.lib).

### DSLAR

**mono → mono**

Agostino Di Scipio's LAR homeostatic loop, hand-ported from `LAR.pd`: the feedforward half of a Larsen system whose loop is closed acoustically by the room. Drive, loop delay, decorrelation, target, steepness and control smoothing, with live r (Hann RMS) and g (loop gain) readouts

<img src="/assets/seam-ltm/img/dslar.png" alt="DSLAR" class="ltm-shot">

Faust counterpart: [`seam.discipio.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.discipio.lib).

### DDELAY

**4ch → 4ch**

Quad Alignment Delay for loudspeaker time-alignment. A distance in metres becomes an integer-sample delay at c = 331.4 m/s, rounded up to the next prime so that several instances stay incommensurable. All four channels share one value

<img src="/assets/seam-ltm/img/ddelay.png" alt="DDELAY" class="ltm-shot">

### HILBERT

**mono → stereo**

Wideband Quadrature Transformer: one input becomes an in-phase and a quadrature branch held −90° apart from 20 Hz to 20 kHz. Both outputs are all-pass filtered, since the relationship belongs to the pair rather than to either signal. Two topologies — RBJ biquad cascade and Niemitalo polyphase — are selectable live and redesigned per sample rate by the same `seam_quadrature` engine X2UHJ uses internally

<img src="/assets/seam-ltm/img/hilbert.png" alt="HILBERT" class="ltm-shot">

Faust counterpart: [`seam.filters.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.filters.lib).

### ADDELAY

**4ch → 4ch**

Air-Absorption Delay: inherits DDELAY's exact metres-to-samples integer delay (next-prime rounding included) and adds a minimum-phase air-absorption filter fitted to the ISO 9613-1 α·d distance-dependent high-frequency roll-off. Shelf and three-section RBJ high-shelf cascade topologies are switchable live, with an optional 1/r geometric-spreading attenuation. All four channels share one distance, so the inter-channel phase is preserved

<img src="/assets/seam-ltm/img/addelay.png" alt="ADDELAY" class="ltm-shot">

Faust counterpart: [`seam.filters.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.filters.lib).

## Works — SSCDO#2

### LMO

**→ 4ch**

The generator of Studio sul Corpo d'Ombra #2 (Cortegiani, Tedesco): on each of four channels, two narrow bands of noise through 24th-order Butterworth high- and low-pass filters, which beat at a distance Δ. The band centre glides linearly over a set time, as the piece's cues ask; the level is anchored at 96 kHz, so the bands sound the same at any sample rate

<img src="/assets/seam-ltm/img/lmo.png" alt="LMO" class="ltm-shot">

Faust counterpart: [`seam.tedesco.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.tedesco.lib).

### STUNEDREV

**4ch → 4ch**

The APF of Studio sul Corpo d'Ombra #2 (Cortegiani, Tedesco): four independent lines of 42 Moorer all-pass sections in series, one per face of STONED, tuned by √2, φ, e and π. Each delay is a time in milliseconds moved to the next prime at the session's rate, so each face returns the sound on its own time scale, from seconds to minutes. One arena sized exactly at activation, and a RESET that empties it while playing

<img src="/assets/seam-ltm/img/stunedrev.png" alt="STUNEDREV" class="ltm-shot">

Faust counterpart: [`seam.tedesco.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.tedesco.lib).

### DELRM

**4ch → 4ch**

delRM of Studio sul Corpo d'Ombra #2 (Cortegiani, Tedesco): four channels, each processing its own input. Channels 1 and 3 add the input to itself delayed; channels 2 and 4 multiply the delayed input, the input and its integral, into an 11:1 compressor. The delay is DDELAY's distance in metres moved to the next prime, one for the four channels. Input meters and the gain reduction of channels 2 and 4, drawn in opposite directions

<img src="/assets/seam-ltm/img/delrm.png" alt="DELRM" class="ltm-shot">

Faust counterpart: [`seam.tedesco.lib`](https://github.com/s-e-a-m/faust-libraries/blob/master/src/seam.tedesco.lib).
