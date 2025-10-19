# Quizzical 🎮

A modern, fun, and responsive quiz web app built with React and Vite that tests users' knowledge on a variety of topics.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started (Local Setup)](#getting-started-local-setup)
- [Possible Enhancements / To-Do](#possible-enhancements-to-do)
- [Author](#author)
- [License](#license)

---

## Features

- Responsive quiz interface for any device
- Multiple choice questions with selectable answers
- Real-time display of correct/incorrect answers
- Summary of results at the end of a quiz
- Fun, interactive UI with clean animations and styling
- Built with modern frontend tooling for performance & developer experience

---

## Screenshots

> ![Quiz Home Screen](/src/assets/images/quizzical-home.png)

> ![Quiz Question Interface](/src/assets/images/quizzical-questions.png)

> ![Quiz Answers Interface](/src/assets/images/quizzical-answered.png)

> ![Quiz Result Summary](/src/assets/images/quizzical-result.png)

---

## Live Demo

> [Play Game](https://quizzical-bice.vercel.app/)

---

## Features

- 🎮 Interactive game interface
- 🤖 Random computer hand generation
- 🕐 Countdown timer for user input
- ✊🖐✌️ Hand image display for both user and computer
- 🧾 Result modal showing win/lose/tie with icons
- 📈 Score tracking for both players
- 🔁 "Play Again" feature to restart the game

---

## Tech Stack

- **React** - Component-based UI library
- **Vite** - Fast build tool for React projects
- **TailwindCSS** - Utility-first CSS framework for rapid styling
- **Open Trivia Database** - API for fetching quiz questions
- **React Confetti** - Confetti animation library for celebration

---

## Folder Structure

```bash
Quizzical/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── blobs-left.svg
│   │       └── blobs-right.svg
│   ├── components/
│   │   ├── AnswerButton.jsx
│   │   ├── Button.jsx
│   │   ├── Intro.jsx
│   │   ├── Question.jsx
│   │   ├── Answers.jsx
│   │   └── Result.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Getting Started (Local Setup)

1. Clone the repo:

   ```bash
   git clone https://github.com/Anikhe00/Quizzical.git
   ```

2. Open the folder:

   ```bash
   cd Quizzical
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   - The app will be available at `http://localhost:3000`

---

## 📌 To Do (Optional Enhancements)

- Add quiz categories and difficulty levels
- Add sound/animation effects for better feedback
- Improve accessibility (keyboard navigation, screen-reader support)

---

## 👩‍💻 Author

- **Name:** Akanji Shakirat
- **Role:** Product Designer & Frontend Developer
- **Contact:** [LinkedIn](https://www.linkedin.com/in/your-link)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
