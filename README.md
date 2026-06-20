# Simple Weather App

A clean, responsive weather dashboard that allows users to look up real-time weather details for any city globally. This project was built to practice handling asynchronous API calls, error boundaries, and dynamic DOM manipulation in vanilla JavaScript.

## 🚀 Live Demo
[View Live Project](https://nhattan220602.github.io/simple-weather-app/)

## ✨ Features
* **Real-Time Data:** Integrates with the OpenWeatherMap API to fetch current temperature, humidity, and wind speed metrics.
* **Dynamic Weather States:** Evaluates API response weather conditions (`Clouds`, `Clear`, `Rain`, etc.) to update UI layout iconography on the fly.
* **Input Error Handling:** Features built-in status catch validation to hide default layouts and display clean user-facing error indicators when invalid city searches occur.

## 🛠️ Built With
* **HTML5:** Semantic document structure.
* **CSS3:** Custom linear gradients, responsive card layout, and flexbox distribution.
* **JavaScript (ES6):** Async/Await Fetch API, error handling (`try...catch`), and dynamic DOM rendering.

## ⚙️ Setup & Installation
1. Clone the repository:
```bash
   git clone https://github.com/nhattan220602/simple-weather-app.git
```
2. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)

3. Create `src/config.js` (excluded from version control):
```js
   const apiKey = 'YOUR_API_KEY_HERE';
```

4. Open `src/index.html` in your browser.

> **Note:** The live demo is deployed via GitHub Actions, which securely injects the API key at build time using GitHub Secrets — the key is never stored in the repository.