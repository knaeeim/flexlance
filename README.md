# 🌐 Flexlance – Freelance Task Posting & Bidding Platform

Welcome to **Flexlance**, a modern freelance task management platform where clients can post tasks and freelancers can bid in real-time. Built with a focus on user experience, authentication security, and dynamic frontend interactions.

🔗 Live Site: [https://flexlance-auth.web.app/](https://flexlance-auth.web.app/)

---

## ✨ Features

### 🔐 Authentication
- ✅ Google Login via Firebase
- ✅ Email & Password Authentication
- ✅ Password validation: must include **uppercase, lowercase, and at least 6 characters**
- ✅ Secure and protected routes (only authenticated users can access specific pages)

### 🛡️ Protected Routes
- 🔒 `Add Task`
- 🔒 `My Posted Task`
- 🔒 `Update Task` and `Task Details` pages

### 📄 Task Management
- 📝 Post a new freelance task
- ✏️ Update an existing task
- ❌ Delete posted tasks with confirmation
- 📊 View and track real-time **bid count** for each task

### 🖼️ User Interface
- 🎨 Featured posts section on the homepage
- 💻 Grid-based **photo card section with framer-motion** for smooth animations
- 📦 Services section to highlight platform capabilities
- 🌙 **Dark Mode / Light Mode** toggle for theme preference

### 📈 Dynamic Animations
- 🔢 Counting animation using `counting.js` displayed in four stat boxes on the homepage

### 🧠 Additional Functionalities
- 📬 Real-time user info fetched via email from the database
- 📈 Live `bidCount` update with visual feedback
- 📆 Tasks show posting date, budget, and category
- 💬 Clean and responsive UI with meaningful modal usage

---

## 🚀 Tech Stack

- **React.js** – Frontend library
- **Firebase** – Authentication (Google & Email/Password)
- **MongoDB + Express** – Backend API and data storage
- **Tailwind CSS / DaisyUI** – Styling and component library
- **Framer Motion** – For smooth card animations
- **SweetAlert2** – For elegant alert and confirmation modals
- **Counting.js** – For animated number counters

---
