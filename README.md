# 🌍 Fundraiser Platform — MERN Stack Crowdfunding App

A fully deployed, cloud-hosted **MERN stack** application that allows users to create, view, and donate to fundraising campaigns.  
The project demonstrates complete end-to-end integration of **MongoDB Atlas**, **Express/Node.js**, **React + Vite**, and cloud deployment pipelines via **Render** and **Vercel**.

---

## 🚀 Live Demo

- **Frontend:** [https://fundraiser-mern.vercel.app](https://fundraiser-mern.vercel.app)  
- **Backend API:** [https://fundraiser-pi8c.onrender.com](https://fundraiser-pi8c.onrender.com)

---

## 🧱 Architecture Overview

```
Frontend (Vercel)  →  Backend (Render)  →  MongoDB Atlas
     React + Vite         Express API         Cloud Database
```

- **Vercel:** Hosts the static React build with environment variable `VITE_API_URL` pointing to the Render API.  
- **Render:** Runs the Node/Express backend that exposes RESTful endpoints and connects securely to MongoDB Atlas.  
- **MongoDB Atlas:** Stores all campaign and donation data in the cloud.

---

## ✨ Key Features

- 🧾 Create and manage fundraising campaigns  
- 💰 Submit and track donations in real-time  
- 📊 MongoDB-backed persistent storage  
- 🎨 Responsive UI built with **TailwindCSS**  
- 🔐 Secure API architecture with CORS enabled  
- ⚙️ CI/CD ready — automatic deployment from GitHub on every push

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React + Vite + TailwindCSS |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas |
| Deployment | Vercel (Frontend) & Render (Backend) |
| Version Control | GitHub |

---

## 🧩 API Reference

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/donations` | Fetch all donations |
| `POST` | `/api/donations` | Create a new donation |
| `GET` | `/api/health` | Server status check |

**Sample POST payload:**
```json
{
  "name": "John Doe",
  "amount": 500,
  "description": "Supporting education initiatives"
}
```

---

## 🧠 Deployment Details

### Render (Backend)
- Root directory: `server`
- Build command: `npm install`
- Start command: `node server.js`
- Env vars:
  ```
  MONGODB_URI=your-mongodb-connection-string
  PORT=10000
  ```

### Vercel (Frontend)
- Root directory: `client`
- Build command: `npm run build`
- Output directory: `dist`
- Env vars:
  ```
  VITE_API_URL=https://fundraiser-pi8c.onrender.com
  ```

---

## 🧑‍💻 Author

**Srihari**  
🎓 B.Tech AI & Data Science — Shiv Nadar University Chennai  
🌐 [https://github.com/Srihari1176](https://github.com/Srihari1176)

> “Built to learn, scaled to inspire — a complete MERN project from code to cloud.”

---

## 🪪 License
This project is open-source under the [MIT License](LICENSE).
