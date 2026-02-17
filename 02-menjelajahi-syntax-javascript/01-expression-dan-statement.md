# 📘 01 — Expression dan Statement dalam JavaScript

## 🎯 Tujuan Pembelajaran

Setelah mempelajari materi ini, kamu akan mampu:

* Memahami apa itu statement dalam JavaScript
* Memahami apa itu expression dalam JavaScript
* Mengetahui perbedaan mendasar antara statement dan expression
* Mengidentifikasi expression dan statement di dalam kode
* Menghindari kesalahan umum dalam penggunaannya

---

# 🧾 Apa Itu Statement?

Statement adalah sebuah instruksi lengkap yang dijalankan oleh JavaScript.

Statement biasanya mengatur alur program atau melakukan sebuah aksi.

Contoh statement:

```js
const age = 10;
const name = 'Dicoding';
console.log(`Aku ${name}, umurku ${age} tahun.`);
```

Penjelasan:

* `const age = 10;` → statement deklarasi variabel
* `const name = 'Dicoding';` → statement deklarasi variabel
* `console.log(...)` → statement untuk menampilkan output

Setiap baris di atas adalah statement karena masing-masing adalah instruksi lengkap.

---

# 🧮 Apa Itu Expression?

Expression adalah potongan kode yang menghasilkan nilai.

Expression bisa berdiri sendiri, atau menjadi bagian dari statement.

Contoh expression sederhana:

```js
10
'Dicoding'
4 + 4
"Hello" + " World"
true
```

Semua contoh di atas menghasilkan nilai.

* `4 + 4` menghasilkan 8
* `"Hello" + " World"` menghasilkan "Hello World"

---

# 🔍 Expression di Dalam Statement

Sebagian besar statement mengandung expression.

Contoh:

```js
const total = 5 + 3;
```

Di sini:

* `5 + 3` adalah expression
* `const total = ...` adalah statement

Contoh lain:

```js
if (10 > 5) {
  console.log("Benar");
}
```

Penjelasan:

* `10 > 5` adalah expression (menghasilkan true)
* Struktur `if` adalah statement

---

# ⚖ Perbedaan Utama

| Statement                       | Expression                        |
| ------------------------------- | --------------------------------- |
| Instruksi lengkap               | Menghasilkan nilai                |
| Mengatur alur program           | Bisa digunakan di dalam statement |
| Tidak selalu menghasilkan nilai | Selalu menghasilkan nilai         |

---

# ❗ Kesalahan Umum

Banyak pemula mengira semua baris kode adalah expression.

Padahal tidak.

Contoh:

```js
const nama;
```

Kode di atas adalah statement, tetapi salah secara sintaks karena tidak memberikan nilai awal.

---

# 🧠 Tips Penting

1. Jika kode menghasilkan nilai → kemungkinan besar itu expression.
2. Jika kode adalah instruksi lengkap → itu statement.
3. Sebagian besar statement mengandung expression di dalamnya.
4. Memahami ini penting untuk belajar fungsi dan arrow function nanti.

---

# 🚀 Ringkasan

* Statement adalah instruksi lengkap.
* Expression adalah kode yang menghasilkan nilai.
* Expression sering berada di dalam statement.
* Memahami keduanya membantu membaca dan menulis kode dengan benar.

---
