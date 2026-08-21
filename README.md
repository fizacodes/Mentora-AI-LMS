# Mentora AI

**Mentora AI** is an AI-powered Learning Management System built to help students discover courses, learn through structured lessons, practice with AI-generated quizzes, and interact with an AI tutor.

[🌐 Live Demo](https://mentora-ai-lms.vercel.app/)

---

## Features

* 🤖 **AI Tutor** — Chat with an AI tutor and maintain conversation history.
* 📚 **AI Course Generation** — Generate structured courses with modules and lessons.
* 🔎 **Course Discovery** — Search and explore AI-generated courses.
* 📝 **AI-Generated Quizzes** — Generate quizzes based on course lessons.
* 🎓 **Course Enrollment** — Enroll in courses and access enrolled content.
* 📊 **Student Dashboard** — View enrolled courses and learning activity.
* 🔐 **Authentication** — Google OAuth and email/password authentication.
* ✉️ **Email OTP Verification** — Secure verification flow for credential-based registration.
* 👤 **User Profiles** — Manage student profile information.

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Server Actions
* Prisma ORM
* PostgreSQL

### AI

* LangChain
* LLM APIs

### Authentication & Services

* Auth.js
* Google OAuth
* Resend

### Deployment

* Vercel
* Docker

---

## Architecture

```text
Next.js
   │
   ├── Server Actions
   │       │
   │       ├── Authentication
   │       ├── Courses
   │       ├── Enrollment
   │       ├── Quizzes
   │       └── AI Chat
   │
   ├── Prisma
   │       │
   │       └── PostgreSQL
   │
   └── AI Services
           │
           └── LangChain + LLM
```

---


## About

Mentora AI was built as a full-stack AI application using **Next.js, TypeScript, PostgreSQL, Prisma, and LangChain**, with a focus on combining traditional LMS features with AI-powered learning experiences.

---

## Author

**Fiza**
AI Full-Stack Developer

[LinkedIn](https://www.linkedin.com/in/fizaprofile/) · [GitHub](YOUR_GITHUB_URL)
