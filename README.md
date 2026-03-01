<div align="center">

# 🤝 Kith

### Modern Community & Contact Management Platform

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com/)
[![Live](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)](https://contact-manager-app-kith.vercel.app/)

**Kith is a fast, responsive contact & community management platform built for modern teams.**

🌐 **[Live Demo](https://contact-manager-app-kith.vercel.app/)** · 📚 [Documentation](#-installation--setup) · 🐛 [Report Bug](https://github.com/Mbiydzenyuy3/contact-manager/issues)

</div>

---

## 📋 Table of Contents

- [Problem Statement](#-problem-statement)
- [Project Goals](#-project-goals)
- [Technical Architecture](#-technical-architecture)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Challenges Faced](#-challenges-faced)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)

---

## 🔍 Problem Statement

### Who has the problem?
Small teams, freelancers, and community managers need a simple, fast tool to organize contacts without the complexity of enterprise CRM platforms.

### Why it matters?
Most contact management tools are either **too bloated** (enterprise CRMs) or **too basic** (spreadsheets). Teams need something fast, intuitive, and built for the modern web.

### Why this solution exists?
Kith was built to solve the **speed and user experience gap** in modern contact management. With a focus on **responsive design, instant search, and smooth interactions**, Kith is optimized for teams that want powerful functionality without enterprise complexity.

---

## 🎯 Project Goals

- ✅ Build a fast, responsive, and modern UI using React and Vite
- ✅ Provide instant search and filtering across contacts
- ✅ Deliver a premium, mobile-first user experience
- ✅ Deploy a fully production-ready app with CI/CD on Vercel
- ✅ Demonstrate clean component architecture and state management

---

## 🏗️ Technical Architecture

Kith is a **single-page application (SPA)** built with React and Vite.

```
contact-manager/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── services/         # API service layer
│   ├── store/            # State management
│   └── styles/           # CSS
└── vercel.json           # Vercel SPA routing config
```

### Frontend
- **React** component-based architecture
- **React Router** for navigation
- **Context API** for state management
- **CSS3** for styling

### Deployment
- Deployed on **Vercel** with automatic CI/CD
- **132 deployments** tracked

---

## ✨ Features

### 🔍 Instant Search & Filtering
- Real-time search across contact names and tags
- Debounced search for performance

### 📊 Contact Management (CRUD)
- **Create**: Add new contacts
- **Read**: View contact details
- **Update**: Edit contact information
- **Delete**: Remove contacts with confirmation

### 📦 State Management
- Centralized state using React Context API
- Persistent state via `localStorage`

### 🎨 Responsive Design
- Mobile-first design
- Fully responsive across all devices

### ✅ Form Validation
- Client-side validation for email and phone
- Inline error messaging

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Language** | JavaScript (62.1%), CSS (36.8%) |
| **Frontend** | React |
| **Build Tool** | Vite |
| **Routing** | React Router |
| **State** | React Context API + localStorage |
| **Styling** | CSS3 |
| **Deployment** | Vercel |

---

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) v9+

### 1. Clone the Repository

```bash
git clone https://github.com/Mbiydzenyuy3/contact-manager.git
cd contact-manager
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

App available at `http://localhost:5173/`

### 4. Build for Production

```bash
npm run build
```

---

## 🚧 Challenges Faced

### 1. Frontend Challenge — Managing Protected Routes
Implementing protected routes in React Router v6 required creating a custom `<PrivateRoute>` wrapper component that checks authentication state before rendering.

### 2. State Management — Avoiding Prop Drilling
As the component tree grew, passing state down multiple levels became messy. Refactoring to **React Context API** eliminated prop drilling and made the codebase much cleaner.

### 3. Debugging — Vercel SPA Routing 404 Errors
Direct navigation to routes like `/contact/123` returned 404 errors on Vercel. Fixed by adding a `vercel.json` rewrite rule redirecting all requests to `index.html`:

```json
{
  "rewrites": [{"source": "/(.*)", "destination": "/index.html"}]
}
```

---

## 💡 What I Learned

### Technical Lesson
Building Kith taught me how to architect a **scalable React application** with clean separation between UI components, state management, and services.

### Workflow Lesson
Working with **Vercel’s CI/CD pipeline** showed me trunk-based development — pushing to `main` triggers instant builds and previews.

### Code Organization Lesson
**Services are the bridge between UI and data.** Centralizing API calls in `src/services/` kept components focused on rendering.

---

## 🔮 Future Improvements

| Priority | Improvement |
|----------|-------------|
| 🔴 High | Add backend API (NestJS/Express) for persistent storage |
| 🔴 High | Implement user authentication (JWT) |
| 🔴 High | Integrate database (PostgreSQL/MongoDB) |
| 🟡 Medium | Add real-time collaboration (WebSocket) |
| 🟡 Medium | Build import/export (CSV, vCard) |
| 🟢 Low | Add dark mode toggle |
| 🟢 Low | Add unit tests (Vitest) |

---

## 👤 Author

**Leila Mbiydzenyuy** — Full-Stack Engineer

[![Email](https://img.shields.io/badge/Email-mbiydzenyuyeileen%40gmail.com-blue?style=flat-square&logo=gmail)](mailto:mbiydzenyuyeileen@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-eileen--leila-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/eileen-leila/)
[![GitHub](https://img.shields.io/badge/GitHub-Mbiydzenyuy3-333?style=flat-square&logo=github)](https://github.com/Mbiydzenyuy3)

---

<div align="center">

*If you find this project useful, please give it a ⭐!*

</div>
