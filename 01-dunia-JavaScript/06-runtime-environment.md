# 🖥️ JavaScript Runtime Environment

Runtime Environment adalah tempat di mana kode JavaScript dijalankan.

Walaupun bahasa JavaScript tetap sama, setiap runtime memiliki fitur, API, dan *global object* yang berbeda.

Tiga runtime utama JavaScript adalah:

* 🌐 Browser
* 🖥️ Node.js
* ⚡ Bun

---

## 🌐 Browser

Browser digunakan untuk menjalankan aplikasi **front-end (client-side)**.

### 🔹 Global Object

```js
window
```

Semua variabel dan fungsi global pada browser berada di dalam objek `window`.

### 🔹 Contoh Kode (Embedded JavaScript)

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My Website</h1>

    <script>
      window.alert("Hello World");
    </script>
  </body>
</html>
```

Ketika dijalankan, browser akan menampilkan pop-up alert dengan pesan **Hello World**.

### 🔹 Fitur yang Disediakan Browser

Browser menyediakan berbagai Web API seperti:

* `document` (untuk manipulasi DOM)
* `alert()`
* `fetch()`
* `localStorage`
* `setTimeout()` / `setInterval()`
* dan API web lainnya

---

## 🖥️ Node.js

Node.js adalah runtime JavaScript yang berjalan di luar browser. Biasanya digunakan untuk:

* Backend server
* CLI tools
* Automation
* System programming
* File system access

### 🔹 Global Object

```js
process
```

Node.js tidak memiliki objek `window`. Sebagai gantinya, Node.js menyediakan objek global seperti `process`.

### 🔹 Contoh Kode

```js
console.log(process.platform);
```

Kode di atas akan menampilkan sistem operasi yang digunakan untuk menjalankan program.

### 🔹 Menjalankan File JavaScript

```bash
node app.js
```

Perintah di atas akan menjalankan file `app.js` menggunakan runtime Node.js.

### 🔹 Masuk ke Mode REPL

```bash
node
```

REPL (Read–Eval–Print–Loop) memungkinkan kita menulis dan menjalankan kode JavaScript langsung di terminal tanpa membuat file.

---

## ⚡ Bun

Bun adalah runtime JavaScript modern yang berfokus pada:

* Kecepatan tinggi
* Tooling bawaan
* Kompatibilitas dengan Node.js

Bun mendukung banyak fitur Node.js dan mengikuti standar ECMAScript.

### 🔹 Menjalankan File JavaScript

```bash
bun app.js
```

atau

```bash
bun run app.js
```

Kedua perintah tersebut memiliki fungsi yang sama.

### 🔹 Masuk ke Mode REPL

```bash
bun repl
```

Setelah masuk ke REPL, kita bisa langsung mengetik dan menjalankan kode JavaScript.

---

## 🎯 Perbedaan Global Object

| Runtime | Global Object |
| ------- | ------------- |
| Browser | `window`      |
| Node.js | `process`     |
| Bun     | `globalThis`  |

---

## 📌 Kesimpulan

* JavaScript mengikuti standar **ECMAScript**
* Runtime menentukan lingkungan eksekusi dan API yang tersedia
* Perbedaan utama terletak pada *global object* dan fitur tambahan masing-masing runtime
* Browser digunakan untuk front-end, N
