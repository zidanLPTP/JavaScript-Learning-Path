# 📘 04 — Operator dalam JavaScript

## 🎯 Tujuan Pembelajaran

Setelah mempelajari materi ini, kamu akan mampu:

* Memahami apa itu operator
* Mengetahui jenis-jenis operator dasar di JavaScript
* Menggunakan arithmetic, comparison, logical, dan ternary operator
* Memahami perbedaan == dan ===
* Menghindari kesalahan umum dalam penggunaan operator

---

# ⚙ Apa Itu Operator?

Operator adalah simbol yang digunakan untuk melakukan operasi terhadap suatu nilai (operand).

Contoh sederhana:

```js
5 + 3
```

Di sini:

* `5` dan `3` adalah operand
* `+` adalah operator

Operator akan menghasilkan nilai baru.

---

# 1️⃣ Arithmetic Operator (Operator Aritmatika)

Digunakan untuk operasi matematika.

```js
5 + 2  // penjumlahan
5 - 2  // pengurangan
5 * 2  // perkalian
5 / 2  // pembagian
5 % 2  // sisa bagi (modulus)
5 ** 2 // pangkat
```

Contoh penggunaan:

```js
const panjang = 10;
const lebar = 5;
const luas = panjang * lebar;

console.log(luas);
```

---

# 2️⃣ Assignment Operator

Digunakan untuk memberikan nilai ke variabel.

```js
let angka = 10;
```

Operator assignment lainnya:

```js
angka += 5;  // angka = angka + 5
angka -= 2;  // angka = angka - 2
angka *= 3;  // angka = angka * 3
angka /= 2;  // angka = angka / 2
```

---

# 3️⃣ Comparison Operator (Operator Perbandingan)

Digunakan untuk membandingkan dua nilai.

```js
5 == "5"   // true
5 === "5"  // false
5 != "5"   // false
5 !== "5"  // true
5 > 3       // true
5 < 3       // false
5 >= 5      // true
5 <= 4      // false
```

## 🔎 Perbedaan == dan ===

* `==` membandingkan nilai saja (melakukan type coercion)
* `===` membandingkan nilai dan tipe data

Disarankan selalu menggunakan `===` untuk menghindari bug.

---

# 4️⃣ Logical Operator (Operator Logika)

Digunakan untuk operasi logika.

```js
true && false  // AND
true || false  // OR
!true          // NOT
```

Contoh penggunaan:

```js
const umur = 20;
const punyaKTP = true;

if (umur >= 17 && punyaKTP) {
  console.log("Boleh membuat SIM");
}
```

---

# 5️⃣ Unary Operator

Operator yang bekerja pada satu operand.

Contoh:

```js
let angka = 5;
angka++;  // increment
angka--;  // decrement
```

---

# 6️⃣ Ternary Operator

Ternary adalah versi singkat dari if-else.

Sintaks:

```js
kondisi ? nilaiJikaTrue : nilaiJikaFalse;
```

Contoh:

```js
const umur = 18;
const status = umur >= 17 ? "Dewasa" : "Anak-anak";

console.log(status);
```

---

# ⚠ Kesalahan Umum

1. Menggunakan == daripada ===
2. Salah memahami prioritas operator
3. Menggunakan operator tanpa memahami type coercion

Contoh yang bisa membingungkan:

```js
"5" + 2   // "52"
"5" - 2   // 3
```

---

# 🧠 Best Practice

* Gunakan === dan !==
* Gunakan tanda kurung untuk memperjelas prioritas
* Jangan mengandalkan coercion secara tidak sadar
* Gunakan ternary untuk kondisi sederhana saja

---

# 🚀 Ringkasan

* Operator digunakan untuk memproses nilai
* Ada arithmetic, assignment, comparison, logical, unary, dan ternary
* Gunakan === untuk perbandingan yang aman
* Pahami perilaku coercion agar tidak terjadi bug

---
