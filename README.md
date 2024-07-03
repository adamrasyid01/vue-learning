# Vue.js Learning Videos
Source Video : https://www.youtube.com/playlist?list=PLnrs9DcLyeJQ0ZqgkIRRII4kIyc5Hbt3F

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
3. Dengan menggunakan `v-on:submit.prevent`, Anda dapat mencegah refresh halaman tersebut.

## VIDEO 6: Binding to Attributes (`v-bind`) href, src, style, class

1. Kenapa ada atribut `v-bind`? Karena tidak bisa menggunakan mustache.
2. Kegunaannya: Mengikat atribut HTML seperti `src`, `href`, `class`, `style`, dan atribut lainnya ke data dalam model Vue.

**`v-bind` href:**
- `v-bind:href` (`:href` adalah shorthand-nya)

**`v-bind` src:**
- `v-bind:src` (`:src` adalah shorthand-nya)

**`v-bind` style, alt, title:**
- Sama seperti di atas.

**`v-bind` class dan id:**
- `v-bind:class` (`:class` adalah shorthand-nya)
- `v-bind:id` (`:id` adalah shorthand-nya)

## VIDEO 7: Menggunakan `v-model` di Vue | Two-Way Data Binding

`v-model` digunakan untuk membuat binding data dua arah antara data di Vue instance dan input HTML. Artinya perubahan pada input HTML secara otomatis memperbarui data di Vue instance, dan perubahan pada data di Vue instance secara otomatis memperbarui nilai input HTML.

`v-model` bisa digunakan pada:

- Input text
- Textarea
- Radio buttons
- Checkbox
- Dropdown

## VIDEO 8: Computed Properties di Vue | Optimalkan Logika Perhitungan Data

Computed properties digunakan untuk memanipulasi dan menggabungkan data di dalam Vue secara efisien dan untuk merender ulang komponen secara otomatis ketika data yang mereka dependensikan berubah, sehingga kode menjadi lebih bersih dan efisien.

Behaviour computed properties dijalankan ketika ada unsur yang terupdate.

## VIDEO 9: Watchers | Reactive Error Message pada Form

### Cara Penggunaan Watchers

```javascript
watch: {
  // Watch v-model nya
  fieldName(newValue, oldValue) {
    // Value pada watcher
    // Membuat error label dengan watchers
    // Your logic here
  }
}
```
Watcher di Vue.js digunakan untuk menangani tindakan yang harus diambil ketika nilai dari suatu data berubah. Mereka memungkinkan Anda untuk menetapkan logika khusus yang akan dieksekusi ketika nilai dari properti yang diawasi (watched property) berubah. Kegunaan utama dari watcher adalah untuk melakukan tindakan spesifik, seperti menjalankan kode tambahan, memanggil metode, atau melakukan permintaan HTTP, berdasarkan perubahan yang terjadi pada data tertentu di dalam Vue instance.

## VIDEO 10: Membuat Todo List App dengan Vue

1. Styling pake Boostrap
2. Penerapan Binding untuk done (teks kecoret)
3. Penerapan v-model untuk menangkap form
4. v-for untuk menampilkan array of object dari todp
4. Event Handler setiap button

## VIDEO 11: Vue Lifecycle Hooks
Lifecycle hooks di Vue.js adalah serangkaian metode yang dijalankan pada titik-titik tertentu dalam siklus hidup suatu komponen. Mereka memungkinkan untuk mengeksekusi kode pada tahapan spesifik, seperti saat komponen dibuat, dimuat, diperbarui, atau dihancurkan. Dengan menggunakan lifecycle hooks, kita dapat mengontrol perilaku komponen dan melakukan berbagai tugas, seperti inisialisasi data, pengaturan event listener, atau pembersihan sumber daya.


Alur Diaagram sebuah aplikasi

1. before create -> created
2. before mount -> mounted (mounted udah kenal DOM)
3. before update -> updated (sesuatu data ketika berubah)

## VIDEO 12: Membuat Pokedex(Pokemon) menggunakan Vue & PokeAPI

1. Membuat List Pokemon
2. Membuat Detail dari pokemon saat di klik
3. Membuat Pencarian pokemon




