# Vue.js Learning Videos
Source Videos Learning : https://www.youtube.com/playlist?list=PLnrs9DcLyeJQ0ZqgkIRRII4kIyc5Hbt3F

## VIDEO 1: Cara Install Vue JS

1. Cara instal Vue bisa lewat CDN dan ES modul.
2. Cara render bisa pakai mustache `{{ }}`.
3. Biasakan menggunakan ES Modul untuk proyek Vue.
4. `createApp.mount` untuk meletakkan Vue di HTML.

## VIDEO 2: `v-text` & `v-html` Directive

1. Selain menggunakan mustache, bisa menggunakan `v-text`.
2. Cara kerja `v-text` akan mereplace semua teks yang ada di tag tersebut.
3. Directive `v-html` akan mereplace teks BESERTA dengan tag HTML-nya (`<strong>`, dll).

## VIDEO 3: If Else Vue Conditional Rendering | `v-if`, `v-else`, `v-else-if`, `v-show`

1. Taruh `v-if` di dalam tag yang kita mau (`<div v-if>`).
2. `v-else` sama seperti `v-if`.
3. `v-else-if`.
4. `v-show` mirip dengan `v-if`, namun cara Vue melakukan sesuatu di antara mereka adalah dengan mengatur menjadi `display: none`.

### Kapan Menggunakan `v-if` dan `v-show` 
- `v-show` untuk dynamic (gampang berubah).
- `v-if` untuk sekali ambil (dari database).

## VIDEO 4: Looping `v-for` | Perulangan `v-for` pada Vue

1. Bisa digunakan untuk looping array, array of objects.
2. Penggunaan `v-for` bisa diikuti index array-nya (`fruit, index`).
3. Looping pada Rentang Angka (`n in 10`).
4. Menggunakan `v-for` dengan Komponen.

## VIDEO 5: Event Handling & Methods

### Di Vue ada dua cara: yaitu inline handler dan methods handler

**Click Event Handler:**

1. Bisa inline dan menggunakan methods sendiri -> inline seperti `count++`.
2. `v-on:click` sama dengan `@click` (`@click` merupakan shorthand).
3. Bisa juga ditambahkan parameter.

**Keyup, Keydown Event Handler:**

1. Cara pakainya -> `v-on:keydown.enter`.
2. Shorthand-nya `@keydown.enter`.
3. Banyak sekali `keydown` event.

**Prevent Default:**

1. Biasanya di form.
2. Cara menulisnya `v-on:submit.prevent`.
3. Dengan menggunakan `v-on:submit.prevent`, Kita dapat mencegah browser untuk refresh halaman tersebut.
