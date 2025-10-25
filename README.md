# 🌍 Fundraiser Platform — MERN Stack Crowdfunding App

A full-stack fundraising platform built with **MongoDB, Express, React, and Node.js**, designed to help small campaigns and social initiatives collect and track donations transparently.  
Developed as a practical project to showcase **scalable architecture, clean UI design, and API integration best practices.**

---

## 🚀 Overview

This project demonstrates the core principles of a modern web application:
- End-to-end data flow between frontend and backend  
- RESTful API integration with MongoDB  
- Environment-based configuration for local and cloud deployments  
- UI/UX built with TailwindCSS and React hooks  

---

## ✨ Key Features

- 💰 Real-time donation tracking and aggregation  
- 🧾 Form validation and backend schema enforcement  
- ⚡ Optimized frontend via **Vite** and **React 18**  
- 🌐 Cross-origin compatibility using CORS  
- 🎨 Modular and mobile-responsive design with TailwindCSS  
- 🧩 Extensible backend routes for campaign, user, and analytics modules  

---

## 🧱 Architecture

| Layer | Tech Stack |
|-------|-------------|
| Frontend | React + Vite + TailwindCSS |
| Backend | Node.js + Express.js |
| Database | MongoDB (Atlas / Local) |
| Package Manager | npm |
| Environment Config | dotenv |

The codebase follows a **separation of concerns** approach:
```
fundraiser-mern/
├── client/          # React + Vite frontend
│   ├── src/components/   # Reusable functional components
│   ├── App.jsx           # Root React component
│   └── main.jsx          # Entry point
│
├── server/          # Express backend
│   ├── models/      # MongoDB schemas
│   ├── routes/      # REST API endpoints
│   └── server.js    # Entry point
│
└── setup scripts, README, .env.example
```

---

## ⚙️ Setup Guide

### 1. Clone the repo
```bash
git clone https://github.com/Srihari1176/fundraiser-mern.git
cd fundraiser-mern
```

### 2. Configure environment variables
Inside the `server` folder, create a `.env` file:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 3. Install dependencies
```bash
cd server && npm install
cd ../client && npm install
```

### 4. Run locally
Use two terminals:
```bash
# Backend
cd server
npm run dev

# Frontend
cd client
npm run dev
```

App runs on [http://localhost:5173](http://localhost:5173)

---

## 🧠 API Reference

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/donations` | Fetch all donations |
| `POST` | `/api/donations` | Create a new donation |

Sample payload:
```json
{
  "name": "John Doe",
  "amount": 500,
  "description": "Education support fund"
}
```

---

## 🌱 Roadmap

- Integrate Razorpay / Stripe payment gateways  
- Add JWT authentication and user roles  
- Campaign-specific dashboards and leaderboards  
- Deployment with CI/CD pipelines on Render or Vercel  

---

## 🧑‍💻 Author

**Srihari**  
📍 Chennai, India  
🎓 B.Tech AI & Data Science — Shiv Nadar University Chennai  
🌐 [github.com/Srihari1176](https://github.com/Srihari1176)

> _“Built to explore how data, design, and impact intersect in modern full-stack apps.”_

---

## 🪪 License

This project is open-source under the [MIT License](LICENSE).
