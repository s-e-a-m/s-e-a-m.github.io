---
title: "SEAN — Notation Reference"
permalink: /sean/
toc: true
generated_from: sean
generated_rev: 060e971
generated_at: 2026-08-29
---

<!-- GENERATO — non modificare qui: la fonte è lib/vocabulary-core.tex e i font in fonts/ -->
A TikZ library for writing electroacoustic block diagrams as scores.
The signs come from Walter Branchi's *Tecnologie della musica elettronica* (1976), transcribed and extended for contemporary use.

The system separates a **phrase** from a **font**.
A phrase is the abstract diagram: identities (`gmic`, `am`, `lspk`…) connected by name, independent of any style.
A font is the hand of an author or a tradition that draws those identities.
Change the font and the chain stays; the sign changes.

A font may declare a parent and redraw only what it wants, inheriting the rest.
`gs` declares `wb` as its parent, so it draws its own microphone and falls back to Branchi's for the modulators.
The tables below show, for each identity, what each font actually draws — inheritance included — and the **source** column says which font the glyph really comes from.
An empty cell means that font has no glyph for that identity, not even through a parent.

The descriptions are the ones in the register itself, in Italian, as transcribed from Branchi's Appendix 6.

Generated from [github.com/s-e-a-m/sean](https://github.com/s-e-a-m/sean) at `060e971`.

## sorgenti / segni base

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>ac</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.55pt" height="11.54pt" viewBox="0 0 28.55 11.54">
<defs>
<clipPath id="ac-wb-clip-0">
<path clip-rule="nonzero" d="M 0.332031 0 L 27.785156 0 L 27.785156 11.097656 L 0.332031 11.097656 Z M 0.332031 0 "/>
</clipPath>
</defs>
<g clip-path="url(#ac-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174267 -0.00104289 C -11.863013 2.903257 -9.653308 5.669451 -7.08615 5.669451 C -4.523054 5.669451 -2.309287 2.903257 0.0019675 -0.00104289 C 2.30916 -2.901281 4.522927 -5.667475 7.086023 -5.667475 C 9.653181 -5.667475 11.862886 -2.901281 14.17414 -0.00104289 " transform="matrix(0.961667, 0, 0, -0.961667, 14.056702, 5.549778)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.55pt" height="11.54pt" viewBox="0 0 28.55 11.54">
<defs>
<clipPath id="ac-gs-clip-0">
<path clip-rule="nonzero" d="M 0.332031 0 L 27.785156 0 L 27.785156 11.097656 L 0.332031 11.097656 Z M 0.332031 0 "/>
</clipPath>
</defs>
<g clip-path="url(#ac-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174267 -0.00104289 C -11.863013 2.903257 -9.653308 5.669451 -7.08615 5.669451 C -4.523054 5.669451 -2.309287 2.903257 0.0019675 -0.00104289 C 2.30916 -2.901281 4.522927 -5.667475 7.086023 -5.667475 C 9.653181 -5.667475 11.862886 -2.901281 14.17414 -0.00104289 " transform="matrix(0.961667, 0, 0, -0.961667, 14.056702, 5.549778)"/>
</g>
</svg></td><td><code>wb</code></td><td>corrente alternata</td></tr>
<tr><td><code>dc</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.88pt" height="4.73pt" viewBox="0 0 22.88 4.73">
<defs>
<clipPath id="dc-wb-clip-0">
<path clip-rule="nonzero" d="M 0.5625 0 L 22.207031 0 L 22.207031 1 L 0.5625 1 Z M 0.5625 0 "/>
</clipPath>
<clipPath id="dc-wb-clip-1">
<path clip-rule="nonzero" d="M 0.5625 4 L 22.207031 4 L 22.207031 4.472656 L 0.5625 4.472656 Z M 0.5625 4 "/>
</clipPath>
</defs>
<g clip-path="url(#dc-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.337313 2.267028 L 11.340409 2.267028 " transform="matrix(0.946, 0, 0, -0.946, 11.381348, 2.234452)"/>
</g>
<g clip-path="url(#dc-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.337313 -2.266865 L 11.340409 -2.266865 " transform="matrix(0.946, 0, 0, -0.946, 11.381348, 2.234452)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.88pt" height="4.73pt" viewBox="0 0 22.88 4.73">
<defs>
<clipPath id="dc-gs-clip-0">
<path clip-rule="nonzero" d="M 0.5625 0 L 22.207031 0 L 22.207031 1 L 0.5625 1 Z M 0.5625 0 "/>
</clipPath>
<clipPath id="dc-gs-clip-1">
<path clip-rule="nonzero" d="M 0.5625 4 L 22.207031 4 L 22.207031 4.472656 L 0.5625 4.472656 Z M 0.5625 4 "/>
</clipPath>
</defs>
<g clip-path="url(#dc-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.337313 2.267028 L 11.340409 2.267028 " transform="matrix(0.946, 0, 0, -0.946, 11.381348, 2.234452)"/>
</g>
<g clip-path="url(#dc-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.337313 -2.266865 L 11.340409 -2.266865 " transform="matrix(0.946, 0, 0, -0.946, 11.381348, 2.234452)"/>
</g>
</svg></td><td><code>wb</code></td><td>corrente continua</td></tr>
<tr><td><code>connopen</code></td><td><code>p</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="3.57pt" height="13.22pt" viewBox="0 0 3.57 13.22">
<defs>
<clipPath id="connopen-wb-clip-0">
<path clip-rule="nonzero" d="M 1 2 L 2 2 L 2 12.160156 L 1 12.160156 Z M 1 2 "/>
</clipPath>
<clipPath id="connopen-wb-clip-1">
<path clip-rule="nonzero" d="M 0 0.363281 L 3.1875 0.363281 L 3.1875 4 L 0 4 Z M 0 0.363281 "/>
</clipPath>
<clipPath id="connopen-wb-clip-2">
<path clip-rule="nonzero" d="M 0 0.363281 L 3.1875 0.363281 L 3.1875 9 L 0 9 Z M 0 0.363281 "/>
</clipPath>
</defs>
<g clip-path="url(#connopen-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000285714 -11.340374 L -0.000285714 -1.133791 " transform="matrix(0.8925, 0, 0, -0.8925, 1.594005, 1.952935)"/>
</g>
<g clip-path="url(#connopen-wb-clip-1)">
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 3.011719 1.953125 C 3.011719 1.171875 2.375 0.535156 1.59375 0.535156 C 0.8125 0.535156 0.175781 1.171875 0.175781 1.953125 C 0.175781 2.734375 0.8125 3.371094 1.59375 3.371094 C 2.375 3.371094 3.011719 2.734375 3.011719 1.953125 Z M 3.011719 1.953125 "/>
</g>
<g clip-path="url(#connopen-wb-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 1.588475 -0.000212885 C 1.588475 0.875137 0.875064 1.588548 -0.000285714 1.588548 C -0.875636 1.588548 -1.589046 0.875137 -1.589046 -0.000212885 C -1.589046 -0.875563 -0.875636 -1.588973 -0.000285714 -1.588973 C 0.875064 -1.588973 1.588475 -0.875563 1.588475 -0.000212885 Z M 1.588475 -0.000212885 " transform="matrix(0.8925, 0, 0, -0.8925, 1.594005, 1.952935)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="3.57pt" height="13.22pt" viewBox="0 0 3.57 13.22">
<defs>
<clipPath id="connopen-gs-clip-0">
<path clip-rule="nonzero" d="M 1 2 L 2 2 L 2 12.160156 L 1 12.160156 Z M 1 2 "/>
</clipPath>
<clipPath id="connopen-gs-clip-1">
<path clip-rule="nonzero" d="M 0 0.363281 L 3.1875 0.363281 L 3.1875 4 L 0 4 Z M 0 0.363281 "/>
</clipPath>
<clipPath id="connopen-gs-clip-2">
<path clip-rule="nonzero" d="M 0 0.363281 L 3.1875 0.363281 L 3.1875 9 L 0 9 Z M 0 0.363281 "/>
</clipPath>
</defs>
<g clip-path="url(#connopen-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000285714 -11.340374 L -0.000285714 -1.133791 " transform="matrix(0.8925, 0, 0, -0.8925, 1.594005, 1.952935)"/>
</g>
<g clip-path="url(#connopen-gs-clip-1)">
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 3.011719 1.953125 C 3.011719 1.171875 2.375 0.535156 1.59375 0.535156 C 0.8125 0.535156 0.175781 1.171875 0.175781 1.953125 C 0.175781 2.734375 0.8125 3.371094 1.59375 3.371094 C 2.375 3.371094 3.011719 2.734375 3.011719 1.953125 Z M 3.011719 1.953125 "/>
</g>
<g clip-path="url(#connopen-gs-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 1.588475 -0.000212885 C 1.588475 0.875137 0.875064 1.588548 -0.000285714 1.588548 C -0.875636 1.588548 -1.589046 0.875137 -1.589046 -0.000212885 C -1.589046 -0.875563 -0.875636 -1.588973 -0.000285714 -1.588973 C 0.875064 -1.588973 1.588475 -0.875563 1.588475 -0.000212885 Z M 1.588475 -0.000212885 " transform="matrix(0.8925, 0, 0, -0.8925, 1.594005, 1.952935)"/>
</g>
</svg></td><td><code>wb</code></td><td>connessione aperta</td></tr>
<tr><td><code>connclosed</code></td><td><code>p</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="3.57pt" height="13.22pt" viewBox="0 0 3.57 13.22">
<defs>
<clipPath id="connclosed-wb-clip-0">
<path clip-rule="nonzero" d="M 1 2 L 2 2 L 2 12.160156 L 1 12.160156 Z M 1 2 "/>
</clipPath>
<clipPath id="connclosed-wb-clip-1">
<path clip-rule="nonzero" d="M 0 0.363281 L 3.1875 0.363281 L 3.1875 4 L 0 4 Z M 0 0.363281 "/>
</clipPath>
<clipPath id="connclosed-wb-clip-2">
<path clip-rule="nonzero" d="M 0 0.363281 L 3.1875 0.363281 L 3.1875 9 L 0 9 Z M 0 0.363281 "/>
</clipPath>
</defs>
<g clip-path="url(#connclosed-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000285714 -11.340374 L -0.000285714 -1.133791 " transform="matrix(0.8925, 0, 0, -0.8925, 1.594005, 1.952935)"/>
</g>
<g clip-path="url(#connclosed-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 3.011719 1.953125 C 3.011719 1.171875 2.375 0.535156 1.59375 0.535156 C 0.8125 0.535156 0.175781 1.171875 0.175781 1.953125 C 0.175781 2.734375 0.8125 3.371094 1.59375 3.371094 C 2.375 3.371094 3.011719 2.734375 3.011719 1.953125 Z M 3.011719 1.953125 "/>
</g>
<g clip-path="url(#connclosed-wb-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 1.588475 -0.000212885 C 1.588475 0.875137 0.875064 1.588548 -0.000285714 1.588548 C -0.875636 1.588548 -1.589046 0.875137 -1.589046 -0.000212885 C -1.589046 -0.875563 -0.875636 -1.588973 -0.000285714 -1.588973 C 0.875064 -1.588973 1.588475 -0.875563 1.588475 -0.000212885 Z M 1.588475 -0.000212885 " transform="matrix(0.8925, 0, 0, -0.8925, 1.594005, 1.952935)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="3.57pt" height="13.22pt" viewBox="0 0 3.57 13.22">
<defs>
<clipPath id="connclosed-gs-clip-0">
<path clip-rule="nonzero" d="M 1 2 L 2 2 L 2 12.160156 L 1 12.160156 Z M 1 2 "/>
</clipPath>
<clipPath id="connclosed-gs-clip-1">
<path clip-rule="nonzero" d="M 0 0.363281 L 3.1875 0.363281 L 3.1875 4 L 0 4 Z M 0 0.363281 "/>
</clipPath>
<clipPath id="connclosed-gs-clip-2">
<path clip-rule="nonzero" d="M 0 0.363281 L 3.1875 0.363281 L 3.1875 9 L 0 9 Z M 0 0.363281 "/>
</clipPath>
</defs>
<g clip-path="url(#connclosed-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000285714 -11.340374 L -0.000285714 -1.133791 " transform="matrix(0.8925, 0, 0, -0.8925, 1.594005, 1.952935)"/>
</g>
<g clip-path="url(#connclosed-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 3.011719 1.953125 C 3.011719 1.171875 2.375 0.535156 1.59375 0.535156 C 0.8125 0.535156 0.175781 1.171875 0.175781 1.953125 C 0.175781 2.734375 0.8125 3.371094 1.59375 3.371094 C 2.375 3.371094 3.011719 2.734375 3.011719 1.953125 Z M 3.011719 1.953125 "/>
</g>
<g clip-path="url(#connclosed-gs-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 1.588475 -0.000212885 C 1.588475 0.875137 0.875064 1.588548 -0.000285714 1.588548 C -0.875636 1.588548 -1.589046 0.875137 -1.589046 -0.000212885 C -1.589046 -0.875563 -0.875636 -1.588973 -0.000285714 -1.588973 C 0.875064 -1.588973 1.588475 -0.875563 1.588475 -0.000212885 Z M 1.588475 -0.000212885 " transform="matrix(0.8925, 0, 0, -0.8925, 1.594005, 1.952935)"/>
</g>
</svg></td><td><code>wb</code></td><td>connessione chiusa</td></tr>
</tbody>
</table>
</div>

## strumenti di misura

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>freqcount</code></td><td><code>in</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<g>
<g id="freqcount-wb-glyph-0-0">
<path d="M 1.015625 -2.59375 L 1.015625 -4.84375 L 3.1875 -4.84375 L 3.21875 -4.96875 L 3.1875 -5 L 0.859375 -5 L 0.859375 0 L 1.015625 0 L 1.015625 -2.4375 L 2.796875 -2.4375 L 2.828125 -2.5625 L 2.796875 -2.59375 Z M 1.015625 -2.59375 "/>
</g>
</g>
<clipPath id="freqcount-wb-clip-0">
<path clip-rule="nonzero" d="M 0.25 13 L 7 13 L 7 15 L 0.25 15 Z M 0.25 13 "/>
</clipPath>
<clipPath id="freqcount-wb-clip-1">
<path clip-rule="nonzero" d="M 11 0 L 39.511719 0 L 39.511719 28.105469 L 11 28.105469 Z M 11 0 "/>
</clipPath>
</defs>
<g clip-path="url(#freqcount-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.512155 0.000785026 L -19.742945 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253568 0.000785026 C 4.610781 0.203144 1.77379 1.365715 0.000174947 2.631449 L 0.000174947 -2.629879 C 1.77379 -1.368113 4.610781 -0.205542 5.253568 0.000785026 Z M 5.253568 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 6.027172, 14.05546)"/>
<g clip-path="url(#freqcount-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.172126 -14.172267 L -14.172126 14.173837 L 14.173977 14.173837 L 14.173977 -14.172267 Z M -14.172126 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.936565 0.000785026 C 7.936565 4.385226 4.385366 7.936424 0.00092535 7.936424 C -4.383515 7.936424 -7.938682 4.385226 -7.938682 0.000785026 C -7.938682 -4.383656 -4.383515 -7.938822 0.00092535 -7.938822 C 4.385366 -7.938822 7.936565 -4.383656 7.936565 0.000785026 Z M 7.936565 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.85135" y="16.555062"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<g>
<g id="freqcount-gs-glyph-0-0">
<path d="M 1.015625 -2.59375 L 1.015625 -4.84375 L 3.1875 -4.84375 L 3.21875 -4.96875 L 3.1875 -5 L 0.859375 -5 L 0.859375 0 L 1.015625 0 L 1.015625 -2.4375 L 2.796875 -2.4375 L 2.828125 -2.5625 L 2.796875 -2.59375 Z M 1.015625 -2.59375 "/>
</g>
</g>
<clipPath id="freqcount-gs-clip-0">
<path clip-rule="nonzero" d="M 0.25 13 L 7 13 L 7 15 L 0.25 15 Z M 0.25 13 "/>
</clipPath>
<clipPath id="freqcount-gs-clip-1">
<path clip-rule="nonzero" d="M 11 0 L 39.511719 0 L 39.511719 28.105469 L 11 28.105469 Z M 11 0 "/>
</clipPath>
</defs>
<g clip-path="url(#freqcount-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.512155 0.000785026 L -19.742945 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253568 0.000785026 C 4.610781 0.203144 1.77379 1.365715 0.000174947 2.631449 L 0.000174947 -2.629879 C 1.77379 -1.368113 4.610781 -0.205542 5.253568 0.000785026 Z M 5.253568 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 6.027172, 14.05546)"/>
<g clip-path="url(#freqcount-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.172126 -14.172267 L -14.172126 14.173837 L 14.173977 14.173837 L 14.173977 -14.172267 Z M -14.172126 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.936565 0.000785026 C 7.936565 4.385226 4.385366 7.936424 0.00092535 7.936424 C -4.383515 7.936424 -7.938682 4.385226 -7.938682 0.000785026 C -7.938682 -4.383656 -4.383515 -7.938822 0.00092535 -7.938822 C 4.385366 -7.938822 7.936565 -4.383656 7.936565 0.000785026 Z M 7.936565 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.85135" y="16.555062"/>
</g>
</svg></td><td><code>wb</code></td><td>contatore di frequenza</td></tr>
<tr><td><code>scope</code></td><td><code>in</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="scope-wb-clip-0">
<path clip-rule="nonzero" d="M 0.25 13 L 7 13 L 7 15 L 0.25 15 Z M 0.25 13 "/>
</clipPath>
<clipPath id="scope-wb-clip-1">
<path clip-rule="nonzero" d="M 11 0 L 39.511719 0 L 39.511719 28.105469 L 11 28.105469 Z M 11 0 "/>
</clipPath>
</defs>
<g clip-path="url(#scope-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.512155 0.000785026 L -19.742945 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253568 0.000785026 C 4.610781 0.203144 1.77379 1.365715 0.000174947 2.631449 L 0.000174947 -2.629879 C 1.77379 -1.368113 4.610781 -0.205542 5.253568 0.000785026 Z M 5.253568 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 6.027172, 14.05546)"/>
<g clip-path="url(#scope-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.172126 -14.172267 L -14.172126 14.173837 L 14.173977 14.173837 L 14.173977 -14.172267 Z M -14.172126 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.938682 -4.534433 L -7.938682 4.536003 L 6.23437 7.936424 L 6.23437 -7.938822 Z M -7.938682 -4.534433 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="scope-gs-clip-0">
<path clip-rule="nonzero" d="M 0.25 13 L 7 13 L 7 15 L 0.25 15 Z M 0.25 13 "/>
</clipPath>
<clipPath id="scope-gs-clip-1">
<path clip-rule="nonzero" d="M 11 0 L 39.511719 0 L 39.511719 28.105469 L 11 28.105469 Z M 11 0 "/>
</clipPath>
</defs>
<g clip-path="url(#scope-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.512155 0.000785026 L -19.742945 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253568 0.000785026 C 4.610781 0.203144 1.77379 1.365715 0.000174947 2.631449 L 0.000174947 -2.629879 C 1.77379 -1.368113 4.610781 -0.205542 5.253568 0.000785026 Z M 5.253568 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 6.027172, 14.05546)"/>
<g clip-path="url(#scope-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.172126 -14.172267 L -14.172126 14.173837 L 14.173977 14.173837 L 14.173977 -14.172267 Z M -14.172126 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.938682 -4.534433 L -7.938682 4.536003 L 6.23437 7.936424 L 6.23437 -7.938822 Z M -7.938682 -4.534433 " transform="matrix(0.984483, 0, 0, -0.984483, 25.463933, 14.05546)"/>
</svg></td><td><code>wb</code></td><td>oscilloscopio</td></tr>
<tr><td><code>voltmeter</code></td><td><code>in</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.55pt" height="28.55pt" viewBox="0 0 28.55 28.55">
<defs>
<g>
<g id="voltmeter-wb-glyph-0-0">
<path d="M 1.984375 0 L 2.140625 0 L 4.140625 -5 L 3.953125 -5 L 3.828125 -4.65625 L 2.09375 -0.265625 L 2.0625 -0.265625 L 0.4375 -4.65625 L 0.34375 -5 L 0.15625 -5 Z M 1.984375 0 "/>
</g>
</g>
<clipPath id="voltmeter-wb-clip-0">
<path clip-rule="nonzero" d="M 0 0 L 28.105469 0 L 28.105469 28.105469 L 0 28.105469 Z M 0 0 "/>
</clipPath>
</defs>
<g clip-path="url(#voltmeter-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173805 -14.172267 L -14.173805 14.173837 L 14.172299 14.173837 L 14.172299 -14.172267 Z M -14.173805 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.051522, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.938854 0.000785026 C 7.938854 4.385226 4.383688 7.936424 -0.000752846 7.936424 C -4.385194 7.936424 -7.936392 4.385226 -7.936392 0.000785026 C -7.936392 -4.383656 -4.385194 -7.938822 -0.000752846 -7.938822 C 4.383688 -7.938822 7.938854 -4.383656 7.938854 0.000785026 Z M 7.938854 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.051522, 14.05546)"/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="11.940791" y="16.555062"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.55pt" height="28.55pt" viewBox="0 0 28.55 28.55">
<defs>
<g>
<g id="voltmeter-gs-glyph-0-0">
<path d="M 1.984375 0 L 2.140625 0 L 4.140625 -5 L 3.953125 -5 L 3.828125 -4.65625 L 2.09375 -0.265625 L 2.0625 -0.265625 L 0.4375 -4.65625 L 0.34375 -5 L 0.15625 -5 Z M 1.984375 0 "/>
</g>
</g>
<clipPath id="voltmeter-gs-clip-0">
<path clip-rule="nonzero" d="M 0 0 L 28.105469 0 L 28.105469 28.105469 L 0 28.105469 Z M 0 0 "/>
</clipPath>
</defs>
<g clip-path="url(#voltmeter-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173805 -14.172267 L -14.173805 14.173837 L 14.172299 14.173837 L 14.172299 -14.172267 Z M -14.173805 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.051522, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.938854 0.000785026 C 7.938854 4.385226 4.383688 7.936424 -0.000752846 7.936424 C -4.385194 7.936424 -7.936392 4.385226 -7.936392 0.000785026 C -7.936392 -4.383656 -4.385194 -7.938822 -0.000752846 -7.938822 C 4.383688 -7.938822 7.938854 -4.383656 7.938854 0.000785026 Z M 7.938854 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.051522, 14.05546)"/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="11.940791" y="16.555062"/>
</g>
</svg></td><td><code>wb</code></td><td>voltometro</td></tr>
</tbody>
</table>
</div>

## generatori

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>gensin</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="gensin-wb-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="gensin-wb-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="gensin-wb-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#gensin-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 0.000785026 C -7.591542 2.61161 -6.178998 5.103401 -4.536321 5.103401 C -2.893644 5.103401 -1.477132 2.61161 -0.00110311 0.000785026 C 1.478894 -2.614008 2.895405 -5.101831 4.534115 -5.101831 C 6.176792 -5.101831 7.593304 -2.614008 9.069333 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#gensin-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#gensin-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="gensin-gs-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="gensin-gs-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="gensin-gs-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#gensin-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 0.000785026 C -7.591542 2.61161 -6.178998 5.103401 -4.536321 5.103401 C -2.893644 5.103401 -1.477132 2.61161 -0.00110311 0.000785026 C 1.478894 -2.614008 2.895405 -5.101831 4.534115 -5.101831 C 6.176792 -5.101831 7.593304 -2.614008 9.069333 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#gensin-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#gensin-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td><code>wb</code></td><td>onde sinusoidali</td></tr>
<tr><td><code>gensq</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="gensq-wb-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="gensq-wb-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="gensq-wb-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#gensq-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 -3.399636 L -9.071539 3.401206 L -1.417615 3.401206 L -1.417615 -3.399636 L 5.668911 -3.399636 L 5.668911 3.401206 L 9.069333 3.401206 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#gensq-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#gensq-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="gensq-gs-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="gensq-gs-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="gensq-gs-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#gensq-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 -3.399636 L -9.071539 3.401206 L -1.417615 3.401206 L -1.417615 -3.399636 L 5.668911 -3.399636 L 5.668911 3.401206 L 9.069333 3.401206 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#gensq-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#gensq-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td><code>wb</code></td><td>onde quadre</td></tr>
<tr><td><code>gentri</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="gentri-wb-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="gentri-wb-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="gentri-wb-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#gentri-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 -3.399636 L -4.536321 3.401206 L -0.00110311 -3.399636 L 4.534115 3.401206 L 9.069333 -3.399636 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#gentri-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#gentri-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="gentri-gs-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="gentri-gs-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="gentri-gs-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#gentri-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 -3.399636 L -4.536321 3.401206 L -0.00110311 -3.399636 L 4.534115 3.401206 L 9.069333 -3.399636 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#gentri-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#gentri-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td><code>wb</code></td><td>onde triangolari</td></tr>
<tr><td><code>gensaw</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="gensaw-wb-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="gensaw-wb-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="gensaw-wb-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#gensaw-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 -3.399636 L -2.266728 3.401206 L -2.266728 -3.399636 L 4.534115 3.401206 L 4.534115 -3.399636 L 9.069333 1.699012 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#gensaw-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#gensaw-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="gensaw-gs-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="gensaw-gs-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="gensaw-gs-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#gensaw-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 -3.399636 L -2.266728 3.401206 L -2.266728 -3.399636 L 4.534115 3.401206 L 4.534115 -3.399636 L 9.069333 1.699012 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#gensaw-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#gensaw-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td><code>wb</code></td><td>onde a dente di sega</td></tr>
<tr><td><code>genwn</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<g>
<g id="genwn-wb-glyph-0-0">
<path d="M 4.71875 0 L 4.875 0 L 6.828125 -5 L 6.65625 -5 L 6.546875 -4.65625 L 4.828125 -0.265625 L 4.796875 -0.265625 L 3.203125 -4.65625 L 3.109375 -5 L 2.9375 -5 L 3.40625 -3.6875 L 2.078125 -0.265625 L 2.046875 -0.265625 L 0.46875 -4.65625 L 0.359375 -5 L 0.1875 -5 L 1.984375 0 L 2.140625 0 L 3.46875 -3.4375 L 3.5 -3.4375 Z M 4.71875 0 "/>
</g>
<g id="genwn-wb-glyph-0-1">
<path d="M 4.375 0 L 4.390625 -1.375 L 4.390625 -5 L 4.234375 -4.984375 L 4.21875 -0.328125 L 4.1875 -0.328125 L 1.015625 -5 L 0.875 -5 L 0.859375 -1.484375 L 0.859375 0 L 1.015625 0 L 1.015625 -1.5625 L 1.03125 -4.671875 L 1.0625 -4.671875 L 4.234375 0 Z M 4.375 0 "/>
</g>
</g>
<clipPath id="genwn-wb-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="genwn-wb-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="genwn-wb-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#genwn-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="8.204966" y="16.559"/>
<use xlink:href="#glyph-0-1" x="15.141206" y="16.559"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#genwn-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#genwn-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<g>
<g id="genwn-gs-glyph-0-0">
<path d="M 4.71875 0 L 4.875 0 L 6.828125 -5 L 6.65625 -5 L 6.546875 -4.65625 L 4.828125 -0.265625 L 4.796875 -0.265625 L 3.203125 -4.65625 L 3.109375 -5 L 2.9375 -5 L 3.40625 -3.6875 L 2.078125 -0.265625 L 2.046875 -0.265625 L 0.46875 -4.65625 L 0.359375 -5 L 0.1875 -5 L 1.984375 0 L 2.140625 0 L 3.46875 -3.4375 L 3.5 -3.4375 Z M 4.71875 0 "/>
</g>
<g id="genwn-gs-glyph-0-1">
<path d="M 4.375 0 L 4.390625 -1.375 L 4.390625 -5 L 4.234375 -4.984375 L 4.21875 -0.328125 L 4.1875 -0.328125 L 1.015625 -5 L 0.875 -5 L 0.859375 -1.484375 L 0.859375 0 L 1.015625 0 L 1.015625 -1.5625 L 1.03125 -4.671875 L 1.0625 -4.671875 L 4.234375 0 Z M 4.375 0 "/>
</g>
</g>
<clipPath id="genwn-gs-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="genwn-gs-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="genwn-gs-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#genwn-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="8.204966" y="16.559"/>
<use xlink:href="#glyph-0-1" x="15.141206" y="16.559"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#genwn-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#genwn-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td><code>wb</code></td><td>rumore bianco</td></tr>
<tr><td><code>genpulse</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="genpulse-wb-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="genpulse-wb-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="genpulse-wb-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#genpulse-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 -2.836206 L -1.417615 -2.836206 L -1.417615 3.968605 L 1.701092 3.968605 L 1.701092 -2.836206 L 9.069333 -2.836206 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#genpulse-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#genpulse-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39.88pt" height="28.55pt" viewBox="0 0 39.88 28.55">
<defs>
<clipPath id="genpulse-gs-clip-0">
<path clip-rule="nonzero" d="M 0.25 0 L 29 0 L 29 28.105469 L 0.25 28.105469 Z M 0.25 0 "/>
</clipPath>
<clipPath id="genpulse-gs-clip-1">
<path clip-rule="nonzero" d="M 33 11 L 39.511719 11 L 39.511719 17 L 33 17 Z M 33 11 "/>
</clipPath>
<clipPath id="genpulse-gs-clip-2">
<path clip-rule="nonzero" d="M 31 8 L 39.511719 8 L 39.511719 20 L 31 20 Z M 31 8 "/>
</clipPath>
</defs>
<g clip-path="url(#genpulse-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174155 -14.172267 L -14.174155 14.173837 L 14.171949 14.173837 L 14.171949 -14.172267 Z M -14.174155 -14.172267 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.071539 -2.836206 L -1.417615 -2.836206 L -1.417615 3.968605 L 1.701092 3.968605 L 1.701092 -2.836206 L 9.069333 -2.836206 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.171949 0.000785026 L 19.941158 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 14.301867, 14.05546)"/>
<g clip-path="url(#genpulse-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.109375 14.054688 C 38.472656 13.855469 35.679688 12.710938 33.933594 11.464844 L 33.933594 16.644531 C 35.679688 15.402344 38.472656 14.257812 39.109375 14.054688 Z M 39.109375 14.054688 "/>
</g>
<g clip-path="url(#genpulse-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256319 0.000785026 C 4.609565 0.203144 1.772574 1.365715 -0.00104173 2.631449 L -0.00104173 -2.629879 C 1.772574 -1.368113 4.609565 -0.205542 5.256319 0.000785026 Z M 5.256319 0.000785026 " transform="matrix(0.984483, 0, 0, -0.984483, 33.934619, 14.05546)"/>
</g>
</svg></td><td><code>wb</code></td><td>impulsi</td></tr>
<tr><td><code>genfunc</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.55pt" height="51.22pt" viewBox="0 0 45.55 51.22">
<defs>
<g>
<g id="genfunc-wb-glyph-0-0">
<path d="M 1.734375 0 L 1.875 0 L 3.625 -4.375 L 3.453125 -4.375 L 3.359375 -4.078125 L 1.828125 -0.234375 L 1.796875 -0.234375 L 0.390625 -4.078125 L 0.296875 -4.375 L 0.140625 -4.375 Z M 1.734375 0 "/>
</g>
<g id="genfunc-wb-glyph-0-1">
<path d="M 2.15625 -4.40625 C 1.5625 -4.40625 1.109375 -4.21875 0.796875 -3.828125 C 0.484375 -3.4375 0.328125 -2.890625 0.328125 -2.171875 C 0.328125 -1.46875 0.46875 -0.921875 0.78125 -0.53125 C 1.078125 -0.15625 1.5 0.03125 2.078125 0.03125 C 2.296875 0.03125 2.515625 0 2.734375 -0.078125 C 2.953125 -0.171875 3.171875 -0.28125 3.359375 -0.421875 L 3.375 -0.546875 L 3.328125 -0.5625 C 3.140625 -0.40625 2.9375 -0.296875 2.71875 -0.21875 C 2.5 -0.140625 2.296875 -0.109375 2.0625 -0.109375 C 1.546875 -0.109375 1.15625 -0.28125 0.875 -0.625 C 0.609375 -0.984375 0.46875 -1.5 0.46875 -2.171875 C 0.46875 -2.84375 0.609375 -3.375 0.890625 -3.71875 C 1.1875 -4.078125 1.609375 -4.265625 2.15625 -4.265625 C 2.359375 -4.265625 2.546875 -4.234375 2.75 -4.171875 C 2.9375 -4.09375 3.109375 -4.015625 3.265625 -3.890625 L 3.3125 -3.890625 L 3.359375 -4 C 3.1875 -4.125 3 -4.234375 2.796875 -4.296875 C 2.578125 -4.375 2.375 -4.40625 2.15625 -4.40625 Z M 2.15625 -4.40625 "/>
</g>
<g id="genfunc-wb-glyph-0-2">
<path d="M 2.359375 -4.40625 C 1.703125 -4.40625 1.203125 -4.203125 0.859375 -3.828125 C 0.5 -3.4375 0.328125 -2.875 0.328125 -2.15625 C 0.328125 -1.4375 0.484375 -0.90625 0.796875 -0.53125 C 1.09375 -0.15625 1.546875 0.03125 2.125 0.03125 C 2.234375 0.03125 2.34375 0.03125 2.46875 0.015625 C 2.578125 0 2.6875 0 2.796875 -0.03125 C 2.90625 -0.046875 3.015625 -0.0625 3.140625 -0.09375 C 3.265625 -0.125 3.390625 -0.171875 3.546875 -0.203125 L 3.546875 -1.640625 L 3.40625 -1.625 L 3.40625 -0.3125 C 3.265625 -0.265625 3.140625 -0.234375 3.03125 -0.203125 C 2.921875 -0.171875 2.8125 -0.15625 2.703125 -0.140625 C 2.609375 -0.125 2.515625 -0.109375 2.40625 -0.109375 C 2.3125 -0.109375 2.21875 -0.109375 2.109375 -0.109375 C 1.578125 -0.109375 1.171875 -0.28125 0.890625 -0.625 C 0.609375 -0.96875 0.46875 -1.484375 0.46875 -2.140625 C 0.46875 -2.828125 0.625 -3.359375 0.953125 -3.71875 C 1.28125 -4.078125 1.75 -4.265625 2.359375 -4.265625 C 2.53125 -4.265625 2.734375 -4.234375 2.921875 -4.171875 C 3.109375 -4.109375 3.3125 -4.015625 3.5 -3.90625 L 3.546875 -3.90625 L 3.59375 -4.03125 C 3.390625 -4.15625 3.171875 -4.234375 2.96875 -4.3125 C 2.75 -4.375 2.546875 -4.40625 2.359375 -4.40625 Z M 2.359375 -4.40625 "/>
</g>
<g id="genfunc-wb-glyph-0-3">
<path d="M 2.1875 -4.40625 C 1.578125 -4.40625 1.125 -4.21875 0.796875 -3.84375 C 0.484375 -3.453125 0.328125 -2.90625 0.328125 -2.171875 C 0.328125 -1.46875 0.484375 -0.921875 0.796875 -0.53125 C 1.09375 -0.15625 1.546875 0.03125 2.125 0.03125 C 2.71875 0.03125 3.171875 -0.15625 3.5 -0.5625 C 3.8125 -0.953125 3.984375 -1.515625 3.984375 -2.265625 C 3.984375 -2.953125 3.828125 -3.484375 3.515625 -3.859375 C 3.203125 -4.234375 2.765625 -4.40625 2.1875 -4.40625 Z M 2.1875 -4.28125 C 2.71875 -4.28125 3.125 -4.09375 3.421875 -3.75 C 3.703125 -3.40625 3.84375 -2.90625 3.84375 -2.265625 C 3.84375 -1.5625 3.6875 -1.03125 3.390625 -0.65625 C 3.09375 -0.28125 2.671875 -0.109375 2.125 -0.109375 C 1.578125 -0.109375 1.171875 -0.28125 0.890625 -0.640625 C 0.609375 -1 0.46875 -1.5 0.46875 -2.171875 C 0.46875 -2.859375 0.609375 -3.375 0.90625 -3.734375 C 1.203125 -4.09375 1.625 -4.28125 2.1875 -4.28125 Z M 2.1875 -4.28125 "/>
</g>
<g id="genfunc-wb-glyph-1-0">
<path d="M 1.328125 0.015625 C 1.6875 0.015625 1.953125 -0.09375 2.140625 -0.3125 C 2.328125 -0.546875 2.421875 -0.859375 2.421875 -1.28125 C 2.421875 -1.671875 2.328125 -1.96875 2.15625 -2.1875 C 1.984375 -2.390625 1.71875 -2.5 1.375 -2.5 C 1.015625 -2.5 0.75 -2.390625 0.5625 -2.171875 C 0.375 -1.953125 0.28125 -1.640625 0.28125 -1.234375 C 0.28125 -0.828125 0.375 -0.515625 0.546875 -0.296875 C 0.734375 -0.078125 1 0.015625 1.328125 0.015625 Z M 1.375 -2.40625 C 1.6875 -2.40625 1.921875 -2.296875 2.078125 -2.109375 C 2.25 -1.90625 2.328125 -1.640625 2.328125 -1.265625 C 2.328125 -0.890625 2.234375 -0.59375 2.078125 -0.375 C 1.90625 -0.171875 1.65625 -0.078125 1.328125 -0.078125 C 1.03125 -0.078125 0.796875 -0.171875 0.625 -0.375 C 0.46875 -0.5625 0.390625 -0.859375 0.390625 -1.234375 C 0.390625 -1.609375 0.46875 -1.90625 0.640625 -2.09375 C 0.796875 -2.296875 1.046875 -2.40625 1.375 -2.40625 Z M 1.375 -2.40625 "/>
</g>
<g id="genfunc-wb-glyph-1-1">
<path d="M 0.625 0 L 0.625 -0.9375 L 0.984375 -0.9375 C 1.25 -0.9375 1.46875 -1.015625 1.625 -1.15625 C 1.765625 -1.296875 1.84375 -1.5 1.84375 -1.78125 C 1.84375 -2 1.78125 -2.171875 1.65625 -2.296875 C 1.53125 -2.421875 1.34375 -2.484375 1.109375 -2.484375 L 0.53125 -2.484375 L 0.53125 0 Z M 0.625 -1.03125 L 0.625 -2.390625 L 1.140625 -2.390625 C 1.328125 -2.390625 1.484375 -2.328125 1.59375 -2.21875 C 1.6875 -2.109375 1.75 -1.96875 1.75 -1.78125 C 1.75 -1.5625 1.6875 -1.390625 1.578125 -1.265625 C 1.46875 -1.140625 1.3125 -1.0625 1.109375 -1.03125 Z M 0.625 -1.03125 "/>
</g>
</g>
<clipPath id="genfunc-wb-clip-0">
<path clip-rule="nonzero" d="M 0.121094 11 L 6 11 L 6 12 L 0.121094 12 Z M 0.121094 11 "/>
</clipPath>
<clipPath id="genfunc-wb-clip-1">
<path clip-rule="nonzero" d="M 39 8 L 44.988281 8 L 44.988281 14 L 39 14 Z M 39 8 "/>
</clipPath>
<clipPath id="genfunc-wb-clip-2">
<path clip-rule="nonzero" d="M 36 5 L 44.988281 5 L 44.988281 17 L 36 17 Z M 36 5 "/>
</clipPath>
<clipPath id="genfunc-wb-clip-3">
<path clip-rule="nonzero" d="M 0.121094 39 L 6 39 L 6 40 L 0.121094 40 Z M 0.121094 39 "/>
</clipPath>
<clipPath id="genfunc-wb-clip-4">
<path clip-rule="nonzero" d="M 11 27 L 34 27 L 34 50.453125 L 11 50.453125 Z M 11 27 "/>
</clipPath>
<clipPath id="genfunc-wb-clip-5">
<path clip-rule="nonzero" d="M 39 36 L 44.988281 36 L 44.988281 42 L 39 42 Z M 39 36 "/>
</clipPath>
<clipPath id="genfunc-wb-clip-6">
<path clip-rule="nonzero" d="M 36 33 L 44.988281 33 L 44.988281 45 L 36 45 Z M 36 33 "/>
</clipPath>
</defs>
<g clip-path="url(#genfunc-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -22.676746 14.171817 L -16.9066 14.171817 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25626 -0.00157274 C 4.609845 0.204646 1.774344 1.366606 0.00165975 2.631676 L 0.00165975 -2.630856 C 1.774344 -1.365786 4.609845 -0.203825 5.25626 -0.00157274 Z M 5.25626 -0.00157274 " transform="matrix(0.985, 0, 0, -0.985, 5.900709, 11.264076)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.338707 2.833778 L -11.338707 25.513822 L 11.337372 25.513822 L 11.337372 2.833778 Z M -11.338707 2.833778 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="16.840375" y="13.448205"/>
<use xlink:href="#glyph-0-1" x="20.536001" y="13.448205"/>
<use xlink:href="#glyph-0-2" x="24.128589" y="13.448205"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 11.337372 14.171817 L 17.107518 14.171817 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
<g clip-path="url(#genfunc-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 44.582031 11.265625 C 43.945312 11.0625 41.152344 9.917969 39.40625 8.671875 L 39.40625 13.855469 C 41.152344 12.609375 43.945312 11.464844 44.582031 11.265625 Z M 44.582031 11.265625 "/>
</g>
<g clip-path="url(#genfunc-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254328 -0.00157274 C 4.607913 0.204646 1.772412 1.366606 -0.000272234 2.631676 L -0.000272234 -2.630856 C 1.772412 -1.365786 4.607913 -0.203825 5.254328 -0.00157274 Z M 5.254328 -0.00157274 " transform="matrix(0.985, 0, 0, -0.985, 39.406518, 11.264076)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-1-0" x="19.054655" y="26.465965"/>
<use xlink:href="#glyph-1-1" x="21.767994" y="26.465965"/>
<use xlink:href="#glyph-1-1" x="23.91217" y="26.465965"/>
</g>
<g clip-path="url(#genfunc-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -22.676746 -14.175264 L -16.9066 -14.175264 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25626 -0.00187396 C 4.609845 0.204344 1.774344 1.366305 0.00165975 2.631375 L 0.00165975 -2.631157 C 1.774344 -1.366087 4.609845 -0.204126 5.25626 -0.00187396 Z M 5.25626 -0.00187396 " transform="matrix(0.985, 0, 0, -0.985, 5.900709, 39.185654)"/>
<g clip-path="url(#genfunc-wb-clip-4)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.338707 -25.513303 L -11.338707 -2.833259 L 11.337372 -2.833259 L 11.337372 -25.513303 Z M -11.338707 -25.513303 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="16.757635" y="41.37394"/>
<use xlink:href="#glyph-0-1" x="20.453261" y="41.37394"/>
<use xlink:href="#glyph-0-3" x="24.045849" y="41.37394"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 11.337372 -14.175264 L 17.107518 -14.175264 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
<g clip-path="url(#genfunc-wb-clip-5)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 44.582031 39.1875 C 43.945312 38.984375 41.152344 37.839844 39.40625 36.59375 L 39.40625 41.777344 C 41.152344 40.53125 43.945312 39.386719 44.582031 39.1875 Z M 44.582031 39.1875 "/>
</g>
<g clip-path="url(#genfunc-wb-clip-6)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254328 -0.00187396 C 4.607913 0.204344 1.772412 1.366305 -0.000272234 2.631375 L -0.000272234 -2.631157 C 1.772412 -1.366087 4.607913 -0.204126 5.254328 -0.00187396 Z M 5.254328 -0.00187396 " transform="matrix(0.985, 0, 0, -0.985, 39.406518, 39.185654)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.55pt" height="51.22pt" viewBox="0 0 45.55 51.22">
<defs>
<g>
<g id="genfunc-gs-glyph-0-0">
<path d="M 1.734375 0 L 1.875 0 L 3.625 -4.375 L 3.453125 -4.375 L 3.359375 -4.078125 L 1.828125 -0.234375 L 1.796875 -0.234375 L 0.390625 -4.078125 L 0.296875 -4.375 L 0.140625 -4.375 Z M 1.734375 0 "/>
</g>
<g id="genfunc-gs-glyph-0-1">
<path d="M 2.15625 -4.40625 C 1.5625 -4.40625 1.109375 -4.21875 0.796875 -3.828125 C 0.484375 -3.4375 0.328125 -2.890625 0.328125 -2.171875 C 0.328125 -1.46875 0.46875 -0.921875 0.78125 -0.53125 C 1.078125 -0.15625 1.5 0.03125 2.078125 0.03125 C 2.296875 0.03125 2.515625 0 2.734375 -0.078125 C 2.953125 -0.171875 3.171875 -0.28125 3.359375 -0.421875 L 3.375 -0.546875 L 3.328125 -0.5625 C 3.140625 -0.40625 2.9375 -0.296875 2.71875 -0.21875 C 2.5 -0.140625 2.296875 -0.109375 2.0625 -0.109375 C 1.546875 -0.109375 1.15625 -0.28125 0.875 -0.625 C 0.609375 -0.984375 0.46875 -1.5 0.46875 -2.171875 C 0.46875 -2.84375 0.609375 -3.375 0.890625 -3.71875 C 1.1875 -4.078125 1.609375 -4.265625 2.15625 -4.265625 C 2.359375 -4.265625 2.546875 -4.234375 2.75 -4.171875 C 2.9375 -4.09375 3.109375 -4.015625 3.265625 -3.890625 L 3.3125 -3.890625 L 3.359375 -4 C 3.1875 -4.125 3 -4.234375 2.796875 -4.296875 C 2.578125 -4.375 2.375 -4.40625 2.15625 -4.40625 Z M 2.15625 -4.40625 "/>
</g>
<g id="genfunc-gs-glyph-0-2">
<path d="M 2.359375 -4.40625 C 1.703125 -4.40625 1.203125 -4.203125 0.859375 -3.828125 C 0.5 -3.4375 0.328125 -2.875 0.328125 -2.15625 C 0.328125 -1.4375 0.484375 -0.90625 0.796875 -0.53125 C 1.09375 -0.15625 1.546875 0.03125 2.125 0.03125 C 2.234375 0.03125 2.34375 0.03125 2.46875 0.015625 C 2.578125 0 2.6875 0 2.796875 -0.03125 C 2.90625 -0.046875 3.015625 -0.0625 3.140625 -0.09375 C 3.265625 -0.125 3.390625 -0.171875 3.546875 -0.203125 L 3.546875 -1.640625 L 3.40625 -1.625 L 3.40625 -0.3125 C 3.265625 -0.265625 3.140625 -0.234375 3.03125 -0.203125 C 2.921875 -0.171875 2.8125 -0.15625 2.703125 -0.140625 C 2.609375 -0.125 2.515625 -0.109375 2.40625 -0.109375 C 2.3125 -0.109375 2.21875 -0.109375 2.109375 -0.109375 C 1.578125 -0.109375 1.171875 -0.28125 0.890625 -0.625 C 0.609375 -0.96875 0.46875 -1.484375 0.46875 -2.140625 C 0.46875 -2.828125 0.625 -3.359375 0.953125 -3.71875 C 1.28125 -4.078125 1.75 -4.265625 2.359375 -4.265625 C 2.53125 -4.265625 2.734375 -4.234375 2.921875 -4.171875 C 3.109375 -4.109375 3.3125 -4.015625 3.5 -3.90625 L 3.546875 -3.90625 L 3.59375 -4.03125 C 3.390625 -4.15625 3.171875 -4.234375 2.96875 -4.3125 C 2.75 -4.375 2.546875 -4.40625 2.359375 -4.40625 Z M 2.359375 -4.40625 "/>
</g>
<g id="genfunc-gs-glyph-0-3">
<path d="M 2.1875 -4.40625 C 1.578125 -4.40625 1.125 -4.21875 0.796875 -3.84375 C 0.484375 -3.453125 0.328125 -2.90625 0.328125 -2.171875 C 0.328125 -1.46875 0.484375 -0.921875 0.796875 -0.53125 C 1.09375 -0.15625 1.546875 0.03125 2.125 0.03125 C 2.71875 0.03125 3.171875 -0.15625 3.5 -0.5625 C 3.8125 -0.953125 3.984375 -1.515625 3.984375 -2.265625 C 3.984375 -2.953125 3.828125 -3.484375 3.515625 -3.859375 C 3.203125 -4.234375 2.765625 -4.40625 2.1875 -4.40625 Z M 2.1875 -4.28125 C 2.71875 -4.28125 3.125 -4.09375 3.421875 -3.75 C 3.703125 -3.40625 3.84375 -2.90625 3.84375 -2.265625 C 3.84375 -1.5625 3.6875 -1.03125 3.390625 -0.65625 C 3.09375 -0.28125 2.671875 -0.109375 2.125 -0.109375 C 1.578125 -0.109375 1.171875 -0.28125 0.890625 -0.640625 C 0.609375 -1 0.46875 -1.5 0.46875 -2.171875 C 0.46875 -2.859375 0.609375 -3.375 0.90625 -3.734375 C 1.203125 -4.09375 1.625 -4.28125 2.1875 -4.28125 Z M 2.1875 -4.28125 "/>
</g>
<g id="genfunc-gs-glyph-1-0">
<path d="M 1.328125 0.015625 C 1.6875 0.015625 1.953125 -0.09375 2.140625 -0.3125 C 2.328125 -0.546875 2.421875 -0.859375 2.421875 -1.28125 C 2.421875 -1.671875 2.328125 -1.96875 2.15625 -2.1875 C 1.984375 -2.390625 1.71875 -2.5 1.375 -2.5 C 1.015625 -2.5 0.75 -2.390625 0.5625 -2.171875 C 0.375 -1.953125 0.28125 -1.640625 0.28125 -1.234375 C 0.28125 -0.828125 0.375 -0.515625 0.546875 -0.296875 C 0.734375 -0.078125 1 0.015625 1.328125 0.015625 Z M 1.375 -2.40625 C 1.6875 -2.40625 1.921875 -2.296875 2.078125 -2.109375 C 2.25 -1.90625 2.328125 -1.640625 2.328125 -1.265625 C 2.328125 -0.890625 2.234375 -0.59375 2.078125 -0.375 C 1.90625 -0.171875 1.65625 -0.078125 1.328125 -0.078125 C 1.03125 -0.078125 0.796875 -0.171875 0.625 -0.375 C 0.46875 -0.5625 0.390625 -0.859375 0.390625 -1.234375 C 0.390625 -1.609375 0.46875 -1.90625 0.640625 -2.09375 C 0.796875 -2.296875 1.046875 -2.40625 1.375 -2.40625 Z M 1.375 -2.40625 "/>
</g>
<g id="genfunc-gs-glyph-1-1">
<path d="M 0.625 0 L 0.625 -0.9375 L 0.984375 -0.9375 C 1.25 -0.9375 1.46875 -1.015625 1.625 -1.15625 C 1.765625 -1.296875 1.84375 -1.5 1.84375 -1.78125 C 1.84375 -2 1.78125 -2.171875 1.65625 -2.296875 C 1.53125 -2.421875 1.34375 -2.484375 1.109375 -2.484375 L 0.53125 -2.484375 L 0.53125 0 Z M 0.625 -1.03125 L 0.625 -2.390625 L 1.140625 -2.390625 C 1.328125 -2.390625 1.484375 -2.328125 1.59375 -2.21875 C 1.6875 -2.109375 1.75 -1.96875 1.75 -1.78125 C 1.75 -1.5625 1.6875 -1.390625 1.578125 -1.265625 C 1.46875 -1.140625 1.3125 -1.0625 1.109375 -1.03125 Z M 0.625 -1.03125 "/>
</g>
</g>
<clipPath id="genfunc-gs-clip-0">
<path clip-rule="nonzero" d="M 0.121094 11 L 6 11 L 6 12 L 0.121094 12 Z M 0.121094 11 "/>
</clipPath>
<clipPath id="genfunc-gs-clip-1">
<path clip-rule="nonzero" d="M 39 8 L 44.988281 8 L 44.988281 14 L 39 14 Z M 39 8 "/>
</clipPath>
<clipPath id="genfunc-gs-clip-2">
<path clip-rule="nonzero" d="M 36 5 L 44.988281 5 L 44.988281 17 L 36 17 Z M 36 5 "/>
</clipPath>
<clipPath id="genfunc-gs-clip-3">
<path clip-rule="nonzero" d="M 0.121094 39 L 6 39 L 6 40 L 0.121094 40 Z M 0.121094 39 "/>
</clipPath>
<clipPath id="genfunc-gs-clip-4">
<path clip-rule="nonzero" d="M 11 27 L 34 27 L 34 50.453125 L 11 50.453125 Z M 11 27 "/>
</clipPath>
<clipPath id="genfunc-gs-clip-5">
<path clip-rule="nonzero" d="M 39 36 L 44.988281 36 L 44.988281 42 L 39 42 Z M 39 36 "/>
</clipPath>
<clipPath id="genfunc-gs-clip-6">
<path clip-rule="nonzero" d="M 36 33 L 44.988281 33 L 44.988281 45 L 36 45 Z M 36 33 "/>
</clipPath>
</defs>
<g clip-path="url(#genfunc-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -22.676746 14.171817 L -16.9066 14.171817 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25626 -0.00157274 C 4.609845 0.204646 1.774344 1.366606 0.00165975 2.631676 L 0.00165975 -2.630856 C 1.774344 -1.365786 4.609845 -0.203825 5.25626 -0.00157274 Z M 5.25626 -0.00157274 " transform="matrix(0.985, 0, 0, -0.985, 5.900709, 11.264076)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.338707 2.833778 L -11.338707 25.513822 L 11.337372 25.513822 L 11.337372 2.833778 Z M -11.338707 2.833778 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="16.840375" y="13.448205"/>
<use xlink:href="#glyph-0-1" x="20.536001" y="13.448205"/>
<use xlink:href="#glyph-0-2" x="24.128589" y="13.448205"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 11.337372 14.171817 L 17.107518 14.171817 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
<g clip-path="url(#genfunc-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 44.582031 11.265625 C 43.945312 11.0625 41.152344 9.917969 39.40625 8.671875 L 39.40625 13.855469 C 41.152344 12.609375 43.945312 11.464844 44.582031 11.265625 Z M 44.582031 11.265625 "/>
</g>
<g clip-path="url(#genfunc-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254328 -0.00157274 C 4.607913 0.204646 1.772412 1.366606 -0.000272234 2.631676 L -0.000272234 -2.630856 C 1.772412 -1.365786 4.607913 -0.203825 5.254328 -0.00157274 Z M 5.254328 -0.00157274 " transform="matrix(0.985, 0, 0, -0.985, 39.406518, 11.264076)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-1-0" x="19.054655" y="26.465965"/>
<use xlink:href="#glyph-1-1" x="21.767994" y="26.465965"/>
<use xlink:href="#glyph-1-1" x="23.91217" y="26.465965"/>
</g>
<g clip-path="url(#genfunc-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -22.676746 -14.175264 L -16.9066 -14.175264 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25626 -0.00187396 C 4.609845 0.204344 1.774344 1.366305 0.00165975 2.631375 L 0.00165975 -2.631157 C 1.774344 -1.366087 4.609845 -0.204126 5.25626 -0.00187396 Z M 5.25626 -0.00187396 " transform="matrix(0.985, 0, 0, -0.985, 5.900709, 39.185654)"/>
<g clip-path="url(#genfunc-gs-clip-4)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.338707 -25.513303 L -11.338707 -2.833259 L 11.337372 -2.833259 L 11.337372 -25.513303 Z M -11.338707 -25.513303 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="16.757635" y="41.37394"/>
<use xlink:href="#glyph-0-1" x="20.453261" y="41.37394"/>
<use xlink:href="#glyph-0-3" x="24.045849" y="41.37394"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 11.337372 -14.175264 L 17.107518 -14.175264 " transform="matrix(0.985, 0, 0, -0.985, 22.555345, 25.224865)"/>
<g clip-path="url(#genfunc-gs-clip-5)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 44.582031 39.1875 C 43.945312 38.984375 41.152344 37.839844 39.40625 36.59375 L 39.40625 41.777344 C 41.152344 40.53125 43.945312 39.386719 44.582031 39.1875 Z M 44.582031 39.1875 "/>
</g>
<g clip-path="url(#genfunc-gs-clip-6)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254328 -0.00187396 C 4.607913 0.204344 1.772412 1.366305 -0.000272234 2.631375 L -0.000272234 -2.631157 C 1.772412 -1.366087 4.607913 -0.204126 5.254328 -0.00187396 Z M 5.254328 -0.00187396 " transform="matrix(0.985, 0, 0, -0.985, 39.406518, 39.185654)"/>
</g>
</svg></td><td><code>wb</code></td><td>funzioni (VCG/VCO)</td></tr>
</tbody>
</table>
</div>

## filtri

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>filter</code></td><td><code>in,out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="filter-wb-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="filter-wb-clip-1">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="filter-wb-clip-2">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#filter-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 0.000256345 C -6.642885 1.887947 -5.405575 3.684425 -3.969978 3.684425 C -2.530416 3.684425 -1.293107 1.887947 -0.00027665 0.000256345 C 1.292553 -1.887434 2.533829 -3.683912 3.969425 -3.683912 C 5.405022 -3.683912 6.642331 -1.887434 7.935161 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#filter-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#filter-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="filter-gs-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="filter-gs-clip-1">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="filter-gs-clip-2">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#filter-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 0.000256345 C -6.642885 1.887947 -5.405575 3.684425 -3.969978 3.684425 C -2.530416 3.684425 -1.293107 1.887947 -0.00027665 0.000256345 C 1.292553 -1.887434 2.533829 -3.683912 3.969425 -3.683912 C 5.405022 -3.683912 6.642331 -1.887434 7.935161 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#filter-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#filter-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td><code>wb</code></td><td>generico</td></tr>
<tr><td><code>lpf</code></td><td><code>in,out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="lpf-wb-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="lpf-wb-clip-1">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="lpf-wb-clip-2">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#lpf-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 3.684425 C -6.642885 5.572115 -5.405575 7.368594 -3.969978 7.368594 C -2.530416 7.368594 -1.293107 5.572115 -0.00027665 3.684425 C 1.292553 1.796735 2.533829 0.000256345 3.969425 0.000256345 C 5.405022 0.000256345 6.642331 1.796735 7.935161 3.684425 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 -5.670746 L 7.935161 -5.670746 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#lpf-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#lpf-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="lpf-gs-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="lpf-gs-clip-1">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="lpf-gs-clip-2">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#lpf-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 3.684425 C -6.642885 5.572115 -5.405575 7.368594 -3.969978 7.368594 C -2.530416 7.368594 -1.293107 5.572115 -0.00027665 3.684425 C 1.292553 1.796735 2.533829 0.000256345 3.969425 0.000256345 C 5.405022 0.000256345 6.642331 1.796735 7.935161 3.684425 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 -5.670746 L 7.935161 -5.670746 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#lpf-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#lpf-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td><code>wb</code></td><td>passa-basso</td></tr>
<tr><td><code>hpf</code></td><td><code>in,out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="hpf-wb-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="hpf-wb-clip-1">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="hpf-wb-clip-2">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#hpf-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 5.667293 L 7.935161 5.667293 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 -3.683912 C -6.642885 -1.800188 -5.405575 0.000256345 -3.969978 0.000256345 C -2.530416 0.000256345 -1.293107 -1.800188 -0.00027665 -3.683912 C 1.292553 -5.571603 2.533829 -7.368081 3.969425 -7.368081 C 5.405022 -7.368081 6.642331 -5.571603 7.935161 -3.683912 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#hpf-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#hpf-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.92pt" height="28.58pt" viewBox="0 0 42.92 28.58">
<defs>
<clipPath id="hpf-gs-clip-0">
<path clip-rule="nonzero" d="M 0.269531 13 L 42.570312 13 L 42.570312 15 L 0.269531 15 Z M 0.269531 13 "/>
</clipPath>
<clipPath id="hpf-gs-clip-1">
<path clip-rule="nonzero" d="M 7 0 L 36 0 L 36 28.167969 L 7 28.167969 Z M 7 0 "/>
</clipPath>
</defs>
<g clip-path="url(#hpf-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.258729 -0.000938681 L -13.890295 -0.000938681 M 13.890961 -0.000938681 L 21.259395 -0.000938681 " transform="matrix(0.985517, 0, 0, -0.985517, 21.419594, 14.085012)"/>
</g>
<g clip-path="url(#hpf-gs-clip-1)">
<path fill="none" stroke-width="0.797" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -13.890295 13.891671 L 13.890961 13.891671 L 13.890961 -13.889585 L -13.890295 -13.889585 Z M -13.890295 13.891671 " transform="matrix(0.985517, 0, 0, -0.985517, 21.419594, 14.085012)"/>
</g>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -6.945972 3.471223 C -5.812367 5.250904 -4.730289 6.943384 -3.47381 6.943384 C -2.217332 6.943384 -1.131291 5.250904 -0.00164892 3.471223 C 1.131956 1.695506 2.214034 -0.000938681 3.470513 -0.000938681 C 4.730955 -0.000938681 5.813032 1.695506 6.946638 3.471223 " transform="matrix(0.985517, 0, 0, -0.985517, 21.419594, 14.085012)"/>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -6.945972 -3.4731 C -5.812367 -1.693419 -4.730289 -0.000938681 -3.47381 -0.000938681 C -2.217332 -0.000938681 -1.131291 -1.693419 -0.00164892 -3.4731 C 1.131956 -5.248817 2.214034 -6.945262 3.470513 -6.945262 C 4.730955 -6.945262 5.813032 -5.248817 6.946638 -3.4731 M 2.083233 -1.388218 L -2.082568 -5.554019 " transform="matrix(0.985517, 0, 0, -0.985517, 21.419594, 14.085012)"/>
</svg></td><td><code>gs</code></td><td>passa-alto</td></tr>
<tr><td><code>bpf</code></td><td><code>in,out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="bpf-wb-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="bpf-wb-clip-1">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="bpf-wb-clip-2">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#bpf-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 0.000256345 C -6.642885 1.741214 -5.405575 3.402858 -3.969978 3.402858 C -2.530416 3.402858 -1.293107 1.741214 -0.00027665 0.000256345 C 1.292553 -1.740702 2.533829 -3.402345 3.969425 -3.402345 C 5.405022 -3.402345 6.642331 -1.740702 7.935161 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 7.368594 L 7.935161 7.368594 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 -7.368081 L 7.935161 -7.368081 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#bpf-wb-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#bpf-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="bpf-gs-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="bpf-gs-clip-1">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="bpf-gs-clip-2">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#bpf-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 0.000256345 C -6.642885 1.741214 -5.405575 3.402858 -3.969978 3.402858 C -2.530416 3.402858 -1.293107 1.741214 -0.00027665 0.000256345 C 1.292553 -1.740702 2.533829 -3.402345 3.969425 -3.402345 C 5.405022 -3.402345 6.642331 -1.740702 7.935161 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 7.368594 L 7.935161 7.368594 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 -7.368081 L 7.935161 -7.368081 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#bpf-gs-clip-1)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#bpf-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td><code>wb</code></td><td>passa banda</td></tr>
<tr><td><code>bsf</code></td><td><code>in,out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="bsf-wb-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="bsf-wb-clip-1">
<path clip-rule="nonzero" d="M 13 0.0507812 L 37 0.0507812 L 37 25 L 13 25 Z M 13 0.0507812 "/>
</clipPath>
<clipPath id="bsf-wb-clip-2">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="bsf-wb-clip-3">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#bsf-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 0.000256345 C -6.642885 1.741214 -5.405575 3.402858 -3.969978 3.402858 C -2.530416 3.402858 -1.293107 1.741214 -0.00027665 0.000256345 C 1.292553 -1.740702 2.533829 -3.402345 3.969425 -3.402345 C 5.405022 -3.402345 6.642331 -1.740702 7.935161 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 7.368594 L 7.935161 7.368594 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 -7.368081 L 7.935161 -7.368081 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#bsf-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.069915 -9.636482 L 9.069362 9.636995 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#bsf-wb-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#bsf-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.22pt" height="25.71pt" viewBox="0 0 51.22 25.71">
<defs>
<clipPath id="bsf-gs-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 40 0.0507812 L 40 25.375 L 11 25.375 Z M 11 0.0507812 "/>
</clipPath>
<clipPath id="bsf-gs-clip-1">
<path clip-rule="nonzero" d="M 13 0.0507812 L 37 0.0507812 L 37 25 L 13 25 Z M 13 0.0507812 "/>
</clipPath>
<clipPath id="bsf-gs-clip-2">
<path clip-rule="nonzero" d="M 44 10 L 50.453125 10 L 50.453125 16 L 44 16 Z M 44 10 "/>
</clipPath>
<clipPath id="bsf-gs-clip-3">
<path clip-rule="nonzero" d="M 42 7 L 50.453125 7 L 50.453125 19 L 42 19 Z M 42 7 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -25.511857 0.000256345 L -19.741711 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25601 0.000256345 C 4.609595 0.206475 1.774093 1.368435 0.00140934 2.629539 L 0.00140934 -2.629027 C 1.774093 -1.367923 4.609595 -0.205962 5.25601 0.000256345 Z M 5.25601 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 5.779862, 12.71119)"/>
<g clip-path="url(#bsf-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173817 -12.757516 L -14.173817 12.754063 L 14.173264 12.754063 L 14.173264 -12.757516 Z M -14.173817 -12.757516 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 0.000256345 C -6.642885 1.741214 -5.405575 3.402858 -3.969978 3.402858 C -2.530416 3.402858 -1.293107 1.741214 -0.00027665 0.000256345 C 1.292553 -1.740702 2.533829 -3.402345 3.969425 -3.402345 C 5.405022 -3.402345 6.642331 -1.740702 7.935161 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 7.368594 L 7.935161 7.368594 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.935714 -7.368081 L 7.935161 -7.368081 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#bsf-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.069915 -9.636482 L 9.069362 9.636995 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173264 0.000256345 L 19.94341 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 25.226835, 12.71119)"/>
<g clip-path="url(#bsf-gs-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 50.046875 12.710938 C 49.410156 12.507812 46.617188 11.363281 44.871094 10.121094 L 44.871094 15.300781 C 46.617188 14.058594 49.410156 12.914062 50.046875 12.710938 Z M 50.046875 12.710938 "/>
</g>
<g clip-path="url(#bsf-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25581 0.000256345 C 4.609395 0.206475 1.773894 1.368435 0.0012099 2.629539 L 0.0012099 -2.629027 C 1.773894 -1.367923 4.609395 -0.205962 5.25581 0.000256345 Z M 5.25581 0.000256345 " transform="matrix(0.985, 0, 0, -0.985, 44.869902, 12.71119)"/>
</g>
</svg></td><td><code>wb</code></td><td>soppressore di banda</td></tr>
</tbody>
</table>
</div>

## modulatori (diamanti)

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>am</code></td><td><code>in,out,mod</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="am-wb-glyph-0-0">
<path d="M 4 0 L 4.1875 0 L 2.328125 -5.0625 L 2.171875 -5.0625 L 0.15625 0 L 0.34375 0 L 0.453125 -0.34375 L 1 -1.6875 L 3.390625 -1.6875 L 3.890625 -0.34375 Z M 2.265625 -4.796875 L 3.34375 -1.859375 L 1.0625 -1.859375 L 2.234375 -4.796875 Z M 2.265625 -4.796875 "/>
</g>
<g id="am-wb-glyph-0-1">
<path d="M 5.4375 0 L 5.609375 0 L 5.0625 -5.0625 L 4.890625 -5.0625 L 4.59375 -4.359375 L 3.109375 -0.875 L 3.0625 -0.875 L 1.65625 -4.28125 L 1.34375 -5.0625 L 1.15625 -5.0625 L 0.609375 0 L 0.765625 0 L 0.9375 -1.546875 L 1.28125 -4.6875 L 1.3125 -4.6875 L 2.984375 -0.640625 L 3.1875 -0.640625 L 4.890625 -4.6875 L 4.9375 -4.6875 L 5.28125 -1.546875 Z M 5.4375 0 "/>
</g>
</g>
<clipPath id="am-wb-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="am-wb-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="am-wb-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="am-wb-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#am-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.081371" y="30.400714"/>
<use xlink:href="#glyph-0-1" x="27.488285" y="30.400714"/>
</g>
<g clip-path="url(#am-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#am-wb-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#am-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="am-gs-glyph-0-0">
<path d="M 4 0 L 4.1875 0 L 2.328125 -5.0625 L 2.171875 -5.0625 L 0.15625 0 L 0.34375 0 L 0.453125 -0.34375 L 1 -1.6875 L 3.390625 -1.6875 L 3.890625 -0.34375 Z M 2.265625 -4.796875 L 3.34375 -1.859375 L 1.0625 -1.859375 L 2.234375 -4.796875 Z M 2.265625 -4.796875 "/>
</g>
<g id="am-gs-glyph-0-1">
<path d="M 5.4375 0 L 5.609375 0 L 5.0625 -5.0625 L 4.890625 -5.0625 L 4.59375 -4.359375 L 3.109375 -0.875 L 3.0625 -0.875 L 1.65625 -4.28125 L 1.34375 -5.0625 L 1.15625 -5.0625 L 0.609375 0 L 0.765625 0 L 0.9375 -1.546875 L 1.28125 -4.6875 L 1.3125 -4.6875 L 2.984375 -0.640625 L 3.1875 -0.640625 L 4.890625 -4.6875 L 4.9375 -4.6875 L 5.28125 -1.546875 Z M 5.4375 0 "/>
</g>
</g>
<clipPath id="am-gs-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="am-gs-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="am-gs-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="am-gs-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#am-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.081371" y="30.400714"/>
<use xlink:href="#glyph-0-1" x="27.488285" y="30.400714"/>
</g>
<g clip-path="url(#am-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#am-gs-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#am-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td><code>wb</code></td><td>d'ampiezza</td></tr>
<tr><td><code>rm</code></td><td><code>in,out,mod</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="rm-wb-glyph-0-0">
<path d="M 2.265625 -2.125 C 2.640625 -2.234375 2.9375 -2.421875 3.140625 -2.703125 C 3.328125 -2.96875 3.4375 -3.296875 3.4375 -3.6875 C 3.4375 -4.140625 3.3125 -4.484375 3.0625 -4.71875 C 2.8125 -4.96875 2.453125 -5.078125 2 -5.078125 L 0.875 -5.0625 L 0.875 0 L 1.03125 0 L 1.03125 -2.09375 L 2.09375 -2.09375 C 2.328125 -1.71875 2.546875 -1.359375 2.796875 -1.015625 C 3.03125 -0.65625 3.296875 -0.3125 3.5625 0.046875 L 3.609375 0.0625 C 3.640625 0.046875 3.671875 0.03125 3.703125 -0.015625 L 3.703125 -0.046875 C 3.4375 -0.375 3.1875 -0.71875 2.953125 -1.0625 C 2.71875 -1.40625 2.484375 -1.75 2.265625 -2.125 Z M 2.15625 -2.25 L 1.03125 -2.25 L 1.03125 -4.921875 L 2.046875 -4.921875 C 2.453125 -4.90625 2.75 -4.78125 2.953125 -4.578125 C 3.171875 -4.359375 3.28125 -4.078125 3.28125 -3.6875 C 3.28125 -3.3125 3.1875 -3 2.984375 -2.765625 C 2.796875 -2.5 2.515625 -2.34375 2.15625 -2.25 Z M 2.15625 -2.25 "/>
</g>
<g id="rm-wb-glyph-0-1">
<path d="M 5.4375 0 L 5.609375 0 L 5.0625 -5.0625 L 4.890625 -5.0625 L 4.59375 -4.359375 L 3.109375 -0.875 L 3.0625 -0.875 L 1.65625 -4.28125 L 1.34375 -5.0625 L 1.15625 -5.0625 L 0.609375 0 L 0.765625 0 L 0.9375 -1.546875 L 1.28125 -4.6875 L 1.3125 -4.6875 L 2.984375 -0.640625 L 3.1875 -0.640625 L 4.890625 -4.6875 L 4.9375 -4.6875 L 5.28125 -1.546875 Z M 5.4375 0 "/>
</g>
</g>
<clipPath id="rm-wb-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="rm-wb-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="rm-wb-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="rm-wb-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#rm-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.224095" y="30.380752"/>
<use xlink:href="#glyph-0-1" x="27.344639" y="30.380752"/>
</g>
<g clip-path="url(#rm-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#rm-wb-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#rm-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="rm-gs-glyph-0-0">
<path d="M 2.265625 -2.125 C 2.640625 -2.234375 2.9375 -2.421875 3.140625 -2.703125 C 3.328125 -2.96875 3.4375 -3.296875 3.4375 -3.6875 C 3.4375 -4.140625 3.3125 -4.484375 3.0625 -4.71875 C 2.8125 -4.96875 2.453125 -5.078125 2 -5.078125 L 0.875 -5.0625 L 0.875 0 L 1.03125 0 L 1.03125 -2.09375 L 2.09375 -2.09375 C 2.328125 -1.71875 2.546875 -1.359375 2.796875 -1.015625 C 3.03125 -0.65625 3.296875 -0.3125 3.5625 0.046875 L 3.609375 0.0625 C 3.640625 0.046875 3.671875 0.03125 3.703125 -0.015625 L 3.703125 -0.046875 C 3.4375 -0.375 3.1875 -0.71875 2.953125 -1.0625 C 2.71875 -1.40625 2.484375 -1.75 2.265625 -2.125 Z M 2.15625 -2.25 L 1.03125 -2.25 L 1.03125 -4.921875 L 2.046875 -4.921875 C 2.453125 -4.90625 2.75 -4.78125 2.953125 -4.578125 C 3.171875 -4.359375 3.28125 -4.078125 3.28125 -3.6875 C 3.28125 -3.3125 3.1875 -3 2.984375 -2.765625 C 2.796875 -2.5 2.515625 -2.34375 2.15625 -2.25 Z M 2.15625 -2.25 "/>
</g>
<g id="rm-gs-glyph-0-1">
<path d="M 5.4375 0 L 5.609375 0 L 5.0625 -5.0625 L 4.890625 -5.0625 L 4.59375 -4.359375 L 3.109375 -0.875 L 3.0625 -0.875 L 1.65625 -4.28125 L 1.34375 -5.0625 L 1.15625 -5.0625 L 0.609375 0 L 0.765625 0 L 0.9375 -1.546875 L 1.28125 -4.6875 L 1.3125 -4.6875 L 2.984375 -0.640625 L 3.1875 -0.640625 L 4.890625 -4.6875 L 4.9375 -4.6875 L 5.28125 -1.546875 Z M 5.4375 0 "/>
</g>
</g>
<clipPath id="rm-gs-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="rm-gs-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="rm-gs-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="rm-gs-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#rm-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.224095" y="30.380752"/>
<use xlink:href="#glyph-0-1" x="27.344639" y="30.380752"/>
</g>
<g clip-path="url(#rm-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#rm-gs-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#rm-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td><code>wb</code></td><td>ad anello</td></tr>
<tr><td><code>es</code></td><td><code>in,out,mod</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="es-wb-glyph-0-0">
<path d="M 3.34375 0 L 3.375 -0.125 L 3.359375 -0.15625 L 1.03125 -0.15625 L 1.03125 -2.546875 L 2.921875 -2.546875 L 2.953125 -2.671875 L 2.921875 -2.703125 L 1.03125 -2.703125 L 1.03125 -4.90625 L 3.3125 -4.90625 L 3.34375 -5.03125 L 3.328125 -5.0625 L 0.875 -5.0625 L 0.875 0 Z M 3.34375 0 "/>
</g>
<g id="es-wb-glyph-0-1">
<path d="M 1.953125 -5.09375 C 1.734375 -5.09375 1.546875 -5.046875 1.375 -4.984375 C 1.203125 -4.921875 1.046875 -4.828125 0.921875 -4.71875 C 0.796875 -4.609375 0.6875 -4.46875 0.625 -4.3125 C 0.5625 -4.171875 0.53125 -4.015625 0.53125 -3.84375 C 0.53125 -3.609375 0.578125 -3.40625 0.703125 -3.25 C 0.8125 -3.078125 0.96875 -2.9375 1.15625 -2.828125 C 1.328125 -2.71875 1.53125 -2.609375 1.734375 -2.515625 C 1.9375 -2.421875 2.125 -2.328125 2.3125 -2.21875 C 2.484375 -2.09375 2.640625 -1.96875 2.765625 -1.828125 C 2.875 -1.6875 2.9375 -1.5 2.9375 -1.28125 C 2.9375 -1.140625 2.90625 -1 2.84375 -0.859375 C 2.78125 -0.71875 2.703125 -0.609375 2.578125 -0.5 C 2.46875 -0.375 2.328125 -0.28125 2.15625 -0.21875 C 2 -0.15625 1.828125 -0.125 1.609375 -0.125 C 1.421875 -0.125 1.234375 -0.15625 1.03125 -0.21875 C 0.8125 -0.28125 0.625 -0.375 0.46875 -0.515625 L 0.421875 -0.5 L 0.40625 -0.34375 C 0.578125 -0.21875 0.765625 -0.125 1 -0.0625 C 1.203125 0 1.421875 0.03125 1.625 0.03125 C 1.84375 0.03125 2.03125 0 2.21875 -0.078125 C 2.390625 -0.140625 2.546875 -0.234375 2.6875 -0.359375 C 2.8125 -0.484375 2.921875 -0.625 2.984375 -0.78125 C 3.0625 -0.9375 3.109375 -1.109375 3.109375 -1.28125 C 3.109375 -1.53125 3.03125 -1.734375 2.921875 -1.90625 C 2.796875 -2.0625 2.640625 -2.203125 2.46875 -2.328125 C 2.296875 -2.4375 2.09375 -2.53125 1.890625 -2.625 C 1.6875 -2.734375 1.484375 -2.828125 1.3125 -2.9375 C 1.125 -3.03125 0.984375 -3.15625 0.859375 -3.296875 C 0.734375 -3.4375 0.6875 -3.609375 0.6875 -3.8125 C 0.6875 -3.9375 0.703125 -4.078125 0.765625 -4.203125 C 0.8125 -4.328125 0.90625 -4.453125 1.015625 -4.5625 C 1.109375 -4.671875 1.234375 -4.765625 1.40625 -4.828125 C 1.5625 -4.890625 1.734375 -4.9375 1.9375 -4.9375 C 2.0625 -4.9375 2.203125 -4.90625 2.359375 -4.875 C 2.515625 -4.84375 2.6875 -4.78125 2.84375 -4.703125 L 2.890625 -4.71875 L 2.921875 -4.859375 C 2.734375 -4.953125 2.5625 -5.015625 2.390625 -5.046875 C 2.21875 -5.078125 2.078125 -5.09375 1.953125 -5.09375 Z M 1.953125 -5.09375 "/>
</g>
</g>
<clipPath id="es-wb-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="es-wb-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="es-wb-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="es-wb-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#es-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="24.815019" y="30.396722"/>
<use xlink:href="#glyph-0-1" x="28.426461" y="30.396722"/>
</g>
<g clip-path="url(#es-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#es-wb-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#es-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="es-gs-glyph-0-0">
<path d="M 3.34375 0 L 3.375 -0.125 L 3.359375 -0.15625 L 1.03125 -0.15625 L 1.03125 -2.546875 L 2.921875 -2.546875 L 2.953125 -2.671875 L 2.921875 -2.703125 L 1.03125 -2.703125 L 1.03125 -4.90625 L 3.3125 -4.90625 L 3.34375 -5.03125 L 3.328125 -5.0625 L 0.875 -5.0625 L 0.875 0 Z M 3.34375 0 "/>
</g>
<g id="es-gs-glyph-0-1">
<path d="M 1.953125 -5.09375 C 1.734375 -5.09375 1.546875 -5.046875 1.375 -4.984375 C 1.203125 -4.921875 1.046875 -4.828125 0.921875 -4.71875 C 0.796875 -4.609375 0.6875 -4.46875 0.625 -4.3125 C 0.5625 -4.171875 0.53125 -4.015625 0.53125 -3.84375 C 0.53125 -3.609375 0.578125 -3.40625 0.703125 -3.25 C 0.8125 -3.078125 0.96875 -2.9375 1.15625 -2.828125 C 1.328125 -2.71875 1.53125 -2.609375 1.734375 -2.515625 C 1.9375 -2.421875 2.125 -2.328125 2.3125 -2.21875 C 2.484375 -2.09375 2.640625 -1.96875 2.765625 -1.828125 C 2.875 -1.6875 2.9375 -1.5 2.9375 -1.28125 C 2.9375 -1.140625 2.90625 -1 2.84375 -0.859375 C 2.78125 -0.71875 2.703125 -0.609375 2.578125 -0.5 C 2.46875 -0.375 2.328125 -0.28125 2.15625 -0.21875 C 2 -0.15625 1.828125 -0.125 1.609375 -0.125 C 1.421875 -0.125 1.234375 -0.15625 1.03125 -0.21875 C 0.8125 -0.28125 0.625 -0.375 0.46875 -0.515625 L 0.421875 -0.5 L 0.40625 -0.34375 C 0.578125 -0.21875 0.765625 -0.125 1 -0.0625 C 1.203125 0 1.421875 0.03125 1.625 0.03125 C 1.84375 0.03125 2.03125 0 2.21875 -0.078125 C 2.390625 -0.140625 2.546875 -0.234375 2.6875 -0.359375 C 2.8125 -0.484375 2.921875 -0.625 2.984375 -0.78125 C 3.0625 -0.9375 3.109375 -1.109375 3.109375 -1.28125 C 3.109375 -1.53125 3.03125 -1.734375 2.921875 -1.90625 C 2.796875 -2.0625 2.640625 -2.203125 2.46875 -2.328125 C 2.296875 -2.4375 2.09375 -2.53125 1.890625 -2.625 C 1.6875 -2.734375 1.484375 -2.828125 1.3125 -2.9375 C 1.125 -3.03125 0.984375 -3.15625 0.859375 -3.296875 C 0.734375 -3.4375 0.6875 -3.609375 0.6875 -3.8125 C 0.6875 -3.9375 0.703125 -4.078125 0.765625 -4.203125 C 0.8125 -4.328125 0.90625 -4.453125 1.015625 -4.5625 C 1.109375 -4.671875 1.234375 -4.765625 1.40625 -4.828125 C 1.5625 -4.890625 1.734375 -4.9375 1.9375 -4.9375 C 2.0625 -4.9375 2.203125 -4.90625 2.359375 -4.875 C 2.515625 -4.84375 2.6875 -4.78125 2.84375 -4.703125 L 2.890625 -4.71875 L 2.921875 -4.859375 C 2.734375 -4.953125 2.5625 -5.015625 2.390625 -5.046875 C 2.21875 -5.078125 2.078125 -5.09375 1.953125 -5.09375 Z M 1.953125 -5.09375 "/>
</g>
</g>
<clipPath id="es-gs-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="es-gs-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="es-gs-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="es-gs-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#es-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="24.815019" y="30.396722"/>
<use xlink:href="#glyph-0-1" x="28.426461" y="30.396722"/>
</g>
<g clip-path="url(#es-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#es-gs-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#es-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td><code>wb</code></td><td>formatore d'inviluppo</td></tr>
<tr><td><code>pm</code></td><td><code>in,out,mod</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="pm-wb-glyph-0-0">
<path d="M 2 -5.078125 L 0.875 -5.0625 L 0.875 0 L 1.03125 0 L 1.03125 -1.984375 L 1.734375 -1.984375 C 2.28125 -1.984375 2.703125 -2.125 3 -2.40625 C 3.28125 -2.703125 3.4375 -3.109375 3.4375 -3.65625 C 3.4375 -4.125 3.3125 -4.46875 3.0625 -4.71875 C 2.8125 -4.953125 2.453125 -5.078125 2 -5.078125 Z M 1.984375 -2.140625 L 1.03125 -2.140625 L 1.03125 -4.921875 L 2.046875 -4.921875 C 2.453125 -4.90625 2.75 -4.78125 2.953125 -4.578125 C 3.171875 -4.34375 3.28125 -4.046875 3.28125 -3.65625 C 3.28125 -3.21875 3.171875 -2.859375 2.9375 -2.59375 C 2.71875 -2.328125 2.390625 -2.171875 1.984375 -2.140625 Z M 1.984375 -2.140625 "/>
</g>
<g id="pm-wb-glyph-0-1">
<path d="M 5.4375 0 L 5.609375 0 L 5.0625 -5.0625 L 4.890625 -5.0625 L 4.59375 -4.359375 L 3.109375 -0.875 L 3.0625 -0.875 L 1.65625 -4.28125 L 1.34375 -5.0625 L 1.15625 -5.0625 L 0.609375 0 L 0.765625 0 L 0.9375 -1.546875 L 1.28125 -4.6875 L 1.3125 -4.6875 L 2.984375 -0.640625 L 3.1875 -0.640625 L 4.890625 -4.6875 L 4.9375 -4.6875 L 5.28125 -1.546875 Z M 5.4375 0 "/>
</g>
</g>
<clipPath id="pm-wb-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="pm-wb-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="pm-wb-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="pm-wb-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#pm-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.359832" y="30.4077"/>
<use xlink:href="#glyph-0-1" x="27.209917" y="30.4077"/>
</g>
<g clip-path="url(#pm-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#pm-wb-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#pm-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="pm-gs-glyph-0-0">
<path d="M 2 -5.078125 L 0.875 -5.0625 L 0.875 0 L 1.03125 0 L 1.03125 -1.984375 L 1.734375 -1.984375 C 2.28125 -1.984375 2.703125 -2.125 3 -2.40625 C 3.28125 -2.703125 3.4375 -3.109375 3.4375 -3.65625 C 3.4375 -4.125 3.3125 -4.46875 3.0625 -4.71875 C 2.8125 -4.953125 2.453125 -5.078125 2 -5.078125 Z M 1.984375 -2.140625 L 1.03125 -2.140625 L 1.03125 -4.921875 L 2.046875 -4.921875 C 2.453125 -4.90625 2.75 -4.78125 2.953125 -4.578125 C 3.171875 -4.34375 3.28125 -4.046875 3.28125 -3.65625 C 3.28125 -3.21875 3.171875 -2.859375 2.9375 -2.59375 C 2.71875 -2.328125 2.390625 -2.171875 1.984375 -2.140625 Z M 1.984375 -2.140625 "/>
</g>
<g id="pm-gs-glyph-0-1">
<path d="M 5.4375 0 L 5.609375 0 L 5.0625 -5.0625 L 4.890625 -5.0625 L 4.59375 -4.359375 L 3.109375 -0.875 L 3.0625 -0.875 L 1.65625 -4.28125 L 1.34375 -5.0625 L 1.15625 -5.0625 L 0.609375 0 L 0.765625 0 L 0.9375 -1.546875 L 1.28125 -4.6875 L 1.3125 -4.6875 L 2.984375 -0.640625 L 3.1875 -0.640625 L 4.890625 -4.6875 L 4.9375 -4.6875 L 5.28125 -1.546875 Z M 5.4375 0 "/>
</g>
</g>
<clipPath id="pm-gs-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="pm-gs-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="pm-gs-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="pm-gs-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#pm-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.359832" y="30.4077"/>
<use xlink:href="#glyph-0-1" x="27.209917" y="30.4077"/>
</g>
<g clip-path="url(#pm-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#pm-gs-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#pm-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td><code>wb</code></td><td>d'impulsi</td></tr>
<tr><td><code>fm</code></td><td><code>in,out,mod</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="fm-wb-glyph-0-0">
<path d="M 1.03125 -2.625 L 1.03125 -4.90625 L 3.234375 -4.90625 L 3.265625 -5.03125 L 3.234375 -5.0625 L 0.875 -5.0625 L 0.875 0 L 1.03125 0 L 1.03125 -2.46875 L 2.828125 -2.46875 L 2.859375 -2.59375 L 2.84375 -2.625 Z M 1.03125 -2.625 "/>
</g>
<g id="fm-wb-glyph-0-1">
<path d="M 5.4375 0 L 5.609375 0 L 5.0625 -5.0625 L 4.890625 -5.0625 L 4.59375 -4.359375 L 3.109375 -0.875 L 3.0625 -0.875 L 1.65625 -4.28125 L 1.34375 -5.0625 L 1.15625 -5.0625 L 0.609375 0 L 0.765625 0 L 0.9375 -1.546875 L 1.28125 -4.6875 L 1.3125 -4.6875 L 2.984375 -0.640625 L 3.1875 -0.640625 L 4.890625 -4.6875 L 4.9375 -4.6875 L 5.28125 -1.546875 Z M 5.4375 0 "/>
</g>
</g>
<clipPath id="fm-wb-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="fm-wb-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="fm-wb-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="fm-wb-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#fm-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.650271" y="30.400714"/>
<use xlink:href="#glyph-0-1" x="26.91966" y="30.400714"/>
</g>
<g clip-path="url(#fm-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#fm-wb-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#fm-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="44.99pt" viewBox="0 0 56.89 44.99">
<defs>
<g>
<g id="fm-gs-glyph-0-0">
<path d="M 1.03125 -2.625 L 1.03125 -4.90625 L 3.234375 -4.90625 L 3.265625 -5.03125 L 3.234375 -5.0625 L 0.875 -5.0625 L 0.875 0 L 1.03125 0 L 1.03125 -2.46875 L 2.828125 -2.46875 L 2.859375 -2.59375 L 2.84375 -2.625 Z M 1.03125 -2.625 "/>
</g>
<g id="fm-gs-glyph-0-1">
<path d="M 5.4375 0 L 5.609375 0 L 5.0625 -5.0625 L 4.890625 -5.0625 L 4.59375 -4.359375 L 3.109375 -0.875 L 3.0625 -0.875 L 1.65625 -4.28125 L 1.34375 -5.0625 L 1.15625 -5.0625 L 0.609375 0 L 0.765625 0 L 0.9375 -1.546875 L 1.28125 -4.6875 L 1.3125 -4.6875 L 2.984375 -0.640625 L 3.1875 -0.640625 L 4.890625 -4.6875 L 4.9375 -4.6875 L 5.28125 -1.546875 Z M 5.4375 0 "/>
</g>
</g>
<clipPath id="fm-gs-clip-0">
<path clip-rule="nonzero" d="M 8 8 L 49 8 L 49 44.941406 L 8 44.941406 Z M 8 8 "/>
</clipPath>
<clipPath id="fm-gs-clip-1">
<path clip-rule="nonzero" d="M 28 0.0390625 L 29 0.0390625 L 29 5 L 28 5 Z M 28 0.0390625 "/>
</clipPath>
<clipPath id="fm-gs-clip-2">
<path clip-rule="nonzero" d="M 51 25 L 56.78125 25 L 56.78125 31 L 51 31 Z M 51 25 "/>
</clipPath>
<clipPath id="fm-gs-clip-3">
<path clip-rule="nonzero" d="M 48 22 L 56.78125 22 L 56.78125 34 L 48 34 Z M 48 22 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348155 -0.000574925 L -22.579209 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254998 -0.000574925 C 4.609221 0.206857 1.771713 1.365342 -0.00123937 2.629501 L -0.00123937 -2.630651 C 1.771713 -1.366492 4.609221 -0.204093 5.254998 -0.000574925 Z M 5.254998 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 5.856706, 27.866614)"/>
<g clip-path="url(#fm-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 17.008813 L 17.008907 -0.000574925 L -0.000480137 -17.009963 L -17.009868 -0.000574925 Z M -0.000480137 17.008813 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="23.650271" y="30.400714"/>
<use xlink:href="#glyph-0-1" x="26.91966" y="30.400714"/>
</g>
<g clip-path="url(#fm-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000480137 27.779598 L -0.000480137 23.145656 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255172 -0.000480137 C 4.609394 0.206951 1.771887 1.365437 -0.00106574 2.629595 L -0.00106574 -2.630556 C 1.771887 -1.366397 4.609394 -0.203998 5.255172 -0.000480137 Z M 5.255172 -0.000480137 " transform="matrix(0, 0.99807, 0.99807, 0, 28.391104, 4.766689)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.008907 -0.000574925 L 22.777853 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 28.391104, 27.866614)"/>
<g clip-path="url(#fm-gs-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 56.367188 27.867188 C 55.726562 27.660156 52.894531 26.503906 51.125 25.242188 L 51.125 30.492188 C 52.894531 29.230469 55.726562 28.070312 56.367188 27.867188 Z M 56.367188 27.867188 "/>
</g>
<g clip-path="url(#fm-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.253107 -0.000574925 C 4.611243 0.206857 1.773736 1.365342 0.00078305 2.629501 L 0.00078305 -2.630651 C 1.773736 -1.366492 4.611243 -0.204093 5.253107 -0.000574925 Z M 5.253107 -0.000574925 " transform="matrix(0.99807, 0, 0, -0.99807, 51.124218, 27.866614)"/>
</g>
</svg></td><td><code>wb</code></td><td>di frequenza</td></tr>
</tbody>
</table>
</div>

## registrazione / lettura

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>tapeplay</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.55pt" height="22.88pt" viewBox="0 0 45.55 22.88">
<defs>
<clipPath id="tapeplay-wb-clip-0">
<path clip-rule="nonzero" d="M 0 0.0507812 L 34 0.0507812 L 34 22.707031 L 0 22.707031 Z M 0 0.0507812 "/>
</clipPath>
<clipPath id="tapeplay-wb-clip-1">
<path clip-rule="nonzero" d="M 36 5 L 45.105469 5 L 45.105469 17 L 36 17 Z M 36 5 "/>
</clipPath>
</defs>
<g clip-path="url(#tapeplay-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009379 -11.33772 L -17.009379 11.337225 L 17.006984 11.337225 L 17.006984 -11.33772 Z M -17.009379 -11.33772 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.103849 4.252291 C -5.103849 6.130035 -6.626558 7.652744 -8.504302 7.652744 C -10.382046 7.652744 -11.904755 6.130035 -11.904755 4.252291 C -11.904755 2.374547 -10.382046 0.851838 -8.504302 0.851838 C -6.626558 0.851838 -5.103849 2.374547 -5.103849 4.252291 Z M -5.103849 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 11.906304 4.252291 C 11.906304 6.130035 10.383596 7.652744 8.505852 7.652744 C 6.624162 7.652744 5.101454 6.130035 5.101454 4.252291 C 5.101454 2.374547 6.624162 0.851838 8.505852 0.851838 C 10.383596 0.851838 11.906304 2.374547 11.906304 4.252291 Z M 11.906304 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -8.504302 4.252291 C -2.835566 -8.505324 2.83317 -8.505324 8.505852 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.006984 -0.00024753 L 22.778286 -0.00024753 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 44.699219 11.382812 C 44.058594 11.179688 41.25 10.027344 39.496094 8.777344 L 39.496094 13.988281 C 41.25 12.734375 44.058594 11.585938 44.699219 11.382812 Z M 44.699219 11.382812 "/>
<g clip-path="url(#tapeplay-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255744 -0.00024753 C 4.60879 0.204884 1.772449 1.368612 0.00121568 2.630961 L 0.00121568 -2.631456 C 1.772449 -1.365162 4.60879 -0.205379 5.255744 -0.00024753 Z M 5.255744 -0.00024753 " transform="matrix(0.990217, 0, 0, -0.990217, 39.49489, 11.382567)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.55pt" height="22.88pt" viewBox="0 0 45.55 22.88">
<defs>
<clipPath id="tapeplay-gs-clip-0">
<path clip-rule="nonzero" d="M 0 0.0507812 L 34 0.0507812 L 34 22.707031 L 0 22.707031 Z M 0 0.0507812 "/>
</clipPath>
<clipPath id="tapeplay-gs-clip-1">
<path clip-rule="nonzero" d="M 36 5 L 45.105469 5 L 45.105469 17 L 36 17 Z M 36 5 "/>
</clipPath>
</defs>
<g clip-path="url(#tapeplay-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009379 -11.33772 L -17.009379 11.337225 L 17.006984 11.337225 L 17.006984 -11.33772 Z M -17.009379 -11.33772 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.103849 4.252291 C -5.103849 6.130035 -6.626558 7.652744 -8.504302 7.652744 C -10.382046 7.652744 -11.904755 6.130035 -11.904755 4.252291 C -11.904755 2.374547 -10.382046 0.851838 -8.504302 0.851838 C -6.626558 0.851838 -5.103849 2.374547 -5.103849 4.252291 Z M -5.103849 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 11.906304 4.252291 C 11.906304 6.130035 10.383596 7.652744 8.505852 7.652744 C 6.624162 7.652744 5.101454 6.130035 5.101454 4.252291 C 5.101454 2.374547 6.624162 0.851838 8.505852 0.851838 C 10.383596 0.851838 11.906304 2.374547 11.906304 4.252291 Z M 11.906304 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -8.504302 4.252291 C -2.835566 -8.505324 2.83317 -8.505324 8.505852 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.006984 -0.00024753 L 22.778286 -0.00024753 " transform="matrix(0.990217, 0, 0, -0.990217, 16.940639, 11.382567)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 44.699219 11.382812 C 44.058594 11.179688 41.25 10.027344 39.496094 8.777344 L 39.496094 13.988281 C 41.25 12.734375 44.058594 11.585938 44.699219 11.382812 Z M 44.699219 11.382812 "/>
<g clip-path="url(#tapeplay-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255744 -0.00024753 C 4.60879 0.204884 1.772449 1.368612 0.00121568 2.630961 L 0.00121568 -2.631456 C 1.772449 -1.365162 4.60879 -0.205379 5.255744 -0.00024753 Z M 5.255744 -0.00024753 " transform="matrix(0.990217, 0, 0, -0.990217, 39.49489, 11.382567)"/>
</g>
</svg></td><td><code>wb</code></td><td>magnetofono in riproduzione</td></tr>
<tr><td><code>taperec</code></td><td><code>in</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.55pt" height="22.88pt" viewBox="0 0 45.55 22.88">
<defs>
<clipPath id="taperec-wb-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 45.105469 0.0507812 L 45.105469 22.707031 L 11 22.707031 Z M 11 0.0507812 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.347379 -0.00024753 L -22.576077 -0.00024753 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256421 -0.00024753 C 4.609467 0.204884 1.773127 1.368612 0.00189316 2.630961 L 0.00189316 -2.631456 C 1.773127 -1.365162 4.609467 -0.205379 5.256421 -0.00024753 Z M 5.256421 -0.00024753 " transform="matrix(0.990217, 0, 0, -0.990217, 5.810625, 11.382567)"/>
<g clip-path="url(#taperec-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009906 -11.33772 L -17.009906 11.337225 L 17.006456 11.337225 L 17.006456 -11.33772 Z M -17.009906 -11.33772 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.104377 4.252291 C -5.104377 6.130035 -6.627085 7.652744 -8.50483 7.652744 C -10.382574 7.652744 -11.905282 6.130035 -11.905282 4.252291 C -11.905282 2.374547 -10.382574 0.851838 -8.50483 0.851838 C -6.627085 0.851838 -5.104377 2.374547 -5.104377 4.252291 Z M -5.104377 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 11.905777 4.252291 C 11.905777 6.130035 10.383068 7.652744 8.505324 7.652744 C 6.623635 7.652744 5.100926 6.130035 5.100926 4.252291 C 5.100926 2.374547 6.623635 0.851838 8.505324 0.851838 C 10.383068 0.851838 11.905777 2.374547 11.905777 4.252291 Z M 11.905777 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -8.50483 4.252291 C -2.836093 -8.505324 2.836588 -8.505324 8.505324 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.55pt" height="22.88pt" viewBox="0 0 45.55 22.88">
<defs>
<clipPath id="taperec-gs-clip-0">
<path clip-rule="nonzero" d="M 11 0.0507812 L 45.105469 0.0507812 L 45.105469 22.707031 L 11 22.707031 Z M 11 0.0507812 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.347379 -0.00024753 L -22.576077 -0.00024753 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.256421 -0.00024753 C 4.609467 0.204884 1.773127 1.368612 0.00189316 2.630961 L 0.00189316 -2.631456 C 1.773127 -1.365162 4.609467 -0.205379 5.256421 -0.00024753 Z M 5.256421 -0.00024753 " transform="matrix(0.990217, 0, 0, -0.990217, 5.810625, 11.382567)"/>
<g clip-path="url(#taperec-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009906 -11.33772 L -17.009906 11.337225 L 17.006456 11.337225 L 17.006456 -11.33772 Z M -17.009906 -11.33772 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.104377 4.252291 C -5.104377 6.130035 -6.627085 7.652744 -8.50483 7.652744 C -10.382574 7.652744 -11.905282 6.130035 -11.905282 4.252291 C -11.905282 2.374547 -10.382574 0.851838 -8.50483 0.851838 C -6.627085 0.851838 -5.104377 2.374547 -5.104377 4.252291 Z M -5.104377 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 11.905777 4.252291 C 11.905777 6.130035 10.383068 7.652744 8.505324 7.652744 C 6.623635 7.652744 5.100926 6.130035 5.100926 4.252291 C 5.100926 2.374547 6.623635 0.851838 8.505324 0.851838 C 10.383068 0.851838 11.905777 2.374547 11.905777 4.252291 Z M 11.905777 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -8.50483 4.252291 C -2.836093 -8.505324 2.836588 -8.505324 8.505324 4.252291 " transform="matrix(0.990217, 0, 0, -0.990217, 28.167724, 11.382567)"/>
</svg></td><td><code>wb</code></td><td>magnetofono in registrazione</td></tr>
<tr><td><code>headplay</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.88pt" height="33.65pt" viewBox="0 0 22.88 33.65">
<defs>
<clipPath id="headplay-wb-clip-0">
<path clip-rule="nonzero" d="M 0.0585938 10 L 22.703125 10 L 22.703125 33.304688 L 0.0585938 33.304688 Z M 0.0585938 10 "/>
</clipPath>
</defs>
<g clip-path="url(#headplay-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.339114 -11.340424 L -11.339114 11.338347 L 11.339656 11.338347 L 11.339656 -11.340424 Z M -11.339114 -11.340424 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.103045 -4.251828 C -5.103045 5.102277 5.103586 5.102277 5.103586 -4.251828 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 3.685347 L 0.000270802 -2.266548 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 11.338347 L 0.000270802 16.540334 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.252901 -0.000270802 C 4.609559 0.204967 1.771753 1.36535 -0.000396048 2.632298 L -0.000396048 -2.63284 C 1.771753 -1.365891 4.609559 -0.205509 5.252901 -0.000270802 Z M 5.252901 -0.000270802 " transform="matrix(0, -0.989706, -0.989706, 0, 11.378638, 5.612889)"/>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.88pt" height="33.65pt" viewBox="0 0 22.88 33.65">
<defs>
<clipPath id="headplay-gs-clip-0">
<path clip-rule="nonzero" d="M 0.0585938 10 L 22.703125 10 L 22.703125 33.304688 L 0.0585938 33.304688 Z M 0.0585938 10 "/>
</clipPath>
</defs>
<g clip-path="url(#headplay-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.339114 -11.340424 L -11.339114 11.338347 L 11.339656 11.338347 L 11.339656 -11.340424 Z M -11.339114 -11.340424 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.103045 -4.251828 C -5.103045 5.102277 5.103586 5.102277 5.103586 -4.251828 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 3.685347 L 0.000270802 -2.266548 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 11.338347 L 0.000270802 16.540334 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.252901 -0.000270802 C 4.609559 0.204967 1.771753 1.36535 -0.000396048 2.632298 L -0.000396048 -2.63284 C 1.771753 -1.365891 4.609559 -0.205509 5.252901 -0.000270802 Z M 5.252901 -0.000270802 " transform="matrix(0, -0.989706, -0.989706, 0, 11.378638, 5.612889)"/>
</svg></td><td><code>wb</code></td><td>testina di riproduzione</td></tr>
<tr><td><code>headrec</code></td><td><code>in</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.88pt" height="33.65pt" viewBox="0 0 22.88 33.65">
<defs>
<clipPath id="headrec-wb-clip-0">
<path clip-rule="nonzero" d="M 0.0585938 10 L 22.703125 10 L 22.703125 33.304688 L 0.0585938 33.304688 Z M 0.0585938 10 "/>
</clipPath>
</defs>
<g clip-path="url(#headrec-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.339114 -11.340424 L -11.339114 11.338347 L 11.339656 11.338347 L 11.339656 -11.340424 Z M -11.339114 -11.340424 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.103045 -4.251828 C -5.103045 5.102277 5.103586 5.102277 5.103586 -4.251828 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 3.685347 L 0.000270802 -2.266548 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 22.109381 L 0.000270802 17.475744 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.252882 0.000270802 C 4.609541 0.205509 1.771735 1.365891 -0.000414428 2.63284 L -0.000414428 -2.632298 C 1.771735 -1.36535 4.609541 -0.204967 5.252882 0.000270802 Z M 5.252882 0.000270802 " transform="matrix(0, 0.989706, 0.989706, 0, 11.378638, 4.68791)"/>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.88pt" height="33.65pt" viewBox="0 0 22.88 33.65">
<defs>
<clipPath id="headrec-gs-clip-0">
<path clip-rule="nonzero" d="M 0.0585938 10 L 22.703125 10 L 22.703125 33.304688 L 0.0585938 33.304688 Z M 0.0585938 10 "/>
</clipPath>
</defs>
<g clip-path="url(#headrec-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.339114 -11.340424 L -11.339114 11.338347 L 11.339656 11.338347 L 11.339656 -11.340424 Z M -11.339114 -11.340424 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.103045 -4.251828 C -5.103045 5.102277 5.103586 5.102277 5.103586 -4.251828 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 3.685347 L 0.000270802 -2.266548 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 22.109381 L 0.000270802 17.475744 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.252882 0.000270802 C 4.609541 0.205509 1.771735 1.365891 -0.000414428 2.63284 L -0.000414428 -2.632298 C 1.771735 -1.36535 4.609541 -0.204967 5.252882 0.000270802 Z M 5.252882 0.000270802 " transform="matrix(0, 0.989706, 0.989706, 0, 11.378638, 4.68791)"/>
</svg></td><td><code>wb</code></td><td>testina di registrazione</td></tr>
<tr><td><code>headerase</code></td><td><code>in</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.88pt" height="33.65pt" viewBox="0 0 22.88 33.65">
<defs>
<clipPath id="headerase-wb-clip-0">
<path clip-rule="nonzero" d="M 0.0585938 10 L 22.703125 10 L 22.703125 33.304688 L 0.0585938 33.304688 Z M 0.0585938 10 "/>
</clipPath>
</defs>
<g clip-path="url(#headerase-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.339114 -11.340424 L -11.339114 11.338347 L 11.339656 11.338347 L 11.339656 -11.340424 Z M -11.339114 -11.340424 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.103045 -4.251828 C -5.103045 5.102277 5.103586 5.102277 5.103586 -4.251828 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -2.833589 2.836768 L 2.83413 -2.834898 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -2.833589 -2.834898 L 2.83413 2.836768 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 22.109381 L 0.000270802 17.475744 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.252882 0.000270802 C 4.609541 0.205509 1.771735 1.365891 -0.000414428 2.63284 L -0.000414428 -2.632298 C 1.771735 -1.36535 4.609541 -0.204967 5.252882 0.000270802 Z M 5.252882 0.000270802 " transform="matrix(0, 0.989706, 0.989706, 0, 11.378638, 4.68791)"/>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.88pt" height="33.65pt" viewBox="0 0 22.88 33.65">
<defs>
<clipPath id="headerase-gs-clip-0">
<path clip-rule="nonzero" d="M 0.0585938 10 L 22.703125 10 L 22.703125 33.304688 L 0.0585938 33.304688 Z M 0.0585938 10 "/>
</clipPath>
</defs>
<g clip-path="url(#headerase-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -11.339114 -11.340424 L -11.339114 11.338347 L 11.339656 11.338347 L 11.339656 -11.340424 Z M -11.339114 -11.340424 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.103045 -4.251828 C -5.103045 5.102277 5.103586 5.102277 5.103586 -4.251828 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -2.833589 2.836768 L 2.83413 -2.834898 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -2.833589 -2.834898 L 2.83413 2.836768 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000270802 22.109381 L 0.000270802 17.475744 " transform="matrix(0.989706, 0, 0, -0.989706, 11.378638, 21.983347)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.252882 0.000270802 C 4.609541 0.205509 1.771735 1.365891 -0.000414428 2.63284 L -0.000414428 -2.632298 C 1.771735 -1.36535 4.609541 -0.204967 5.252882 0.000270802 Z M 5.252882 0.000270802 " transform="matrix(0, 0.989706, 0.989706, 0, 11.378638, 4.68791)"/>
</svg></td><td><code>wb</code></td><td>testina di cancellazione</td></tr>
</tbody>
</table>
</div>

## trasduttori / utenza (già fatti)

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>gmic</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.54pt" height="43.22pt" viewBox="0 0 29.54 43.22">
<defs>
<clipPath id="gmic-wb-clip-0">
<path clip-rule="nonzero" d="M 0.0351562 0 L 29.050781 0 L 29.050781 32 L 0.0351562 32 Z M 0.0351562 0 "/>
</clipPath>
<clipPath id="gmic-wb-clip-1">
<path clip-rule="nonzero" d="M 0.0351562 0 L 29.050781 0 L 29.050781 2 L 0.0351562 2 Z M 0.0351562 0 "/>
</clipPath>
<clipPath id="gmic-wb-clip-2">
<path clip-rule="nonzero" d="M 14 28 L 15 28 L 15 42.453125 L 14 42.453125 Z M 14 28 "/>
</clipPath>
</defs>
<g clip-path="url(#gmic-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.174974 0.000385354 C 14.174974 7.826623 7.828086 14.173511 0.00184822 14.173511 C -7.828366 14.173511 -14.175254 7.826623 -14.175254 0.000385354 C -14.175254 -7.825852 -7.828366 -14.172741 0.00184822 -14.172741 C 7.828086 -14.172741 14.174974 -7.825852 14.174974 0.000385354 Z M 14.174974 0.000385354 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
<g clip-path="url(#gmic-wb-clip-1)">
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.175254 14.173511 L 14.174974 14.173511 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
<g clip-path="url(#gmic-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.00184822 -14.172741 L 0.00184822 -28.345866 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.54pt" height="43.32pt" viewBox="0 0 29.54 43.32">
<defs>
<clipPath id="gmic-gs-clip-0">
<path clip-rule="nonzero" d="M 0 0 L 29.085938 0 L 29.085938 35 L 0 35 Z M 0 0 "/>
</clipPath>
<clipPath id="gmic-gs-clip-1">
<path clip-rule="nonzero" d="M 0 0 L 29.085938 0 L 29.085938 2 L 0 2 Z M 0 0 "/>
</clipPath>
<clipPath id="gmic-gs-clip-2">
<path clip-rule="nonzero" d="M 14 28 L 15 28 L 15 42.652344 L 14 42.652344 Z M 14 28 "/>
</clipPath>
</defs>
<g clip-path="url(#gmic-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.174522 -0.0012193 C 14.174522 7.82679 7.826415 14.174897 -0.00159499 14.174897 C -7.829605 14.174897 -14.173744 7.82679 -14.173744 -0.0012193 C -14.173744 -7.829229 -7.829605 -14.173368 -0.00159499 -14.173368 C 7.826415 -14.173368 14.174522 -7.829229 14.174522 -0.0012193 Z M 14.174522 -0.0012193 " transform="matrix(0.984545, 0, 0, -0.984545, 14.544539, 14.545675)"/>
</g>
<g clip-path="url(#gmic-gs-clip-1)">
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173744 14.174897 L 14.174522 14.174897 " transform="matrix(0.984545, 0, 0, -0.984545, 14.544539, 14.545675)"/>
</g>
<g clip-path="url(#gmic-gs-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.00159499 -14.173368 L -0.00159499 -28.345518 " transform="matrix(0.984545, 0, 0, -0.984545, 14.544539, 14.545675)"/>
</g>
</svg></td><td><code>gs</code></td><td>microfono generico</td></tr>
<tr><td><code>cmic</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.54pt" height="43.22pt" viewBox="0 0 29.54 43.22">
<defs>
<clipPath id="cmic-wb-clip-0">
<path clip-rule="nonzero" d="M 0.0351562 0 L 29.050781 0 L 29.050781 32 L 0.0351562 32 Z M 0.0351562 0 "/>
</clipPath>
<clipPath id="cmic-wb-clip-1">
<path clip-rule="nonzero" d="M 0.0351562 0 L 29.050781 0 L 29.050781 2 L 0.0351562 2 Z M 0.0351562 0 "/>
</clipPath>
<clipPath id="cmic-wb-clip-2">
<path clip-rule="nonzero" d="M 14 28 L 15 28 L 15 42.453125 L 14 42.453125 Z M 14 28 "/>
</clipPath>
</defs>
<g clip-path="url(#cmic-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.174974 0.000385354 C 14.174974 7.826623 7.828086 14.173511 0.00184822 14.173511 C -7.828366 14.173511 -14.175254 7.826623 -14.175254 0.000385354 C -14.175254 -7.825852 -7.828366 -14.172741 0.00184822 -14.172741 C 7.828086 -14.172741 14.174974 -7.825852 14.174974 0.000385354 Z M 14.174974 0.000385354 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
<g clip-path="url(#cmic-wb-clip-1)">
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.175254 14.173511 L 14.174974 14.173511 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
<g clip-path="url(#cmic-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.00184822 -14.172741 L 0.00184822 -28.345866 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.422154 13.091836 L 5.422154 -13.095042 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.422435 13.091836 L -5.422435 -13.095042 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.54pt" height="43.22pt" viewBox="0 0 29.54 43.22">
<defs>
<clipPath id="cmic-gs-clip-0">
<path clip-rule="nonzero" d="M 0.0351562 0 L 29.050781 0 L 29.050781 32 L 0.0351562 32 Z M 0.0351562 0 "/>
</clipPath>
<clipPath id="cmic-gs-clip-1">
<path clip-rule="nonzero" d="M 0.0351562 0 L 29.050781 0 L 29.050781 2 L 0.0351562 2 Z M 0.0351562 0 "/>
</clipPath>
<clipPath id="cmic-gs-clip-2">
<path clip-rule="nonzero" d="M 14 28 L 15 28 L 15 42.453125 L 14 42.453125 Z M 14 28 "/>
</clipPath>
</defs>
<g clip-path="url(#cmic-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.174974 0.000385354 C 14.174974 7.826623 7.828086 14.173511 0.00184822 14.173511 C -7.828366 14.173511 -14.175254 7.826623 -14.175254 0.000385354 C -14.175254 -7.825852 -7.828366 -14.172741 0.00184822 -14.172741 C 7.828086 -14.172741 14.174974 -7.825852 14.174974 0.000385354 Z M 14.174974 0.000385354 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
<g clip-path="url(#cmic-gs-clip-1)">
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.175254 14.173511 L 14.174974 14.173511 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
<g clip-path="url(#cmic-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.00184822 -14.172741 L 0.00184822 -28.345866 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.422154 13.091836 L 5.422154 -13.095042 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -5.422435 13.091836 L -5.422435 -13.095042 " transform="matrix(0.982273, 0, 0, -0.982273, 14.54506, 14.512097)"/>
</svg></td><td><code>wb</code></td><td>microfono a condensatore</td></tr>
<tr><td><code>kmic</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.54pt" height="34.91pt" viewBox="0 0 29.54 34.91">
<defs>
<clipPath id="kmic-wb-clip-0">
<path clip-rule="nonzero" d="M 14 14 L 15 14 L 15 34.597656 L 14 34.597656 Z M 14 14 "/>
</clipPath>
<clipPath id="kmic-wb-clip-1">
<path clip-rule="nonzero" d="M 2 0.222656 L 27 0.222656 L 27 22 L 2 22 Z M 2 0.222656 "/>
</clipPath>
<clipPath id="kmic-wb-clip-2">
<path clip-rule="nonzero" d="M 0 0.222656 L 29.085938 0.222656 L 29.085938 25 L 0 25 Z M 0 0.222656 "/>
</clipPath>
<clipPath id="kmic-wb-clip-3">
<path clip-rule="nonzero" d="M 0 0.222656 L 29.085938 0.222656 L 29.085938 2 L 0 2 Z M 0 0.222656 "/>
</clipPath>
</defs>
<g clip-path="url(#kmic-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.0015666 0.000254232 L -0.0015666 -20.041427 " transform="matrix(0.984667, 0, 0, -0.984667, 14.544511, 14.765875)"/>
</g>
<g clip-path="url(#kmic-wb-clip-1)">
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 14.542969 0.808594 L 2.457031 21.742188 L 26.628906 21.742188 Z M 14.542969 0.808594 "/>
</g>
<g clip-path="url(#kmic-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.0015666 14.174626 L -12.275708 -7.084948 L 12.272574 -7.084948 Z M -0.0015666 14.174626 " transform="matrix(0.984667, 0, 0, -0.984667, 14.544511, 14.765875)"/>
</g>
<g clip-path="url(#kmic-wb-clip-3)">
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.171971 14.174626 L 14.172805 14.174626 " transform="matrix(0.984667, 0, 0, -0.984667, 14.544511, 14.765875)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.54pt" height="34.91pt" viewBox="0 0 29.54 34.91">
<defs>
<clipPath id="kmic-gs-clip-0">
<path clip-rule="nonzero" d="M 14 14 L 15 14 L 15 34.597656 L 14 34.597656 Z M 14 14 "/>
</clipPath>
<clipPath id="kmic-gs-clip-1">
<path clip-rule="nonzero" d="M 2 0.222656 L 27 0.222656 L 27 22 L 2 22 Z M 2 0.222656 "/>
</clipPath>
<clipPath id="kmic-gs-clip-2">
<path clip-rule="nonzero" d="M 0 0.222656 L 29.085938 0.222656 L 29.085938 25 L 0 25 Z M 0 0.222656 "/>
</clipPath>
<clipPath id="kmic-gs-clip-3">
<path clip-rule="nonzero" d="M 0 0.222656 L 29.085938 0.222656 L 29.085938 2 L 0 2 Z M 0 0.222656 "/>
</clipPath>
</defs>
<g clip-path="url(#kmic-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.0015666 0.000254232 L -0.0015666 -20.041427 " transform="matrix(0.984667, 0, 0, -0.984667, 14.544511, 14.765875)"/>
</g>
<g clip-path="url(#kmic-gs-clip-1)">
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 14.542969 0.808594 L 2.457031 21.742188 L 26.628906 21.742188 Z M 14.542969 0.808594 "/>
</g>
<g clip-path="url(#kmic-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.0015666 14.174626 L -12.275708 -7.084948 L 12.272574 -7.084948 Z M -0.0015666 14.174626 " transform="matrix(0.984667, 0, 0, -0.984667, 14.544511, 14.765875)"/>
</g>
<g clip-path="url(#kmic-gs-clip-3)">
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.171971 14.174626 L 14.172805 14.174626 " transform="matrix(0.984667, 0, 0, -0.984667, 14.544511, 14.765875)"/>
</g>
</svg></td><td><code>wb</code></td><td>microfono a contatto</td></tr>
<tr><td><code>girad</code></td><td><code>out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.55pt" height="34.22pt" viewBox="0 0 45.55 34.22">
<defs>
<clipPath id="girad-wb-clip-0">
<path clip-rule="nonzero" d="M 0.289062 0 L 34 0 L 34 1 L 0.289062 1 Z M 0.289062 0 "/>
</clipPath>
<clipPath id="girad-wb-clip-1">
<path clip-rule="nonzero" d="M 0.289062 33 L 34 33 L 34 33.457031 L 0.289062 33.457031 Z M 0.289062 33 "/>
</clipPath>
<clipPath id="girad-wb-clip-2">
<path clip-rule="nonzero" d="M 0.289062 23 L 11 23 L 11 33.457031 L 0.289062 33.457031 Z M 0.289062 23 "/>
</clipPath>
<clipPath id="girad-wb-clip-3">
<path clip-rule="nonzero" d="M 0.289062 0 L 1 0 L 1 33.457031 L 0.289062 33.457031 Z M 0.289062 0 "/>
</clipPath>
<clipPath id="girad-wb-clip-4">
<path clip-rule="nonzero" d="M 33 0 L 34 0 L 34 33.457031 L 33 33.457031 Z M 33 0 "/>
</clipPath>
<clipPath id="girad-wb-clip-5">
<path clip-rule="nonzero" d="M 39 14 L 44.824219 14 L 44.824219 20 L 39 20 Z M 39 14 "/>
</clipPath>
<clipPath id="girad-wb-clip-6">
<path clip-rule="nonzero" d="M 36 11 L 44.824219 11 L 44.824219 23 L 36 23 Z M 36 11 "/>
</clipPath>
</defs>
<g clip-path="url(#girad-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.006593 17.009123 L 17.009288 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<g clip-path="url(#girad-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.006593 -17.006758 L 17.009288 -17.006758 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<g clip-path="url(#girad-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.006593 -17.006758 L -9.60732 -9.607485 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255106 -0.000116983 C 4.608153 0.206117 1.774555 1.367242 0.000378478 2.632897 L 0.000378478 -2.633131 C 1.774555 -1.367476 4.608153 -0.206351 5.255106 -0.000116983 Z M 5.255106 -0.000116983 " transform="matrix(0.691342, -0.691342, -0.691342, -0.691342, 7.620751, 26.125181)"/>
<g clip-path="url(#girad-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.006593 -17.006758 L -17.006593 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<g clip-path="url(#girad-wb-clip-4)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.009288 -17.006758 L 17.009288 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.009288 0.00118217 L 22.778484 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
<g clip-path="url(#girad-wb-clip-5)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 44.421875 16.730469 C 43.789062 16.53125 41.015625 15.394531 39.285156 14.160156 L 39.285156 19.304688 C 41.015625 18.066406 43.789062 16.933594 44.421875 16.730469 Z M 44.421875 16.730469 "/>
</g>
<g clip-path="url(#girad-wb-clip-6)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255217 0.00118217 C 4.60798 0.204942 1.771326 1.367571 0.0014136 2.630082 L 0.0014136 -2.631713 C 1.771326 -1.365206 4.60798 -0.206573 5.255217 0.00118217 Z M 5.255217 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 39.283774, 16.731625)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 8.50332 0.00118217 C 8.50332 4.695645 4.695811 8.503155 0.0013476 8.503155 C -4.697111 8.503155 -8.50462 4.695645 -8.50462 0.00118217 C -8.50462 -4.697276 -4.697111 -8.504786 0.0013476 -8.504786 C 4.695811 -8.504786 8.50332 -4.697276 8.50332 0.00118217 Z M 8.50332 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.55pt" height="34.22pt" viewBox="0 0 45.55 34.22">
<defs>
<clipPath id="girad-gs-clip-0">
<path clip-rule="nonzero" d="M 0.289062 0 L 34 0 L 34 1 L 0.289062 1 Z M 0.289062 0 "/>
</clipPath>
<clipPath id="girad-gs-clip-1">
<path clip-rule="nonzero" d="M 0.289062 33 L 34 33 L 34 33.457031 L 0.289062 33.457031 Z M 0.289062 33 "/>
</clipPath>
<clipPath id="girad-gs-clip-2">
<path clip-rule="nonzero" d="M 0.289062 23 L 11 23 L 11 33.457031 L 0.289062 33.457031 Z M 0.289062 23 "/>
</clipPath>
<clipPath id="girad-gs-clip-3">
<path clip-rule="nonzero" d="M 0.289062 0 L 1 0 L 1 33.457031 L 0.289062 33.457031 Z M 0.289062 0 "/>
</clipPath>
<clipPath id="girad-gs-clip-4">
<path clip-rule="nonzero" d="M 33 0 L 34 0 L 34 33.457031 L 33 33.457031 Z M 33 0 "/>
</clipPath>
<clipPath id="girad-gs-clip-5">
<path clip-rule="nonzero" d="M 39 14 L 44.824219 14 L 44.824219 20 L 39 20 Z M 39 14 "/>
</clipPath>
<clipPath id="girad-gs-clip-6">
<path clip-rule="nonzero" d="M 36 11 L 44.824219 11 L 44.824219 23 L 36 23 Z M 36 11 "/>
</clipPath>
</defs>
<g clip-path="url(#girad-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.006593 17.009123 L 17.009288 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<g clip-path="url(#girad-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.006593 -17.006758 L 17.009288 -17.006758 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<g clip-path="url(#girad-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.006593 -17.006758 L -9.60732 -9.607485 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255106 -0.000116983 C 4.608153 0.206117 1.774555 1.367242 0.000378478 2.632897 L 0.000378478 -2.633131 C 1.774555 -1.367476 4.608153 -0.206351 5.255106 -0.000116983 Z M 5.255106 -0.000116983 " transform="matrix(0.691342, -0.691342, -0.691342, -0.691342, 7.620751, 26.125181)"/>
<g clip-path="url(#girad-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.006593 -17.006758 L -17.006593 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<g clip-path="url(#girad-gs-clip-4)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.009288 -17.006758 L 17.009288 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.009288 0.00118217 L 22.778484 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
<g clip-path="url(#girad-gs-clip-5)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 44.421875 16.730469 C 43.789062 16.53125 41.015625 15.394531 39.285156 14.160156 L 39.285156 19.304688 C 41.015625 18.066406 43.789062 16.933594 44.421875 16.730469 Z M 44.421875 16.730469 "/>
</g>
<g clip-path="url(#girad-gs-clip-6)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.255217 0.00118217 C 4.60798 0.204942 1.771326 1.367571 0.0014136 2.630082 L 0.0014136 -2.631713 C 1.771326 -1.365206 4.60798 -0.206573 5.255217 0.00118217 Z M 5.255217 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 39.283774, 16.731625)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 8.50332 0.00118217 C 8.50332 4.695645 4.695811 8.503155 0.0013476 8.503155 C -4.697111 8.503155 -8.50462 4.695645 -8.50462 0.00118217 C -8.50462 -4.697276 -4.697111 -8.504786 0.0013476 -8.504786 C 4.695811 -8.504786 8.50332 -4.697276 8.50332 0.00118217 Z M 8.50332 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 17.014307, 16.731625)"/>
</svg></td><td><code>wb</code></td><td>giradischi</td></tr>
<tr><td><code>indliv</code></td><td><code>in,out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35.15pt" height="34.22pt" viewBox="0 0 35.15 34.22">
<defs>
<g>
<g id="indliv-wb-glyph-0-0">
<path d="M 6.125 0 L 6.609375 0 L 12.75 -15.421875 L 12.171875 -15.421875 L 11.828125 -14.375 L 6.4375 -0.828125 L 6.34375 -0.828125 L 1.359375 -14.375 L 1.046875 -15.421875 L 0.484375 -15.421875 Z M 6.125 0 "/>
</g>
<g id="indliv-wb-glyph-0-1">
<path d="M 12.734375 -5.546875 L 12.734375 -15.421875 L 12.25 -15.421875 L 12.25 -5.546875 C 12.25 -3.875 11.8125 -2.59375 10.984375 -1.71875 C 10.171875 -0.828125 8.953125 -0.390625 7.40625 -0.390625 C 5.8125 -0.390625 4.59375 -0.828125 3.78125 -1.71875 C 2.953125 -2.59375 2.546875 -3.875 2.5625 -5.546875 L 2.5625 -15.421875 L 2.078125 -15.421875 L 2.078125 -5.546875 C 2.078125 -3.703125 2.515625 -2.328125 3.4375 -1.359375 C 4.328125 -0.390625 5.65625 0.09375 7.40625 0.09375 C 9.125 0.09375 10.453125 -0.390625 11.40625 -1.375 C 12.3125 -2.34375 12.78125 -3.75 12.734375 -5.546875 Z M 12.734375 -5.546875 "/>
</g>
</g>
<clipPath id="indliv-wb-clip-0">
<path clip-rule="nonzero" d="M 0 0.0234375 L 34 0.0234375 L 34 1 L 0 1 Z M 0 0.0234375 "/>
</clipPath>
<clipPath id="indliv-wb-clip-1">
<path clip-rule="nonzero" d="M 0 33 L 34 33 L 34 33.433594 L 0 33.433594 Z M 0 33 "/>
</clipPath>
<clipPath id="indliv-wb-clip-2">
<path clip-rule="nonzero" d="M 0 0.0234375 L 1 0.0234375 L 1 33.433594 L 0 33.433594 Z M 0 0.0234375 "/>
</clipPath>
<clipPath id="indliv-wb-clip-3">
<path clip-rule="nonzero" d="M 33 0.0234375 L 34 0.0234375 L 34 33.433594 L 33 33.433594 Z M 33 0.0234375 "/>
</clipPath>
</defs>
<g clip-path="url(#indliv-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.0089 17.008733 L 17.009148 17.008733 " transform="matrix(0.976389, 0, 0, -0.976389, 17.158082, 16.732138)"/>
</g>
<g clip-path="url(#indliv-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.0089 -17.009315 L 17.009148 -17.009315 " transform="matrix(0.976389, 0, 0, -0.976389, 17.158082, 16.732138)"/>
</g>
<g clip-path="url(#indliv-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.0089 -17.009315 L -17.0089 17.008733 " transform="matrix(0.976389, 0, 0, -0.976389, 17.158082, 16.732138)"/>
</g>
<g clip-path="url(#indliv-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.009148 -17.009315 L 17.009148 17.008733 " transform="matrix(0.976389, 0, 0, -0.976389, 17.158082, 16.732138)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="3.241611" y="24.391908"/>
<use xlink:href="#glyph-0-1" x="16.262206" y="24.391908"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35.15pt" height="34.22pt" viewBox="0 0 35.15 34.22">
<defs>
<g>
<g id="indliv-gs-glyph-0-0">
<path d="M 6.125 0 L 6.609375 0 L 12.75 -15.421875 L 12.171875 -15.421875 L 11.828125 -14.375 L 6.4375 -0.828125 L 6.34375 -0.828125 L 1.359375 -14.375 L 1.046875 -15.421875 L 0.484375 -15.421875 Z M 6.125 0 "/>
</g>
<g id="indliv-gs-glyph-0-1">
<path d="M 12.734375 -5.546875 L 12.734375 -15.421875 L 12.25 -15.421875 L 12.25 -5.546875 C 12.25 -3.875 11.8125 -2.59375 10.984375 -1.71875 C 10.171875 -0.828125 8.953125 -0.390625 7.40625 -0.390625 C 5.8125 -0.390625 4.59375 -0.828125 3.78125 -1.71875 C 2.953125 -2.59375 2.546875 -3.875 2.5625 -5.546875 L 2.5625 -15.421875 L 2.078125 -15.421875 L 2.078125 -5.546875 C 2.078125 -3.703125 2.515625 -2.328125 3.4375 -1.359375 C 4.328125 -0.390625 5.65625 0.09375 7.40625 0.09375 C 9.125 0.09375 10.453125 -0.390625 11.40625 -1.375 C 12.3125 -2.34375 12.78125 -3.75 12.734375 -5.546875 Z M 12.734375 -5.546875 "/>
</g>
</g>
<clipPath id="indliv-gs-clip-0">
<path clip-rule="nonzero" d="M 0 0.0234375 L 34 0.0234375 L 34 1 L 0 1 Z M 0 0.0234375 "/>
</clipPath>
<clipPath id="indliv-gs-clip-1">
<path clip-rule="nonzero" d="M 0 33 L 34 33 L 34 33.433594 L 0 33.433594 Z M 0 33 "/>
</clipPath>
<clipPath id="indliv-gs-clip-2">
<path clip-rule="nonzero" d="M 0 0.0234375 L 1 0.0234375 L 1 33.433594 L 0 33.433594 Z M 0 0.0234375 "/>
</clipPath>
<clipPath id="indliv-gs-clip-3">
<path clip-rule="nonzero" d="M 33 0.0234375 L 34 0.0234375 L 34 33.433594 L 33 33.433594 Z M 33 0.0234375 "/>
</clipPath>
</defs>
<g clip-path="url(#indliv-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.0089 17.008733 L 17.009148 17.008733 " transform="matrix(0.976389, 0, 0, -0.976389, 17.158082, 16.732138)"/>
</g>
<g clip-path="url(#indliv-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.0089 -17.009315 L 17.009148 -17.009315 " transform="matrix(0.976389, 0, 0, -0.976389, 17.158082, 16.732138)"/>
</g>
<g clip-path="url(#indliv-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.0089 -17.009315 L -17.0089 17.008733 " transform="matrix(0.976389, 0, 0, -0.976389, 17.158082, 16.732138)"/>
</g>
<g clip-path="url(#indliv-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.009148 -17.009315 L 17.009148 17.008733 " transform="matrix(0.976389, 0, 0, -0.976389, 17.158082, 16.732138)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="3.241611" y="24.391908"/>
<use xlink:href="#glyph-0-1" x="16.262206" y="24.391908"/>
</g>
</svg></td><td><code>wb</code></td><td>indicatore di livello (VU)</td></tr>
<tr><td><code>ampgen</code></td><td><code>in,out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="34.22pt" viewBox="0 0 56.89 34.22">
<defs>
<clipPath id="ampgen-wb-clip-0">
<path clip-rule="nonzero" d="M 11 33 L 46 33 L 46 33.457031 L 11 33.457031 Z M 11 33 "/>
</clipPath>
<clipPath id="ampgen-wb-clip-1">
<path clip-rule="nonzero" d="M 0.582031 16 L 7 16 L 7 17 L 0.582031 17 Z M 0.582031 16 "/>
</clipPath>
<clipPath id="ampgen-wb-clip-2">
<path clip-rule="nonzero" d="M 11 0 L 12 0 L 12 33.457031 L 11 33.457031 Z M 11 0 "/>
</clipPath>
<clipPath id="ampgen-wb-clip-3">
<path clip-rule="nonzero" d="M 44 0 L 46 0 L 46 33.457031 L 44 33.457031 Z M 44 0 "/>
</clipPath>
<clipPath id="ampgen-wb-clip-4">
<path clip-rule="nonzero" d="M 47 11 L 56.203125 11 L 56.203125 23 L 47 23 Z M 47 11 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009555 17.009123 L 17.006326 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
<g clip-path="url(#ampgen-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009555 -17.006758 L 17.006326 -17.006758 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</g>
<g clip-path="url(#ampgen-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348182 0.00118217 L -22.578986 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.252788 0.00118217 C 4.609546 0.204942 1.772892 1.367571 -0.00101601 2.630082 L -0.00101601 -2.631713 C 1.772892 -1.365206 4.609546 -0.206573 5.252788 0.00118217 Z M 5.252788 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 6.3174, 16.731625)"/>
<g clip-path="url(#ampgen-wb-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009555 -17.006758 L -17.009555 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</g>
<g clip-path="url(#ampgen-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.006326 -17.006758 L 17.006326 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.006326 0.00118217 L 22.775522 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 55.800781 16.730469 C 55.167969 16.53125 52.394531 15.394531 50.660156 14.160156 L 50.660156 19.304688 C 52.394531 18.066406 55.167969 16.933594 55.800781 16.730469 Z M 55.800781 16.730469 "/>
<g clip-path="url(#ampgen-wb-clip-4)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25625 0.00118217 C 4.609014 0.204942 1.772359 1.367571 -0.00154841 2.630082 L -0.00154841 -2.631713 C 1.772359 -1.365206 4.609014 -0.206573 5.25625 0.00118217 Z M 5.25625 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 50.66167, 16.731625)"/>
</g>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 10.258285 0.00118217 L -3.913001 8.183532 L -3.913001 -8.181167 Z M 10.258285 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.89pt" height="34.22pt" viewBox="0 0 56.89 34.22">
<defs>
<clipPath id="ampgen-gs-clip-0">
<path clip-rule="nonzero" d="M 11 33 L 46 33 L 46 33.457031 L 11 33.457031 Z M 11 33 "/>
</clipPath>
<clipPath id="ampgen-gs-clip-1">
<path clip-rule="nonzero" d="M 0.582031 16 L 7 16 L 7 17 L 0.582031 17 Z M 0.582031 16 "/>
</clipPath>
<clipPath id="ampgen-gs-clip-2">
<path clip-rule="nonzero" d="M 11 0 L 12 0 L 12 33.457031 L 11 33.457031 Z M 11 0 "/>
</clipPath>
<clipPath id="ampgen-gs-clip-3">
<path clip-rule="nonzero" d="M 44 0 L 46 0 L 46 33.457031 L 44 33.457031 Z M 44 0 "/>
</clipPath>
<clipPath id="ampgen-gs-clip-4">
<path clip-rule="nonzero" d="M 47 11 L 56.203125 11 L 56.203125 23 L 47 23 Z M 47 11 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009555 17.009123 L 17.006326 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
<g clip-path="url(#ampgen-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009555 -17.006758 L 17.006326 -17.006758 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</g>
<g clip-path="url(#ampgen-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348182 0.00118217 L -22.578986 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.252788 0.00118217 C 4.609546 0.204942 1.772892 1.367571 -0.00101601 2.630082 L -0.00101601 -2.631713 C 1.772892 -1.365206 4.609546 -0.206573 5.252788 0.00118217 Z M 5.252788 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 6.3174, 16.731625)"/>
<g clip-path="url(#ampgen-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.009555 -17.006758 L -17.009555 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</g>
<g clip-path="url(#ampgen-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.006326 -17.006758 L 17.006326 17.009123 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.006326 0.00118217 L 22.775522 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 55.800781 16.730469 C 55.167969 16.53125 52.394531 15.394531 50.660156 14.160156 L 50.660156 19.304688 C 52.394531 18.066406 55.167969 16.933594 55.800781 16.730469 Z M 55.800781 16.730469 "/>
<g clip-path="url(#ampgen-gs-clip-4)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.25625 0.00118217 C 4.609014 0.204942 1.772359 1.367571 -0.00154841 2.630082 L -0.00154841 -2.631713 C 1.772359 -1.365206 4.609014 -0.206573 5.25625 0.00118217 Z M 5.25625 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 50.66167, 16.731625)"/>
</g>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 10.258285 0.00118217 L -3.913001 8.183532 L -3.913001 -8.181167 Z M 10.258285 0.00118217 " transform="matrix(0.977714, 0, 0, -0.977714, 28.392203, 16.731625)"/>
</svg></td><td><code>wb</code></td><td>amplificatore generico</td></tr>
<tr><td><code>rlev</code></td><td><code>in,out</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.28pt" height="85.24pt" viewBox="0 0 40.28 85.24">
<defs>
<clipPath id="rlev-wb-clip-0">
<path clip-rule="nonzero" d="M 19 0.375 L 20 0.375 L 20 8 L 19 8 Z M 19 0.375 "/>
</clipPath>
<clipPath id="rlev-wb-clip-1">
<path clip-rule="nonzero" d="M 19 76 L 20 76 L 20 84.117188 L 19 84.117188 Z M 19 76 "/>
</clipPath>
<clipPath id="rlev-wb-clip-2">
<path clip-rule="nonzero" d="M 33 22 L 39.574219 22 L 39.574219 29 L 33 29 Z M 33 22 "/>
</clipPath>
<clipPath id="rlev-wb-clip-3">
<path clip-rule="nonzero" d="M 31 20 L 39.574219 20 L 39.574219 32 L 31 32 Z M 31 20 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.08755 35.435359 L 7.087153 35.435359 L 7.087153 -35.434179 L -7.08755 -35.434179 Z M -7.08755 35.435359 " transform="matrix(0.982439, 0, 0, -0.982439, 19.787304, 42.246673)"/>
<g clip-path="url(#rlev-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.00178954 35.435359 L 0.00178954 42.520722 " transform="matrix(0.982439, 0, 0, -0.982439, 19.787304, 42.246673)"/>
</g>
<g clip-path="url(#rlev-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.00178954 -35.434179 L 0.00178954 -42.519543 " transform="matrix(0.982439, 0, 0, -0.982439, 19.787304, 42.246673)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -20.041598 -20.042798 L 16.100912 16.103688 " transform="matrix(0.982439, 0, 0, -0.982439, 19.787304, 42.246673)"/>
<g clip-path="url(#rlev-wb-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.257812 22.777344 C 38.667969 23.082031 35.890625 24.246094 33.78125 24.597656 L 37.433594 28.253906 C 37.789062 26.144531 38.953125 23.367188 39.257812 22.777344 Z M 39.257812 22.777344 "/>
</g>
<g clip-path="url(#rlev-wb-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254053 -0.000848365 C 4.610212 0.204394 1.773372 1.365558 0.00210476 2.630749 L -0.000706771 -2.629634 C 1.773372 -1.367255 4.610212 -0.20609 5.254053 -0.000848365 Z M 5.254053 -0.000848365 " transform="matrix(0.694683, -0.694683, -0.694683, -0.694683, 35.607324, 26.426654)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.28pt" height="85.24pt" viewBox="0 0 40.28 85.24">
<defs>
<clipPath id="rlev-gs-clip-0">
<path clip-rule="nonzero" d="M 19 0.375 L 20 0.375 L 20 8 L 19 8 Z M 19 0.375 "/>
</clipPath>
<clipPath id="rlev-gs-clip-1">
<path clip-rule="nonzero" d="M 19 76 L 20 76 L 20 84.117188 L 19 84.117188 Z M 19 76 "/>
</clipPath>
<clipPath id="rlev-gs-clip-2">
<path clip-rule="nonzero" d="M 33 22 L 39.574219 22 L 39.574219 29 L 33 29 Z M 33 22 "/>
</clipPath>
<clipPath id="rlev-gs-clip-3">
<path clip-rule="nonzero" d="M 31 20 L 39.574219 20 L 39.574219 32 L 31 32 Z M 31 20 "/>
</clipPath>
</defs>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.08755 35.435359 L 7.087153 35.435359 L 7.087153 -35.434179 L -7.08755 -35.434179 Z M -7.08755 35.435359 " transform="matrix(0.982439, 0, 0, -0.982439, 19.787304, 42.246673)"/>
<g clip-path="url(#rlev-gs-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.00178954 35.435359 L 0.00178954 42.520722 " transform="matrix(0.982439, 0, 0, -0.982439, 19.787304, 42.246673)"/>
</g>
<g clip-path="url(#rlev-gs-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.00178954 -35.434179 L 0.00178954 -42.519543 " transform="matrix(0.982439, 0, 0, -0.982439, 19.787304, 42.246673)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -20.041598 -20.042798 L 16.100912 16.103688 " transform="matrix(0.982439, 0, 0, -0.982439, 19.787304, 42.246673)"/>
<g clip-path="url(#rlev-gs-clip-2)">
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 39.257812 22.777344 C 38.667969 23.082031 35.890625 24.246094 33.78125 24.597656 L 37.433594 28.253906 C 37.789062 26.144531 38.953125 23.367188 39.257812 22.777344 Z M 39.257812 22.777344 "/>
</g>
<g clip-path="url(#rlev-gs-clip-3)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.254053 -0.000848365 C 4.610212 0.204394 1.773372 1.365558 0.00210476 2.630749 L -0.000706771 -2.629634 C 1.773372 -1.367255 4.610212 -0.20609 5.254053 -0.000848365 Z M 5.254053 -0.000848365 " transform="matrix(0.694683, -0.694683, -0.694683, -0.694683, 35.607324, 26.426654)"/>
</g>
</svg></td><td><code>wb</code></td><td>regolatore di livello</td></tr>
<tr><td><code>lspk</code></td><td><code>in</code></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24.75pt" height="35.63pt" viewBox="0 0 24.75 35.63">
<defs>
<clipPath id="lspk-wb-clip-0">
<path clip-rule="nonzero" d="M 0.00390625 0 L 24.5 0 L 24.5 24 L 0.00390625 24 Z M 0.00390625 0 "/>
</clipPath>
<clipPath id="lspk-wb-clip-1">
<path clip-rule="nonzero" d="M 12 21 L 13 21 L 13 35.265625 L 12 35.265625 Z M 12 21 "/>
</clipPath>
</defs>
<g clip-path="url(#lspk-wb-clip-0)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000298063 -14.172213 L -12.274891 7.08533 L 12.274295 7.08533 Z M -0.000298063 -14.172213 " transform="matrix(0.989722, 0, 0, -0.989722, 12.250295, 7.110164)"/>
</g>
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.08483 -14.172213 L 7.088181 -14.172213 " transform="matrix(0.989722, 0, 0, -0.989722, 12.250295, 7.110164)"/>
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.08483 -17.009973 L 7.088181 -17.009973 " transform="matrix(0.989722, 0, 0, -0.989722, 12.250295, 7.110164)"/>
<g clip-path="url(#lspk-wb-clip-1)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000298063 -14.172213 L -0.000298063 -28.345224 " transform="matrix(0.989722, 0, 0, -0.989722, 12.250295, 7.110164)"/>
</g>
</svg></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24.95pt" height="35.83pt" viewBox="0 0 24.95 35.83">
<defs>
<clipPath id="lspk-gs-clip-0">
<path clip-rule="nonzero" d="M 0.0351562 0 L 24.867188 0 L 24.867188 27 L 0.0351562 27 Z M 0.0351562 0 "/>
</clipPath>
<clipPath id="lspk-gs-clip-1">
<path clip-rule="nonzero" d="M 12 21 L 13 21 L 13 35.660156 L 12 35.660156 Z M 12 21 "/>
</clipPath>
</defs>
<g clip-path="url(#lspk-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.0000964276 -14.172792 L -12.272702 7.087761 L 12.272895 7.087761 Z M 0.0000964276 -14.172792 " transform="matrix(0.995278, 0, 0, -0.995278, 12.449123, 7.249603)"/>
</g>
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.088063 -14.172792 L 7.088256 -14.172792 " transform="matrix(0.995278, 0, 0, -0.995278, 12.449123, 7.249603)"/>
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -7.088063 -17.006486 L 7.088256 -17.006486 " transform="matrix(0.995278, 0, 0, -0.995278, 12.449123, 7.249603)"/>
<g clip-path="url(#lspk-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.0000964276 -14.172792 L 0.0000964276 -28.345186 " transform="matrix(0.995278, 0, 0, -0.995278, 12.449123, 7.249603)"/>
</g>
</svg></td><td><code>gs</code></td><td>altoparlante</td></tr>
</tbody>
</table>
</div>

## estensioni

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>preamp</code></td><td><code>in,out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.92pt" height="29.14pt" viewBox="0 0 42.92 29.14">
<defs>
<clipPath id="preamp-gs-clip-0">
<path clip-rule="nonzero" d="M 0.578125 13 L 42.265625 13 L 42.265625 15 L 0.578125 15 Z M 0.578125 13 "/>
</clipPath>
<clipPath id="preamp-gs-clip-1">
<path clip-rule="nonzero" d="M 7 0 L 36 0 L 36 28.304688 L 7 28.304688 Z M 7 0 "/>
</clipPath>
</defs>
<g clip-path="url(#preamp-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.2601 -0.00101759 L 21.259578 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 7.652344 27.917969 L 7.652344 0.382812 L 35.1875 0.382812 L 35.1875 27.917969 Z M 7.652344 27.917969 "/>
<g clip-path="url(#preamp-gs-clip-1)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174157 -14.172903 L -14.174157 14.17489 L 14.173636 14.17489 L 14.173636 -14.172903 Z M -14.174157 -14.172903 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.923396 -8.50254 L 5.153335 6.570169 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 2.417584 -0.000400172 C 2.121841 0.096285 0.816592 0.628053 -0.00238846 1.213852 L 0.000455222 -1.211808 C 0.816592 -0.628854 2.124685 -0.0942417 2.417584 -0.000400172 Z M 2.417584 -0.000400172 " transform="matrix(0.68683, -0.68683, -0.68683, -0.68683, 26.425194, 7.769569)"/>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.087693 -0.00101759 L -5.668613 7.362411 L -5.668613 -7.364446 Z M 7.087693 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</svg></td><td><code>gs</code></td><td></td></tr>
<tr><td><code>invert</code></td><td><code>in,out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.92pt" height="29.14pt" viewBox="0 0 42.92 29.14">
<defs>
<clipPath id="invert-gs-clip-0">
<path clip-rule="nonzero" d="M 0.578125 13 L 42.265625 13 L 42.265625 15 L 0.578125 15 Z M 0.578125 13 "/>
</clipPath>
<clipPath id="invert-gs-clip-1">
<path clip-rule="nonzero" d="M 7 0 L 36 0 L 36 28.304688 L 7 28.304688 Z M 7 0 "/>
</clipPath>
</defs>
<g clip-path="url(#invert-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.2601 -0.00101759 L 21.259578 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 7.652344 27.917969 L 7.652344 0.382812 L 35.1875 0.382812 L 35.1875 27.917969 Z M 7.652344 27.917969 "/>
<g clip-path="url(#invert-gs-clip-1)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174157 -14.172903 L -14.174157 14.17489 L 14.173636 14.17489 L 14.173636 -14.172903 Z M -14.174157 -14.172903 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 5.668091 -0.00101759 L -7.088215 7.362411 L -7.088215 -7.364446 Z M 5.668091 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 8.370562 -0.00101759 C 8.370562 1.100883 7.477781 1.993663 6.375881 1.993663 C 5.278002 1.993663 4.385222 1.100883 4.385222 -0.00101759 C 4.385222 -1.098896 5.278002 -1.991677 6.375881 -1.991677 C 7.477781 -1.991677 8.370562 -1.098896 8.370562 -0.00101759 Z M 8.370562 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</svg></td><td><code>gs</code></td><td></td></tr>
<tr><td><code>lsf</code></td><td><code>in,out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.92pt" height="29.14pt" viewBox="0 0 42.92 29.14">
<defs>
<clipPath id="lsf-gs-clip-0">
<path clip-rule="nonzero" d="M 0.578125 13 L 42.265625 13 L 42.265625 15 L 0.578125 15 Z M 0.578125 13 "/>
</clipPath>
<clipPath id="lsf-gs-clip-1">
<path clip-rule="nonzero" d="M 7 0 L 36 0 L 36 28.304688 L 7 28.304688 Z M 7 0 "/>
</clipPath>
</defs>
<g clip-path="url(#lsf-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.2601 -0.00101759 L 21.259578 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 7.652344 27.917969 L 7.652344 0.382812 L 35.1875 0.382812 L 35.1875 27.917969 Z M 7.652344 27.917969 "/>
<g clip-path="url(#lsf-gs-clip-1)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174157 -14.172903 L -14.174157 14.17489 L 14.173636 14.17489 L 14.173636 -14.172903 Z M -14.174157 -14.172903 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-dasharray="0.19925 1.99255" stroke-miterlimit="10" d="M -14.174157 -0.00101759 L 14.173636 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174157 8.504527 L -7.088215 8.504527 C -0.629631 8.504527 0.629109 -0.00101759 7.087693 -0.00101759 L 14.173636 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</svg></td><td><code>gs</code></td><td></td></tr>
<tr><td><code>comp</code></td><td><code>in,out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.92pt" height="29.14pt" viewBox="0 0 42.92 29.14">
<defs>
<clipPath id="comp-gs-clip-0">
<path clip-rule="nonzero" d="M 0.578125 13 L 42.265625 13 L 42.265625 15 L 0.578125 15 Z M 0.578125 13 "/>
</clipPath>
<clipPath id="comp-gs-clip-1">
<path clip-rule="nonzero" d="M 7 0 L 36 0 L 36 28.304688 L 7 28.304688 Z M 7 0 "/>
</clipPath>
<clipPath id="comp-gs-clip-2">
<path clip-rule="nonzero" d="M 4 0 L 38 0 L 38 28.304688 L 4 28.304688 Z M 4 0 "/>
</clipPath>
<clipPath id="comp-gs-clip-3">
<path clip-rule="nonzero" d="M 2 0 L 41 0 L 41 28.304688 L 2 28.304688 Z M 2 0 "/>
</clipPath>
</defs>
<g clip-path="url(#comp-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.2601 -0.00101759 L 21.259578 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 7.652344 27.917969 L 7.652344 0.382812 L 35.1875 0.382812 L 35.1875 27.917969 Z M 7.652344 27.917969 "/>
<g clip-path="url(#comp-gs-clip-1)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174157 -14.172903 L -14.174157 14.17489 L 14.173636 14.17489 L 14.173636 -14.172903 Z M -14.174157 -14.172903 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#comp-gs-clip-2)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-dasharray="0.19925 1.99255" stroke-miterlimit="10" d="M -14.174157 -14.172903 L 14.173636 14.17489 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#comp-gs-clip-3)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174157 -14.172903 L 2.83291 2.834164 C 4.24849 4.249744 5.233766 4.92134 7.087693 5.669345 L 14.173636 8.504527 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
</svg></td><td><code>gs</code></td><td></td></tr>
<tr><td><code>switch</code></td><td><code>in,out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="99.61pt" height="32.73pt" viewBox="0 0 99.61 32.73">
<defs>
<clipPath id="switch-gs-clip-0">
<path clip-rule="nonzero" d="M 0.214844 0 L 35 0 L 35 22 L 0.214844 22 Z M 0.214844 0 "/>
</clipPath>
<clipPath id="switch-gs-clip-1">
<path clip-rule="nonzero" d="M 8 10 L 35 10 L 35 32.460938 L 8 32.460938 Z M 8 10 "/>
</clipPath>
<clipPath id="switch-gs-clip-2">
<path clip-rule="nonzero" d="M 22 0 L 99.007812 0 L 99.007812 22 L 22 22 Z M 22 0 "/>
</clipPath>
<clipPath id="switch-gs-clip-3">
<path clip-rule="nonzero" d="M 65 10 L 91 10 L 91 32.460938 L 65 32.460938 Z M 65 10 "/>
</clipPath>
<clipPath id="switch-gs-clip-4">
<path clip-rule="nonzero" d="M 26 28 L 31 28 L 31 32.460938 L 26 32.460938 Z M 26 28 "/>
</clipPath>
<clipPath id="switch-gs-clip-5">
<path clip-rule="nonzero" d="M 20 22 L 37 22 L 37 32.460938 L 20 32.460938 Z M 20 22 "/>
</clipPath>
</defs>
<g clip-path="url(#switch-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -49.608317 0.00064104 L -35.43375 0.00064104 L -21.259182 14.175209 " transform="matrix(0.991818, 0, 0, -0.991818, 49.612587, 16.231105)"/>
</g>
<g clip-path="url(#switch-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-dasharray="0.3985 1.99255" stroke-miterlimit="10" d="M -35.43375 0.00064104 L -21.259182 -14.173926 " transform="matrix(0.991818, 0, 0, -0.991818, 49.612587, 16.231105)"/>
</g>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -28.348435 7.085956 C -24.54387 3.285328 -24.193345 -2.740537 -27.470156 -6.950765 " transform="matrix(0.991818, 0, 0, -0.991818, 49.612587, 16.231105)"/>
<path fill="none" stroke-width="0.3985" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -2.070533 2.391272 C -1.69302 0.954834 -0.849093 0.279926 -0.00145237 -0.00112502 C -0.84771 -0.27932 -1.692617 -0.957407 -2.072544 -2.391863 " transform="matrix(-0.637501, 0.759772, 0.759772, 0.637501, 22.246023, 23.283071)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -33.440882 0.00064104 C -33.440882 1.099475 -34.334916 1.993509 -35.43375 1.993509 C -36.532584 1.993509 -37.426618 1.099475 -37.426618 0.00064104 C -37.426618 -1.102132 -36.532584 -1.992227 -35.43375 -1.992227 C -34.334916 -1.992227 -33.440882 -1.102132 -33.440882 0.00064104 Z M -33.440882 0.00064104 " transform="matrix(0.991818, 0, 0, -0.991818, 49.612587, 16.231105)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -19.266315 14.175209 C -19.266315 15.274043 -20.160348 16.164138 -21.259182 16.164138 C -22.361955 16.164138 -23.25205 15.274043 -23.25205 14.175209 C -23.25205 13.072436 -22.361955 12.182341 -21.259182 12.182341 C -20.160348 12.182341 -19.266315 13.072436 -19.266315 14.175209 Z M -19.266315 14.175209 " transform="matrix(0.991818, 0, 0, -0.991818, 49.612587, 16.231105)"/>
<g clip-path="url(#switch-gs-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.259182 14.175209 L 21.260582 14.175209 L 35.435149 0.00064104 L 49.605778 0.00064104 " transform="matrix(0.991818, 0, 0, -0.991818, 49.612587, 16.231105)"/>
</g>
<g clip-path="url(#switch-gs-clip-3)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 21.260582 -14.173926 L 35.435149 0.00064104 " transform="matrix(0.991818, 0, 0, -0.991818, 49.612587, 16.231105)"/>
</g>
<g clip-path="url(#switch-gs-clip-4)">
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 30.503906 30.289062 C 30.503906 29.195312 29.617188 28.3125 28.527344 28.3125 C 27.433594 28.3125 26.550781 29.195312 26.550781 30.289062 C 26.550781 31.378906 27.433594 32.265625 28.527344 32.265625 C 29.617188 32.265625 30.503906 31.378906 30.503906 30.289062 Z M 30.503906 30.289062 "/>
</g>
<g clip-path="url(#switch-gs-clip-5)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -19.266315 -14.173926 C -19.266315 -13.071154 -20.160348 -12.181059 -21.259182 -12.181059 C -22.361955 -12.181059 -23.25205 -13.071154 -23.25205 -14.173926 C -23.25205 -15.272761 -22.361955 -16.166794 -21.259182 -16.166794 C -20.160348 -16.166794 -19.266315 -15.272761 -19.266315 -14.173926 Z M -19.266315 -14.173926 " transform="matrix(0.991818, 0, 0, -0.991818, 49.612587, 16.231105)"/>
</g>
</svg></td><td><code>gs</code></td><td></td></tr>
</tbody>
</table>
</div>

## uscite / diffusori (oltre il canone WB)

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>stone</code></td><td><code>in</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63.96pt" height="62.83pt" viewBox="0 0 63.96 62.83">
<defs>
<g>
<g id="stone-gs-glyph-0-0">
<path d="M 6.09375 -2.328125 C 6.09375 -2.75 5.96875 -3.125 5.765625 -3.421875 C 5.546875 -3.703125 5.265625 -3.953125 4.9375 -4.171875 C 4.609375 -4.390625 4.265625 -4.5625 3.875 -4.734375 C 3.484375 -4.90625 3.125 -5.078125 2.8125 -5.265625 C 2.484375 -5.4375 2.203125 -5.65625 1.984375 -5.90625 C 1.765625 -6.140625 1.65625 -6.4375 1.65625 -6.796875 C 1.65625 -7.015625 1.703125 -7.25 1.8125 -7.484375 C 1.921875 -7.6875 2.0625 -7.90625 2.25 -8.09375 C 2.4375 -8.265625 2.671875 -8.421875 2.953125 -8.546875 C 3.234375 -8.65625 3.5625 -8.734375 3.9375 -8.734375 C 4.171875 -8.734375 4.4375 -8.6875 4.71875 -8.640625 C 5.015625 -8.5625 5.3125 -8.46875 5.625 -8.3125 L 5.71875 -8.34375 L 5.796875 -8.671875 C 5.4375 -8.84375 5.109375 -8.953125 4.796875 -9 C 4.46875 -9.046875 4.203125 -9.09375 3.96875 -9.09375 C 3.578125 -9.09375 3.203125 -9.015625 2.875 -8.90625 C 2.5625 -8.78125 2.265625 -8.625 2.046875 -8.421875 C 1.8125 -8.21875 1.625 -7.984375 1.5 -7.703125 C 1.359375 -7.421875 1.3125 -7.140625 1.3125 -6.828125 C 1.3125 -6.40625 1.40625 -6.046875 1.625 -5.765625 C 1.84375 -5.46875 2.125 -5.21875 2.453125 -5.015625 C 2.765625 -4.796875 3.125 -4.609375 3.53125 -4.453125 C 3.90625 -4.296875 4.265625 -4.109375 4.578125 -3.921875 C 4.90625 -3.71875 5.1875 -3.5 5.40625 -3.25 C 5.625 -3 5.75 -2.6875 5.75 -2.3125 C 5.75 -2.0625 5.671875 -1.8125 5.5625 -1.5625 C 5.453125 -1.3125 5.296875 -1.09375 5.09375 -0.90625 C 4.890625 -0.734375 4.640625 -0.578125 4.34375 -0.46875 C 4.046875 -0.34375 3.703125 -0.28125 3.34375 -0.28125 C 2.984375 -0.28125 2.625 -0.34375 2.234375 -0.453125 C 1.84375 -0.546875 1.5 -0.734375 1.203125 -0.96875 L 1.109375 -0.953125 L 1.09375 -0.609375 C 1.40625 -0.375 1.765625 -0.21875 2.1875 -0.109375 C 2.578125 0 2.96875 0.046875 3.34375 0.046875 C 3.734375 0.046875 4.109375 0 4.453125 -0.140625 C 4.796875 -0.265625 5.078125 -0.453125 5.328125 -0.65625 C 5.5625 -0.875 5.75 -1.125 5.890625 -1.40625 C 6.03125 -1.703125 6.09375 -2 6.09375 -2.328125 Z M 6.09375 -2.328125 "/>
</g>
<g id="stone-gs-glyph-0-1">
<path d="M 2.34375 -8.6875 L 3.671875 -8.6875 L 3.671875 0 L 4.03125 0 L 4.03125 -8.6875 L 5.390625 -8.6875 L 6.875 -8.671875 L 6.921875 -8.96875 L 6.890625 -9.046875 L 0.8125 -9.046875 L 0.75 -8.75 L 0.8125 -8.671875 Z M 2.34375 -8.6875 "/>
</g>
<g id="stone-gs-glyph-0-2">
<path d="M 4.859375 0.078125 C 6.15625 0.078125 7.140625 -0.328125 7.8125 -1.140625 C 8.5 -1.96875 8.859375 -3.125 8.859375 -4.671875 C 8.859375 -6.09375 8.515625 -7.1875 7.875 -7.96875 C 7.203125 -8.734375 6.265625 -9.125 5.03125 -9.125 C 3.71875 -9.125 2.734375 -8.71875 2.0625 -7.921875 C 1.375 -7.125 1.03125 -5.96875 1.03125 -4.484375 C 1.03125 -3 1.359375 -1.875 2.015625 -1.09375 C 2.6875 -0.296875 3.625 0.078125 4.859375 0.078125 Z M 5.015625 -8.75 C 6.140625 -8.75 7 -8.390625 7.609375 -7.6875 C 8.1875 -6.984375 8.5 -5.953125 8.5 -4.640625 C 8.5 -3.21875 8.171875 -2.140625 7.546875 -1.390625 C 6.921875 -0.640625 6.03125 -0.265625 4.859375 -0.265625 C 3.734375 -0.265625 2.875 -0.625 2.296875 -1.359375 C 1.703125 -2.078125 1.40625 -3.125 1.40625 -4.515625 C 1.40625 -5.890625 1.71875 -6.9375 2.328125 -7.65625 C 2.9375 -8.375 3.828125 -8.75 5.015625 -8.75 Z M 5.015625 -8.75 "/>
</g>
<g id="stone-gs-glyph-0-3">
<path d="M 2.296875 -2.828125 L 2.3125 -8.296875 L 2.359375 -8.296875 L 8.1875 0 L 8.546875 0 L 8.5625 -2.515625 L 8.59375 -9.078125 L 8.234375 -9.015625 L 8.21875 -0.734375 L 8.140625 -0.734375 L 2.3125 -9.046875 L 1.953125 -9.046875 L 1.9375 -2.6875 L 1.9375 0 L 2.296875 0 Z M 2.296875 -2.828125 "/>
</g>
<g id="stone-gs-glyph-0-4">
<path d="M 6.546875 0 L 6.625 -0.28125 L 6.5625 -0.34375 L 2.296875 -0.34375 L 2.296875 -4.34375 L 5.765625 -4.34375 L 5.8125 -4.65625 L 5.78125 -4.71875 L 2.296875 -4.71875 L 2.296875 -8.6875 L 6.5 -8.671875 L 6.5625 -8.96875 L 6.515625 -9.046875 L 1.9375 -9.046875 L 1.9375 0 Z M 6.546875 0 "/>
</g>
</g>
<clipPath id="stone-gs-clip-0">
<path clip-rule="nonzero" d="M 1 0 L 63 0 L 63 62.660156 L 1 62.660156 Z M 1 0 "/>
</clipPath>
<clipPath id="stone-gs-clip-1">
<path clip-rule="nonzero" d="M 0.0664062 0 L 63.855469 0 L 63.855469 62.660156 L 0.0664062 62.660156 Z M 0.0664062 0 "/>
</clipPath>
</defs>
<g clip-path="url(#stone-gs-clip-0)">
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 62.890625 31.332031 L 31.957031 0.398438 L 1.023438 31.332031 L 31.957031 62.261719 Z M 62.890625 31.332031 "/>
</g>
<g clip-path="url(#stone-gs-clip-1)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 31.01626 -0.00180676 L -0.0010309 31.015484 L -31.018322 -0.00180676 L -0.0010309 -31.015181 Z M 31.01626 -0.00180676 " transform="matrix(0.997302, 0, 0, -0.997302, 31.958059, 31.330229)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -30.583555 -0.00180676 L 30.58541 -0.00180676 " transform="matrix(0.997302, 0, 0, -0.997302, 31.958059, 31.330229)"/>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 9.636719 36.921875 L 54.277344 36.921875 L 54.277344 25.742188 L 9.636719 25.742188 Z M 9.636719 36.921875 "/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="10.630765" y="35.854987"/>
<use xlink:href="#glyph-0-1" x="17.856067" y="35.854987"/>
<use xlink:href="#glyph-0-2" x="25.510594" y="35.854987"/>
<use xlink:href="#glyph-0-3" x="35.400673" y="35.854987"/>
<use xlink:href="#glyph-0-4" x="45.916706" y="35.854987"/>
</g>
</svg></td><td><code>gs</code></td><td>diffusore S.T.One (rombo + diagonale)</td></tr>
<tr><td><code>lfe</code></td><td><code>in</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="68.83pt" height="68.83pt" viewBox="0 0 68.83 68.83">
<defs>
<g>
<g id="lfe-gs-glyph-0-0">
<path d="M 6.03125 -0.28125 L 6 -0.34375 L 2.265625 -0.34375 L 2.265625 -9.046875 L 1.921875 -9.046875 L 1.921875 0 L 5.96875 0 Z M 6.03125 -0.28125 "/>
</g>
<g id="lfe-gs-glyph-0-1">
<path d="M 2.1875 -4.34375 L 5.5 -4.34375 L 5.546875 -4.640625 L 5.5 -4.71875 L 4.03125 -4.703125 L 2.1875 -4.703125 L 2.1875 -8.6875 L 6.21875 -8.671875 L 6.28125 -8.96875 L 6.25 -9.046875 L 1.828125 -9.046875 L 1.828125 0 L 2.1875 0 Z M 2.1875 -4.34375 "/>
</g>
<g id="lfe-gs-glyph-0-2">
<path d="M 6.546875 0 L 6.625 -0.28125 L 6.5625 -0.34375 L 2.296875 -0.34375 L 2.296875 -4.34375 L 5.765625 -4.34375 L 5.8125 -4.65625 L 5.78125 -4.71875 L 2.296875 -4.71875 L 2.296875 -8.6875 L 6.5 -8.671875 L 6.5625 -8.96875 L 6.515625 -9.046875 L 1.9375 -9.046875 L 1.9375 0 Z M 6.546875 0 "/>
</g>
</g>
<clipPath id="lfe-gs-clip-0">
<path clip-rule="nonzero" d="M 0 0 L 68.660156 0 L 68.660156 68.660156 L 0 68.660156 Z M 0 0 "/>
</clipPath>
</defs>
<g clip-path="url(#lfe-gs-clip-0)">
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 34.016315 -0.000826329 C 34.016315 18.787652 18.787388 34.016578 -0.00108957 34.016578 C -18.785652 34.016578 -34.014578 18.787652 -34.014578 -0.000826329 C -34.014578 -18.785388 -18.785652 -34.014315 -0.00108957 -34.014315 C 18.787388 -34.014315 34.016315 -18.785388 34.016315 -0.000826329 Z M 34.016315 -0.000826329 " transform="matrix(0.997536, 0, 0, -0.997536, 34.329212, 34.331207)"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="24.07853" y="38.857029"/>
<use xlink:href="#glyph-0-1" x="30.607875" y="38.857029"/>
<use xlink:href="#glyph-0-2" x="37.208775" y="38.857029"/>
</g>
</svg></td><td><code>gs</code></td><td>diffusore LFE / subwoofer (cerchio)</td></tr>
</tbody>
</table>
</div>

## trasduttori d'ingresso (oltre il canone WB)

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>soundfield</code></td><td><code>o1,o2,o3,o4</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.74pt" height="42.92pt" viewBox="0 0 28.74 42.92">
<defs>
<clipPath id="soundfield-gs-clip-0">
<path clip-rule="nonzero" d="M 9 19 L 11 19 L 11 42.6875 L 9 42.6875 Z M 9 19 "/>
</clipPath>
<clipPath id="soundfield-gs-clip-1">
<path clip-rule="nonzero" d="M 12 19 L 14 19 L 14 42.6875 L 12 42.6875 Z M 12 19 "/>
</clipPath>
<clipPath id="soundfield-gs-clip-2">
<path clip-rule="nonzero" d="M 15 19 L 16 19 L 16 42.6875 L 15 42.6875 Z M 15 19 "/>
</clipPath>
<clipPath id="soundfield-gs-clip-3">
<path clip-rule="nonzero" d="M 18 19 L 19 19 L 19 42.6875 L 18 42.6875 Z M 18 19 "/>
</clipPath>
<clipPath id="soundfield-gs-clip-4">
<path clip-rule="nonzero" d="M 0 0.152344 L 28.480469 0.152344 L 28.480469 29 L 0 29 Z M 0 0.152344 "/>
</clipPath>
<clipPath id="soundfield-gs-clip-5">
<path clip-rule="nonzero" d="M 0 0.152344 L 28.480469 0.152344 L 28.480469 35 L 0 35 Z M 0 0.152344 "/>
</clipPath>
<clipPath id="soundfield-gs-clip-6">
<path clip-rule="nonzero" d="M 4 0.152344 L 25 0.152344 L 25 18 L 4 18 Z M 4 0.152344 "/>
</clipPath>
<clipPath id="soundfield-gs-clip-7">
<path clip-rule="nonzero" d="M 11 4 L 28.480469 4 L 28.480469 25 L 11 25 Z M 11 4 "/>
</clipPath>
</defs>
<g clip-path="url(#soundfield-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -4.250001 -5.668558 L -4.250001 -28.348458 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
<g clip-path="url(#soundfield-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -1.415999 -5.668558 L -1.415999 -28.348458 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
<g clip-path="url(#soundfield-gs-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 1.418003 -5.668558 L 1.418003 -28.348458 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
<g clip-path="url(#soundfield-gs-clip-3)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 4.252005 -5.668558 L 4.252005 -28.348458 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
<g clip-path="url(#soundfield-gs-clip-4)">
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 28.289062 14.398438 C 28.289062 6.640625 22 0.351562 14.242188 0.351562 C 6.484375 0.351562 0.195312 6.640625 0.195312 14.398438 C 0.195312 22.15625 6.484375 28.445312 14.242188 28.445312 C 22 28.445312 28.289062 22.15625 28.289062 14.398438 Z M 28.289062 14.398438 "/>
</g>
<g clip-path="url(#soundfield-gs-clip-5)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.172983 -0.000554193 C 14.172983 7.82744 7.827026 14.173398 -0.000968772 14.173398 C -7.828963 14.173398 -14.174921 7.82744 -14.174921 -0.000554193 C -14.174921 -7.828549 -7.828963 -14.174506 -0.000968772 -14.174506 C 7.827026 -14.174506 14.172983 -7.828549 14.172983 -0.000554193 Z M 14.172983 -0.000554193 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
<g clip-path="url(#soundfield-gs-clip-6)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.086007 7.086422 C 7.086007 11.000419 3.913028 14.173398 -0.000968772 14.173398 C -3.914966 14.173398 -7.087945 11.000419 -7.087945 7.086422 C -7.087945 3.172424 -3.914966 -0.000554193 -0.000968772 -0.000554193 C 3.913028 -0.000554193 7.086007 3.172424 7.086007 7.086422 Z M 7.086007 7.086422 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.086007 -7.08753 C 7.086007 -3.173533 3.913028 -0.000554193 -0.000968772 -0.000554193 C -3.914966 -0.000554193 -7.087945 -3.173533 -7.087945 -7.08753 C -7.087945 -11.001527 -3.914966 -14.174506 -0.000968772 -14.174506 C 3.913028 -14.174506 7.086007 -11.001527 7.086007 -7.08753 Z M 7.086007 -7.08753 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
<g clip-path="url(#soundfield-gs-clip-7)">
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.172983 -0.000554193 C 14.172983 3.913443 11.000004 7.086422 7.086007 7.086422 C 3.17201 7.086422 -0.000968772 3.913443 -0.000968772 -0.000554193 C -0.000968772 -3.914551 3.17201 -7.08753 7.086007 -7.08753 C 11.000004 -7.08753 14.172983 -3.914551 14.172983 -0.000554193 Z M 14.172983 -0.000554193 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000968772 -0.000554193 C -0.000968772 3.913443 -3.173947 7.086422 -7.087945 7.086422 C -11.001942 7.086422 -14.174921 3.913443 -14.174921 -0.000554193 C -14.174921 -3.914551 -11.001942 -7.08753 -7.087945 -7.08753 C -3.173947 -7.08753 -0.000968772 -3.914551 -0.000968772 -0.000554193 Z M -0.000968772 -0.000554193 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.086007 -0.000554193 C 7.086007 3.913443 3.913028 7.086422 -0.000968772 7.086422 C -3.914966 7.086422 -7.087945 3.913443 -7.087945 -0.000554193 C -7.087945 -3.914551 -3.914966 -7.08753 -0.000968772 -7.08753 C 3.913028 -7.08753 7.086007 -3.914551 7.086007 -0.000554193 Z M 7.086007 -0.000554193 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</svg></td><td><code>gs</code></td><td>Soundfield ST450 (4 capsule -> 4 uscite separate)</td></tr>
<tr><td><code>st450</code></td><td><code>i1,i2,i3,i4,o1,o2,o3,o4</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.92pt" height="29.14pt" viewBox="0 0 42.92 29.14">
<defs>
<g>
<g id="st450-gs-glyph-0-0">
<path d="M 0.421875 0 L 0.515625 -0.171875 L 1.4375 -1.375 L 2.328125 -0.1875 L 2.453125 0 L 2.609375 0 L 1.5 -1.46875 L 2.515625 -2.9375 L 2.359375 -2.9375 L 2.25 -2.75 L 1.4375 -1.5625 L 0.59375 -2.765625 L 0.5 -2.9375 L 0.328125 -2.9375 L 1.359375 -1.46875 L 0.265625 0 Z M 0.421875 0 "/>
</g>
<g id="st450-gs-glyph-0-1">
<path d="M 1.5 -2.71875 L 1.5 -1.078125 L 0.34375 -1.078125 L 1.46875 -2.71875 Z M 2.140625 -0.953125 L 2.15625 -1.0625 L 2.140625 -1.078125 L 1.609375 -1.078125 L 1.609375 -2.9375 L 1.5 -2.9375 L 0.203125 -1.078125 L 0.203125 -0.96875 L 0.21875 -0.953125 L 0.4375 -0.96875 L 1.5 -0.96875 L 1.5 0 L 1.609375 0 L 1.609375 -0.96875 L 1.765625 -0.96875 Z M 2.140625 -0.953125 "/>
</g>
</g>
<clipPath id="st450-gs-clip-0">
<path clip-rule="nonzero" d="M 7 0 L 36 0 L 36 28.304688 L 7 28.304688 Z M 7 0 "/>
</clipPath>
<clipPath id="st450-gs-clip-1">
<path clip-rule="nonzero" d="M 0.578125 18 L 8 18 L 8 19 L 0.578125 19 Z M 0.578125 18 "/>
</clipPath>
<clipPath id="st450-gs-clip-2">
<path clip-rule="nonzero" d="M 34 18 L 42.265625 18 L 42.265625 19 L 34 19 Z M 34 18 "/>
</clipPath>
<clipPath id="st450-gs-clip-3">
<path clip-rule="nonzero" d="M 0.578125 15 L 8 15 L 8 16 L 0.578125 16 Z M 0.578125 15 "/>
</clipPath>
<clipPath id="st450-gs-clip-4">
<path clip-rule="nonzero" d="M 34 15 L 42.265625 15 L 42.265625 16 L 34 16 Z M 34 15 "/>
</clipPath>
<clipPath id="st450-gs-clip-5">
<path clip-rule="nonzero" d="M 0.578125 12 L 8 12 L 8 13 L 0.578125 13 Z M 0.578125 12 "/>
</clipPath>
<clipPath id="st450-gs-clip-6">
<path clip-rule="nonzero" d="M 34 12 L 42.265625 12 L 42.265625 13 L 34 13 Z M 34 12 "/>
</clipPath>
<clipPath id="st450-gs-clip-7">
<path clip-rule="nonzero" d="M 0.578125 9 L 8 9 L 8 11 L 0.578125 11 Z M 0.578125 9 "/>
</clipPath>
<clipPath id="st450-gs-clip-8">
<path clip-rule="nonzero" d="M 34 9 L 42.265625 9 L 42.265625 11 L 34 11 Z M 34 9 "/>
</clipPath>
</defs>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 7.652344 27.917969 L 7.652344 0.382812 L 35.1875 0.382812 L 35.1875 27.917969 Z M 7.652344 27.917969 "/>
<g clip-path="url(#st450-gs-clip-0)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.174157 -14.172903 L -14.174157 14.17489 L 14.173636 14.17489 L 14.173636 -14.172903 Z M -14.174157 -14.172903 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#st450-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.2601 -4.251779 L -14.174157 -4.251779 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#st450-gs-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173636 -4.251779 L 21.259578 -4.251779 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#st450-gs-clip-3)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.2601 -1.416598 L -14.174157 -1.416598 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#st450-gs-clip-4)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173636 -1.416598 L 21.259578 -1.416598 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#st450-gs-clip-5)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.2601 1.418584 L -14.174157 1.418584 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#st450-gs-clip-6)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173636 1.418584 L 21.259578 1.418584 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#st450-gs-clip-7)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -21.2601 4.253765 L -14.174157 4.253765 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<g clip-path="url(#st450-gs-clip-8)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.173636 4.253765 L 21.259578 4.253765 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -9.923396 -8.50254 L 5.153335 6.570169 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 2.417584 -0.000400172 C 2.121841 0.096285 0.816592 0.628053 -0.00238846 1.213852 L 0.000455222 -1.211808 C 0.816592 -0.628854 2.124685 -0.0942417 2.417584 -0.000400172 Z M 2.417584 -0.000400172 " transform="matrix(0.68683, -0.68683, -0.68683, -0.68683, 26.425194, 7.769569)"/>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 7.087693 -0.00101759 L -5.668613 7.362411 L -5.668613 -7.364446 Z M 7.087693 -0.00101759 " transform="matrix(0.971333, 0, 0, -0.971333, 21.420175, 14.151355)"/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="16.816055" y="15.620011"/>
<use xlink:href="#glyph-0-1" x="19.742401" y="15.620011"/>
</g>
</svg></td><td><code>gs</code></td><td>pre dedicato ST450 (4 in -> 4 out)</td></tr>
<tr><td><code>pzpickup</code></td><td><code>out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36.63pt" height="43.32pt" viewBox="0 0 36.63 43.32">
<defs>
<clipPath id="pzpickup-gs-clip-0">
<path clip-rule="nonzero" d="M 0.101562 0 L 35 0 L 35 35 L 0.101562 35 Z M 0.101562 0 "/>
</clipPath>
<clipPath id="pzpickup-gs-clip-1">
<path clip-rule="nonzero" d="M 2 0 L 36.164062 0 L 36.164062 35 L 2 35 Z M 2 0 "/>
</clipPath>
<clipPath id="pzpickup-gs-clip-2">
<path clip-rule="nonzero" d="M 0.101562 0 L 36.164062 0 L 36.164062 2 L 0.101562 2 Z M 0.101562 0 "/>
</clipPath>
<clipPath id="pzpickup-gs-clip-3">
<path clip-rule="nonzero" d="M 17 27 L 19 27 L 19 42.652344 L 17 42.652344 Z M 17 27 "/>
</clipPath>
</defs>
<g clip-path="url(#pzpickup-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 10.630065 -0.0012193 C 10.630065 7.82679 4.285925 14.174897 -3.542085 14.174897 C -11.370094 14.174897 -17.718201 7.82679 -17.718201 -0.0012193 C -17.718201 -7.829229 -11.370094 -14.173368 -3.542085 -14.173368 C 4.285925 -14.173368 10.630065 -7.829229 10.630065 -0.0012193 Z M 10.630065 -0.0012193 " transform="matrix(0.984545, 0, 0, -0.984545, 18.131875, 14.545675)"/>
</g>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 35.574219 14.546875 C 35.574219 6.839844 29.328125 0.589844 21.621094 0.589844 C 13.914062 0.589844 7.667969 6.839844 7.667969 14.546875 C 7.667969 22.253906 13.914062 28.5 21.621094 28.5 C 29.328125 28.5 35.574219 22.253906 35.574219 14.546875 Z M 35.574219 14.546875 "/>
<g clip-path="url(#pzpickup-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 17.716139 -0.0012193 C 17.716139 7.82679 11.372 14.174897 3.54399 14.174897 C -4.28402 14.174897 -10.628159 7.82679 -10.628159 -0.0012193 C -10.628159 -7.829229 -4.28402 -14.173368 3.54399 -14.173368 C 11.372 -14.173368 17.716139 -7.829229 17.716139 -0.0012193 Z M 17.716139 -0.0012193 " transform="matrix(0.984545, 0, 0, -0.984545, 18.131875, 14.545675)"/>
</g>
<path fill="none" stroke-width="0.19925" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 10.630065 -0.0012193 C 10.630065 3.914769 7.456011 7.084855 3.54399 7.084855 C -0.371999 7.084855 -3.542085 3.914769 -3.542085 -0.0012193 C -3.542085 -3.91324 -0.371999 -7.087294 3.54399 -7.087294 C 7.456011 -7.087294 10.630065 -3.91324 10.630065 -0.0012193 Z M 10.630065 -0.0012193 " transform="matrix(0.984545, 0, 0, -0.984545, 18.131875, 14.545675)"/>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 1.274542 -0.0012193 L 5.809471 -0.0012193 M 3.54399 -2.2667 L 3.54399 2.268229 " transform="matrix(0.984545, 0, 0, -0.984545, 18.131875, 14.545675)"/>
<g clip-path="url(#pzpickup-gs-clip-2)">
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -17.718201 14.174897 L 17.716139 14.174897 " transform="matrix(0.984545, 0, 0, -0.984545, 18.131875, 14.545675)"/>
</g>
<g clip-path="url(#pzpickup-gs-clip-3)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000952678 -13.721066 L 0.000952678 -28.345518 " transform="matrix(0.984545, 0, 0, -0.984545, 18.131875, 14.545675)"/>
</g>
</svg></td><td><code>gs</code></td><td>pickup piezo bilanciato (sandwich di due dischi)</td></tr>
</tbody>
</table>
</div>

## catena aria compressa (sub)

<div class="sean-table-wrap">
<table class="sean-glyphs">
<thead><tr><th>Sign</th><th>Anchors</th><th>WB</th><th>GS</th><th>GS from</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>scuba</code></td><td><code>out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.74pt" height="42.92pt" viewBox="0 0 28.74 42.92">
<defs>
<g>
<g id="scuba-gs-glyph-0-0">
<path d="M 6.0625 -2.3125 C 6.0625 -2.734375 5.9375 -3.109375 5.71875 -3.390625 C 5.5 -3.671875 5.21875 -3.921875 4.90625 -4.140625 C 4.578125 -4.359375 4.234375 -4.53125 3.859375 -4.703125 C 3.46875 -4.875 3.109375 -5.046875 2.796875 -5.21875 C 2.46875 -5.40625 2.1875 -5.609375 1.96875 -5.859375 C 1.765625 -6.09375 1.65625 -6.390625 1.65625 -6.75 C 1.65625 -6.96875 1.6875 -7.1875 1.796875 -7.421875 C 1.90625 -7.640625 2.046875 -7.859375 2.234375 -8.03125 C 2.421875 -8.203125 2.640625 -8.375 2.9375 -8.484375 C 3.21875 -8.59375 3.53125 -8.671875 3.90625 -8.671875 C 4.140625 -8.671875 4.40625 -8.640625 4.6875 -8.578125 C 4.96875 -8.515625 5.28125 -8.40625 5.578125 -8.265625 L 5.6875 -8.28125 L 5.75 -8.609375 C 5.40625 -8.78125 5.078125 -8.875 4.765625 -8.9375 C 4.4375 -8.984375 4.171875 -9.03125 3.9375 -9.03125 C 3.546875 -9.03125 3.1875 -8.953125 2.859375 -8.84375 C 2.546875 -8.71875 2.25 -8.5625 2.03125 -8.375 C 1.796875 -8.15625 1.609375 -7.921875 1.5 -7.65625 C 1.34375 -7.375 1.296875 -7.09375 1.296875 -6.78125 C 1.296875 -6.359375 1.40625 -6 1.609375 -5.71875 C 1.828125 -5.4375 2.109375 -5.1875 2.4375 -4.96875 C 2.75 -4.765625 3.109375 -4.578125 3.5 -4.421875 C 3.875 -4.265625 4.234375 -4.09375 4.546875 -3.890625 C 4.875 -3.6875 5.15625 -3.484375 5.359375 -3.234375 C 5.578125 -2.984375 5.703125 -2.671875 5.703125 -2.296875 C 5.703125 -2.046875 5.625 -1.796875 5.53125 -1.546875 C 5.421875 -1.296875 5.265625 -1.078125 5.0625 -0.90625 C 4.84375 -0.734375 4.59375 -0.5625 4.3125 -0.46875 C 4.015625 -0.34375 3.671875 -0.28125 3.328125 -0.28125 C 2.96875 -0.28125 2.609375 -0.34375 2.21875 -0.4375 C 1.828125 -0.546875 1.5 -0.734375 1.1875 -0.953125 L 1.09375 -0.9375 L 1.078125 -0.609375 C 1.40625 -0.375 1.765625 -0.21875 2.171875 -0.109375 C 2.5625 0 2.953125 0.046875 3.328125 0.046875 C 3.71875 0.046875 4.09375 0 4.421875 -0.140625 C 4.765625 -0.265625 5.046875 -0.4375 5.296875 -0.65625 C 5.53125 -0.875 5.703125 -1.125 5.84375 -1.40625 C 5.984375 -1.6875 6.0625 -1.984375 6.0625 -2.3125 Z M 6.0625 -2.3125 "/>
</g>
<g id="scuba-gs-glyph-0-1">
<path d="M 7.484375 -8.21875 C 7.125 -8.46875 6.71875 -8.6875 6.265625 -8.828125 C 5.8125 -8.96875 5.359375 -9.046875 4.921875 -9.046875 C 3.65625 -9.046875 2.703125 -8.640625 2.03125 -7.859375 C 1.34375 -7.078125 1.03125 -5.9375 1.03125 -4.453125 C 1.03125 -2.984375 1.328125 -1.859375 1.96875 -1.078125 C 2.609375 -0.296875 3.53125 0.078125 4.765625 0.078125 C 5.203125 0.078125 5.671875 0 6.125 -0.15625 C 6.59375 -0.296875 7.03125 -0.53125 7.46875 -0.828125 L 7.5 -1.171875 L 7.390625 -1.203125 C 7 -0.90625 6.59375 -0.671875 6.125 -0.515625 C 5.671875 -0.34375 5.203125 -0.265625 4.75 -0.265625 C 3.65625 -0.265625 2.828125 -0.625 2.25 -1.328125 C 1.6875 -2.046875 1.40625 -3.09375 1.40625 -4.453125 C 1.40625 -5.828125 1.6875 -6.875 2.296875 -7.609375 C 2.890625 -8.3125 3.765625 -8.6875 4.921875 -8.6875 C 5.34375 -8.6875 5.75 -8.609375 6.171875 -8.46875 C 6.5625 -8.328125 6.921875 -8.15625 7.265625 -7.90625 L 7.375 -7.90625 Z M 7.484375 -8.21875 "/>
</g>
</g>
<clipPath id="scuba-gs-clip-0">
<path clip-rule="nonzero" d="M 0 0.152344 L 28.480469 0.152344 L 28.480469 35 L 0 35 Z M 0 0.152344 "/>
</clipPath>
<clipPath id="scuba-gs-clip-1">
<path clip-rule="nonzero" d="M 14 28 L 15 28 L 15 42.6875 L 14 42.6875 Z M 14 28 "/>
</clipPath>
</defs>
<g clip-path="url(#scuba-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.172983 -0.000554193 C 14.172983 7.82744 7.827026 14.173398 -0.000968772 14.173398 C -7.828963 14.173398 -14.174921 7.82744 -14.174921 -0.000554193 C -14.174921 -7.828549 -7.828963 -14.174506 -0.000968772 -14.174506 C 7.827026 -14.174506 14.172983 -7.828549 14.172983 -0.000554193 Z M 14.172983 -0.000554193 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 5.515625 19.945312 L 22.96875 19.945312 L 22.96875 8.851562 L 5.515625 8.851562 Z M 5.515625 19.945312 "/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="6.503168" y="18.885292"/>
<use xlink:href="#glyph-0-1" x="13.683066" y="18.885292"/>
</g>
<g clip-path="url(#scuba-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.000968772 -14.174506 L -0.000968772 -28.348458 " transform="matrix(0.991034, 0, 0, -0.991034, 14.243148, 14.397888)"/>
</g>
</svg></td><td><code>gs</code></td><td></td></tr>
<tr><td><code>firststage</code></td><td><code>in,man,o1,o2,o3,o4</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="43.12pt" height="57.09pt" viewBox="0 0 43.12 57.09">
<defs>
<g>
<g id="firststage-gs-glyph-0-0">
<path d="M 1 -1.90625 L 3.59375 -1.90625 L 3.59375 0 L 3.75 0 L 3.75 -3.953125 L 3.59375 -3.953125 L 3.59375 -2.0625 L 1 -2.0625 L 1 -3.953125 L 0.84375 -3.953125 L 0.84375 0 L 1 0 Z M 1 -1.90625 "/>
</g>
<g id="firststage-gs-glyph-0-1">
<path d="M 1 0 L 1 -1.5 L 1.5625 -1.5 C 2 -1.5 2.34375 -1.609375 2.59375 -1.84375 C 2.828125 -2.078125 2.953125 -2.40625 2.953125 -2.84375 C 2.953125 -3.203125 2.84375 -3.46875 2.640625 -3.671875 C 2.4375 -3.859375 2.15625 -3.96875 1.78125 -3.96875 L 0.84375 -3.953125 L 0.84375 0 Z M 1 -1.65625 L 1 -3.8125 L 1.8125 -3.8125 C 2.125 -3.796875 2.359375 -3.703125 2.53125 -3.53125 C 2.703125 -3.359375 2.78125 -3.125 2.78125 -2.828125 C 2.78125 -2.484375 2.6875 -2.21875 2.515625 -2.015625 C 2.34375 -1.8125 2.09375 -1.6875 1.765625 -1.65625 Z M 1 -1.65625 "/>
</g>
<g id="firststage-gs-glyph-0-2">
<path d="M 2.640625 -0.125 L 2.625 -0.15625 L 1 -0.15625 L 1 -3.953125 L 0.84375 -3.953125 L 0.84375 0 L 2.609375 0 Z M 2.640625 -0.125 "/>
</g>
</g>
<clipPath id="firststage-gs-clip-0">
<path clip-rule="nonzero" d="M 14 0.125 L 15 0.125 L 15 15 L 14 15 Z M 14 0.125 "/>
</clipPath>
<clipPath id="firststage-gs-clip-1">
<path clip-rule="nonzero" d="M 27 27 L 42.257812 27 L 42.257812 29 L 27 29 Z M 27 27 "/>
</clipPath>
<clipPath id="firststage-gs-clip-2">
<path clip-rule="nonzero" d="M 9 41 L 11 41 L 11 56.074219 L 9 56.074219 Z M 9 41 "/>
</clipPath>
<clipPath id="firststage-gs-clip-3">
<path clip-rule="nonzero" d="M 12 41 L 14 41 L 14 56.074219 L 12 56.074219 Z M 12 41 "/>
</clipPath>
<clipPath id="firststage-gs-clip-4">
<path clip-rule="nonzero" d="M 15 41 L 16 41 L 16 56.074219 L 15 56.074219 Z M 15 41 "/>
</clipPath>
<clipPath id="firststage-gs-clip-5">
<path clip-rule="nonzero" d="M 18 41 L 19 41 L 19 56.074219 L 18 56.074219 Z M 18 41 "/>
</clipPath>
</defs>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173403 -14.172634 L -14.173403 14.171594 L 14.174811 14.171594 L 14.174811 -14.172634 Z M -14.173403 -14.172634 " transform="matrix(0.98, 0, 0, -0.98, 14.28056, 28.0991)"/>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173403 14.171594 L 14.174811 -14.172634 " transform="matrix(0.98, 0, 0, -0.98, 14.28056, 28.0991)"/>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-0" x="14.99988" y="24.52308"/>
<use xlink:href="#glyph-0-1" x="19.59257" y="24.52308"/>
</g>
<g fill="currentColor" fill-opacity="1">
<use xlink:href="#glyph-0-2" x="6.42586" y="35.6353"/>
<use xlink:href="#glyph-0-1" x="9.276765" y="35.6353"/>
</g>
<g clip-path="url(#firststage-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000704082 14.171594 L 0.000704082 28.345702 " transform="matrix(0.98, 0, 0, -0.98, 14.28056, 28.0991)"/>
</g>
<g clip-path="url(#firststage-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.174811 0.00147321 L 28.344932 0.00147321 " transform="matrix(0.98, 0, 0, -0.98, 14.28056, 28.0991)"/>
</g>
<g clip-path="url(#firststage-gs-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -4.252325 -14.172634 L -4.252325 -28.346741 " transform="matrix(0.98, 0, 0, -0.98, 14.28056, 28.0991)"/>
</g>
<g clip-path="url(#firststage-gs-clip-3)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -1.418301 -14.172634 L -1.418301 -28.346741 " transform="matrix(0.98, 0, 0, -0.98, 14.28056, 28.0991)"/>
</g>
<g clip-path="url(#firststage-gs-clip-4)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 1.415723 -14.172634 L 1.415723 -28.346741 " transform="matrix(0.98, 0, 0, -0.98, 14.28056, 28.0991)"/>
</g>
<g clip-path="url(#firststage-gs-clip-5)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 4.253733 -14.172634 L 4.253733 -28.346741 " transform="matrix(0.98, 0, 0, -0.98, 14.28056, 28.0991)"/>
</g>
</svg></td><td><code>gs</code></td><td></td></tr>
<tr><td><code>manometer</code></td><td><code>in</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.92pt" height="28.74pt" viewBox="0 0 42.92 28.74">
<defs>
<clipPath id="manometer-gs-clip-0">
<path clip-rule="nonzero" d="M 8 0 L 42.6875 0 L 42.6875 28.480469 L 8 28.480469 Z M 8 0 "/>
</clipPath>
<clipPath id="manometer-gs-clip-1">
<path clip-rule="nonzero" d="M 0.152344 14 L 15 14 L 15 15 L 0.152344 15 Z M 0.152344 14 "/>
</clipPath>
</defs>
<g clip-path="url(#manometer-gs-clip-0)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 14.172516 -0.0000896399 C 14.172516 7.827905 7.826559 14.173862 -0.00143559 14.173862 C -7.82943 14.173862 -14.171446 7.827905 -14.171446 -0.0000896399 C -14.171446 -7.828084 -7.82943 -14.174041 -0.00143559 -14.174041 C 7.826559 -14.174041 14.172516 -7.828084 14.172516 -0.0000896399 Z M 14.172516 -0.0000896399 " transform="matrix(0.991034, 0, 0, -0.991034, 28.442829, 14.238192)"/>
</g>
<g clip-path="url(#manometer-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.171446 -0.0000896399 L -28.345398 -0.0000896399 " transform="matrix(0.991034, 0, 0, -0.991034, 28.442829, 14.238192)"/>
</g>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.00143559 -0.0000896399 L 4.633872 8.001335 " transform="matrix(0.991034, 0, 0, -0.991034, 28.442829, 14.238192)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 2.572836 0.00239255 C 2.255953 0.101327 0.868135 0.673377 0.000262566 1.291373 L -0.00232395 -1.292547 C 0.867379 -0.67065 2.254152 -0.100115 2.572836 0.00239255 Z M 2.572836 0.00239255 " transform="matrix(0.496508, -0.857661, -0.857661, -0.496508, 33.033211, 6.309371)"/>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.995786 -0.0000896399 C 0.995786 0.551733 0.550387 0.997132 -0.00143559 0.997132 C -0.549316 0.997132 -0.994716 0.551733 -0.994716 -0.0000896399 C -0.994716 -0.551912 -0.549316 -0.997311 -0.00143559 -0.997311 C 0.550387 -0.997311 0.995786 -0.551912 0.995786 -0.0000896399 Z M 0.995786 -0.0000896399 " transform="matrix(0.991034, 0, 0, -0.991034, 28.442829, 14.238192)"/>
</svg></td><td><code>gs</code></td><td></td></tr>
<tr><td><code>tap</code></td><td><code>in,out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.14pt" height="57.09pt" viewBox="0 0 29.14 57.09">
<defs>
<clipPath id="tap-gs-clip-0">
<path clip-rule="nonzero" d="M 0 13 L 28.304688 13 L 28.304688 43 L 0 43 Z M 0 13 "/>
</clipPath>
<clipPath id="tap-gs-clip-1">
<path clip-rule="nonzero" d="M 13 0.375 L 15 0.375 L 15 15 L 13 15 Z M 13 0.375 "/>
</clipPath>
<clipPath id="tap-gs-clip-2">
<path clip-rule="nonzero" d="M 8 22 L 28.304688 22 L 28.304688 45 L 8 45 Z M 8 22 "/>
</clipPath>
<clipPath id="tap-gs-clip-3">
<path clip-rule="nonzero" d="M 13 41 L 15 41 L 15 55.828125 L 13 55.828125 Z M 13 41 "/>
</clipPath>
</defs>
<path fill-rule="nonzero" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 0.386719 41.871094 L 0.386719 14.335938 L 27.921875 14.335938 L 27.921875 41.871094 Z M 0.386719 41.871094 "/>
<g clip-path="url(#tap-gs-clip-0)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -14.173868 -14.174383 L -14.173868 14.17341 L 14.173925 14.17341 L 14.173925 -14.174383 Z M -14.173868 -14.174383 " transform="matrix(0.971333, 0, 0, -0.971333, 14.154269, 28.103043)"/>
</g>
<g clip-path="url(#tap-gs-clip-1)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.00198241 14.17341 L -0.00198241 28.345296 " transform="matrix(0.971333, 0, 0, -0.971333, 14.154269, 28.103043)"/>
</g>
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.00198241 0.00152454 L 10.771707 0.00152454 " transform="matrix(0.971333, 0, 0, -0.971333, 14.154269, 28.103043)"/>
<g clip-path="url(#tap-gs-clip-2)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-dasharray="0.3985 1.99255" stroke-miterlimit="10" d="M 10.771707 0.00152454 C 10.771707 -5.950346 5.949888 -10.772165 -0.00198241 -10.772165 " transform="matrix(0.971333, 0, 0, -0.971333, 14.154269, 28.103043)"/>
</g>
<path fill-rule="nonzero" fill="currentColor" fill-opacity="1" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 1.494028 0.00152454 C 1.494028 0.825939 0.826454 1.493514 -0.00198241 1.493514 C -0.826397 1.493514 -1.493972 0.825939 -1.493972 0.00152454 C -1.493972 -0.826911 -0.826397 -1.494486 -0.00198241 -1.494486 C 0.826454 -1.494486 1.494028 -0.826911 1.494028 0.00152454 Z M 1.494028 0.00152454 " transform="matrix(0.971333, 0, 0, -0.971333, 14.154269, 28.103043)"/>
<g clip-path="url(#tap-gs-clip-3)">
<path fill="none" stroke-width="0.3985" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M -0.00198241 -14.174383 L -0.00198241 -28.346268 " transform="matrix(0.971333, 0, 0, -0.971333, 14.154269, 28.103043)"/>
</g>
</svg></td><td><code>gs</code></td><td></td></tr>
<tr><td><code>needle</code></td><td><code>in,out</code></td><td></td><td class="glyph"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.2pt" height="29.54pt" viewBox="0 0 1.2 29.54">
<defs>
<clipPath id="needle-gs-clip-0">
<path clip-rule="nonzero" d="M 0 5.769531 L 0.71875 5.769531 L 0.71875 23.492188 L 0 23.492188 Z M 0 5.769531 "/>
</clipPath>
</defs>
<g clip-path="url(#needle-gs-clip-0)">
<path fill="none" stroke-width="1.19553" stroke-linecap="butt" stroke-linejoin="miter" stroke="currentColor" stroke-opacity="1" stroke-miterlimit="10" d="M 0.000958333 14.170823 L 0.000958333 -14.175531 " transform="matrix(0.6, 0, 0, -0.6, 0.3588, 14.6314)"/>
</g>
</svg></td><td><code>gs</code></td><td></td></tr>
</tbody>
</table>
</div>
