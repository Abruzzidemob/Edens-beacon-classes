# Edens-beacon-classes
 Learning Never Stops

 Phase 1: Introduction to JavaScript**, including **all subheadings with examples**, so you can teach it to complete beginners with clarity.

---

# 🧑‍🏫 **Phase 1: Introduction to JavaScript**

### 🎯 Goal:

To help students understand **what JavaScript is**, where it runs, and how to set it up on a web page. This phase sets the foundation for everything that comes after.

---

## 🔹 1. What is JavaScript?

**Definition**:
JavaScript is a **programming language** used to make **web pages interactive**.

### 🟢 Uses of JavaScript:

* Show pop-ups, alerts, and forms
* Validate form inputs
* Update content without refreshing the page
* Create animations and effects
* Handle user interactions (clicks, typing, etc.)
* Power web apps (e.g., Google Docs, Facebook, etc.)

**Example**:

```js
alert("Welcome to JavaScript!");
```

This will show a browser pop-up when the page loads.

---

## 🔹 2. Where JavaScript Runs

### 🟡 Two Environments:

* **Browser**: Most common, for client-side code (Chrome, Firefox, Safari, etc.)
* **Node.js**: For running JS on servers (backend development)

But for beginners, focus on the **browser**.

**Example**:
Open **Google Chrome**, press **F12** or right-click → **Inspect → Console**, and type:

```js
console.log("Hello from the browser console!");
```

You’ll see it printed in the console.

---

## 🔹 3. Linking JavaScript to HTML

There are **3 ways** to use JavaScript with HTML:

### a. Inline JavaScript (not recommended)

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

### b. Internal JavaScript (within HTML file)

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello!</h1>
  <script>
    console.log("This runs from inside the HTML file!");
  </script>
</body>
</html>
```

### c. External JavaScript (best practice)

* Create a separate `.js` file (e.g., `script.js`)
* Link it using the `<script>` tag

**HTML (index.html)**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Example</title>
</head>
<body>
  <h2>Check the console!</h2>
  <script src="script.js"></script>
</body>
</html>
```

**JS (script.js)**:

```js
console.log("External JS file is running!");
```

---

## 🔹 4. Console & DevTools Overview

### What is the Console?

The **console** is a tool in your browser’s DevTools where you can:

* See errors
* Test code
* Output results using `console.log()`

**How to open DevTools:**

* Right-click on any page → **Inspect**
* Go to the **Console** tab

### Console Commands:

```js
console.log("Hello World");       // Normal message
console.warn("This is a warning"); // Yellow warning
console.error("This is an error"); // Red error message
```

---

## ✅ Summary of Phase 1

| Concept          | Key Point                      | Example                    |
| ---------------- | ------------------------------ | -------------------------- |
| JavaScript Use   | Makes web pages interactive    | `alert("Hi!")`             |
| Runs In          | Browser (now), Node.js (later) | `console.log("Run this")`  |
| Link to HTML     | Best via `<script src="...">`  | `script.js` + `index.html` |
| DevTools Console | Debug, test, see output        | Use F12 → Console tab      |

---

## 📝 Practice Task:

1. Create an `index.html` and `script.js` file.
2. Link them.
3. In `script.js`, write:

```js
alert("Welcome to my website!");
console.log("Hello Developer!");
```

4. Open the page in a browser and see both the alert and console message.

---

Would you like me to create **slides**, a **worksheet**, or a **teaching plan** for this Phase 1 module?

