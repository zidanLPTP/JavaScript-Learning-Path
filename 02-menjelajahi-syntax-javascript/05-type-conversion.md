# 📘 05 — Type Conversion dalam JavaScript

## 🎯 Tujuan Pembelajaran

Setelah mempelajari materi ini, kamu akan mampu:

* Memahami apa itu type conversion
* Mengetahui perbedaan konversi eksplisit dan implisit
* Menggunakan Number(), String(), dan Boolean()
* Memahami konsep type coercion
* Menghindari bug akibat konversi tipe data

---

# 🔄 Apa Itu Type Conversion?

Type conversion adalah proses mengubah satu tipe data menjadi tipe data lain.

Contoh:

* String menjadi Number
* Number menjadi String
* Nilai menjadi Boolean

JavaScript adalah bahasa yang dinamis, sehingga konversi tipe sering terjadi.

---

# 1️⃣ Konversi Eksplisit (Manual)

Konversi eksplisit adalah konversi yang dilakukan secara sadar oleh programmer.

## 🔢 Mengubah ke Number

```js
Number("123");   // 123
Number("10.5");  // 10.5
Number("abc");   // NaN
```

Alternatif lain:

```js
parseInt("100");
parseFloat("10.5");
```

---

## 🔤 Mengubah ke String

```js
String(123);      // "123"
String(true);     // "true"
```

Atau:

```js
(123).toString();
```

---

## 🔘 Mengubah ke Boolean

```js
Boolean(1);       // true
Boolean(0);       // false
Boolean("");      // false
Boolean("Hello"); // true
```

Nilai yang dianggap false (falsy values):

* 0
* ""
* null
* undefined
* NaN
* false

---

# 2️⃣ Konversi Implisit (Type Coercion)

Konversi implisit terjadi otomatis oleh JavaScript.

Contoh:

```js
"5" + 2;  // "52"
"5" - 2;  // 3
"5" * 2;  // 10
"5" / 2;  // 2.5
```

Penjelasan:

* Operator + cenderung menggabungkan string
* Operator -, *, / mengubah string menjadi number

---

# ⚠ Contoh yang Membingungkan

```js
true + 1;     // 2
false + 1;    // 1
null + 1;     // 1
undefined + 1; // NaN
```

Karena JavaScript melakukan coercion otomatis.

---

# 🧠 Perbedaan == dan === dalam Konversi

```js
5 == "5";   // true
5 === "5";  // false
```

* `==` melakukan coercion
* `===` tidak melakukan coercion

👉 Disarankan selalu menggunakan ===.

---

# 🛑 Hindari Bug Coercion

Contoh bug:

```js
if ("0") {
  console.log("Masuk");
}
```

String "0" dianggap true karena bukan string kosong.

---

# ✅ Best Practice

* Lakukan konversi secara eksplisit jika memungkinkan
* Gunakan Number() sebelum perhitungan
* Gunakan === untuk perbandingan
* Jangan mengandalkan coercion otomatis

Contoh aman:

```js
const input = "10";
const hasil = Number(input) + 5;

console.log(hasil);
```

---

# 🚀 Ringkasan

* Type conversion mengubah tipe data
* Ada konversi eksplisit dan implisit
* Coercion bisa menyebabkan bug jika tidak dipahami
* Gunakan === untuk perbandingan aman
* Selalu sadar tipe data yang sedang diproses

---
