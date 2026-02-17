# 📘 02 — Comment (Komentar) dalam JavaScript

## 🎯 Tujuan Pembelajaran

Setelah mempelajari materi ini, kamu akan mampu:

* Memahami fungsi komentar dalam JavaScript
* Menulis single-line comment dengan benar
* Menulis multi-line comment dengan benar
* Mengetahui kapan sebaiknya menggunakan komentar
* Menghindari penggunaan komentar yang berlebihan

---

# 💬 Apa Itu Comment?

Comment (komentar) adalah bagian dari kode yang **tidak akan dieksekusi oleh JavaScript**.

Komentar digunakan untuk:

* Memberi penjelasan pada kode
* Membantu programmer lain memahami program
* Mengingatkan tujuan suatu bagian kode
* Menonaktifkan kode sementara (debugging)

Komentar sangat penting dalam proyek nyata.

---

# ✏ 1️⃣ Single-Line Comment

Single-line comment digunakan untuk komentar satu baris.

Sintaksnya menggunakan dua garis miring:

```js
// Ini adalah komentar
console.log("Hello World");
```

Penjelasan:

* Semua teks setelah `//` dalam satu baris akan diabaikan.
* JavaScript tidak akan menjalankan bagian tersebut.

Contoh lain:

```js
let umur = 20; // menyimpan umur user
```

---

# 📝 2️⃣ Multi-Line Comment

Multi-line comment digunakan untuk komentar lebih dari satu baris.

Sintaksnya menggunakan:

`/*` untuk membuka komentar
`*/` untuk menutup komentar

Contoh:

```js
/*
  Ini adalah komentar
  yang terdiri dari beberapa baris
  dan tidak akan dijalankan oleh JavaScript
*/
```

Multi-line comment sering digunakan untuk:

* Dokumentasi fungsi
* Penjelasan panjang
* Header file

---

# 🔎 Contoh Penggunaan Nyata

```js
// Menghitung luas persegi panjang
const panjang = 10;
const lebar = 5;
const luas = panjang * lebar;

console.log(luas);
```

Komentar membantu kita memahami tujuan kode tersebut.

---

# 🛑 Comment untuk Debugging

Komentar juga bisa digunakan untuk menonaktifkan kode sementara.

Contoh:

```js
// console.log("Debugging mode aktif");
```

Teknik ini sering dipakai saat testing.

---

# ⚠ Kesalahan Umum

1. Terlalu banyak komentar pada kode yang sudah jelas.
2. Menulis komentar yang tidak relevan.
3. Tidak memperbarui komentar saat kode berubah.

Contoh buruk:

```js
let x = 5; // ini adalah angka 5
```

Komentar di atas tidak menambah informasi.

---

# ✅ Best Practice Menulis Comment

* Jelaskan "mengapa" bukan "apa"
* Gunakan komentar untuk logika kompleks
* Hindari menjelaskan kode yang sudah jelas
* Gunakan bahasa yang konsisten

Contoh bagus:

```js
// Validasi input agar tidak kosong sebelum dikirim ke server
if (!username) {
  alert("Username wajib diisi");
}
```

---

# 🚀 Ringkasan

* Comment tidak dieksekusi oleh JavaScript
* Ada dua jenis: single-line dan multi-line
* Gunakan komentar untuk membantu pemahaman kode
* Jangan gunakan komentar secara berlebihan

---
