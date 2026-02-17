# 📘 03 — Variabel dalam JavaScript

## 🎯 Tujuan Pembelajaran

Setelah mempelajari materi ini, kamu akan mampu:

* Memahami apa itu variabel
* Mengetahui cara deklarasi variabel di JavaScript
* Memahami perbedaan var, let, dan const
* Mengetahui aturan penamaan variabel
* Menghindari kesalahan umum saat membuat variabel

---

# 📦 Apa Itu Variabel?

Variabel adalah tempat untuk menyimpan data.

Data yang disimpan bisa berupa:

* Angka
* Teks (string)
* Boolean (true / false)
* Array
* Object
* Dan tipe data lainnya

Contoh sederhana:

```js
let nama = "Fathin";
let umur = 20;
```

Di sini:

* `nama` menyimpan string
* `umur` menyimpan angka

---

# 🧾 Cara Deklarasi Variabel

Di JavaScript modern, ada tiga cara membuat variabel:

1. var (versi lama)
2. let (direkomendasikan)
3. const (direkomendasikan)

---

# 1️⃣ var (Versi Lama)

```js
var kota = "Jakarta";
```

Ciri-ciri var:

* Bisa dideklarasikan ulang
* Bisa diubah nilainya
* Memiliki function scope

Contoh:

```js
var angka = 10;
var angka = 20; // tidak error
```

Karena fleksibel berlebihan, var sering menyebabkan bug.

👉 Saat ini sebaiknya hindari penggunaan var.

---

# 2️⃣ let (Direkomendasikan)

```js
let umur = 21;
```

Ciri-ciri let:

* Bisa diubah nilainya
* Tidak bisa dideklarasikan ulang dalam scope yang sama
* Memiliki block scope

Contoh:

```js
let nilai = 80;
nilai = 90; // boleh

// let nilai = 100; ❌ error jika dalam scope yang sama
```

---

# 3️⃣ const (Direkomendasikan)

```js
const PI = 3.14;
```

Ciri-ciri const:

* Tidak bisa diubah nilainya
* Tidak bisa dideklarasikan ulang
* Wajib langsung diberi nilai awal

Contoh:

```js
const umur = 20;
// umur = 25; ❌ error
```

Jika menggunakan const pada object atau array:

```js
const user = {
  nama: "Fathin"
};

user.nama = "Zidan"; // boleh
```

Yang tidak boleh diubah adalah referensinya, bukan isinya.

---

# 🏷 Aturan Penamaan Variabel

Beberapa aturan penting:

1. Tidak boleh diawali angka
2. Tidak boleh menggunakan spasi
3. Tidak boleh menggunakan kata kunci JavaScript
4. Bersifat case-sensitive

Contoh yang benar:

```js
let firstName;
let totalHarga;
let isActive;
```

Contoh yang salah:

```js
let 1nama;      // ❌
let total harga; // ❌
let var;        // ❌
```

---

# 🧠 Best Practice

* Gunakan const secara default
* Gunakan let jika nilai perlu berubah
* Hindari var
* Gunakan camelCase untuk penamaan

Contoh baik:

```js
const maxLoginAttempt = 3;
let currentAttempt = 0;
```

---

# ⚠ Kesalahan Umum

1. Lupa memberi nilai awal pada const
2. Menggunakan var di project modern
3. Menamai variabel tidak deskriptif

Contoh buruk:

```js
let x = 10;
```

Lebih baik:

```js
let jumlahBarang = 10;
```

---

# 🚀 Ringkasan

* Variabel digunakan untuk menyimpan data
* Gunakan let dan const dalam JavaScript modern
* const tidak bisa diubah nilainya
* Ikuti aturan penamaan yang benar

---