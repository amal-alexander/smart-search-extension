# 🔍 Smart Search Analyzer – Chrome Extension

This Chrome extension lets you search Google with a keyword and ask AI intelligent follow-up questions — all in one flow.

No scraping. No clutter. Just smart AI context based on your search intent. 🤖

---

## ✨ What It Does

1. Enter a **keyword** in the extension popup  
2. Opens a new Google tab showing **100 results** for that query  
3. The query is **saved** inside the extension  
4. Ask a follow-up question — and AI responds intelligently based on your original search  

> _Perfect for researchers, marketers, SEOs, or curious minds who always want more than just a search page._

---
## Screenshot
![image](https://github.com/user-attachments/assets/5684923b-000f-43a8-bd79-0542bb5a14d6)

## ⚙️ Tech Stack

- Manifest v3 Chrome Extension  
- Vanilla JS / HTML / CSS  
- `chrome.tabs.create()` and `chrome.storage.local`  
- [OpenRouter API](https://openrouter.ai/) (using `mistralai/mistral-7b-instruct`)  
- Modular setup → you can plug in models like `gpt-4-turbo`, `claude-3-opus`, etc.

---

## 🚀 How to Run It

1. Clone or download this repo  
2. Copy `config.example.js` → rename it to `config.js`  
3. Paste your OpenRouter API key inside `config.js`  
4. Open `chrome://extensions/` in your browser  
5. Turn on **Developer mode** (top-right)  
6. Click **"Load Unpacked"** and select the project folder  
7. You’re good to go! 🔥

---

## 🧠 Prompt Engineering

The AI is instructed to simulate the top 100 search results for your keyword and answer your question accordingly — no scraping, just reasoning.

---

## 🧪 Possible Future Upgrades

- GPT-4 / Claude 3 model switching  
- History of queries  
- Exportable answers  
- Dark mode 🖤

---

## 👨‍💻 Created by

Amal Alexander  
[🔗 Connect on LinkedIn](https://www.linkedin.com/in/amal-alexander-305780131/)

---

## 🛡️ Disclaimer

This extension doesn’t collect or store any personal data.  
Your API key stays local inside your browser.

---

## 📂 License

MIT License
