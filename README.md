# Fundraiser Platform (MERN + Vite + Tailwind)

Fundraiser Platform using MERN with:
- Vite + React 18 frontend
- Tailwind CSS styling with a sleek, card-based UI
- Express + Mongoose backend with a proper model and routes
- CORS, basic validation, and 2-click setup scripts

## Quickstart

### 0) Prereqs
- Node 18+ (preferably Node 20 LTS)
- MongoDB running locally or a MongoDB Atlas URI


### 1) Configure environment
Copy `.env.example` to `server/.env` and set values:
```
MONGODB_URI=mongodb://localhost:27017/fundraiser
PORT=5000
```
If using Atlas, paste your full connection string in `MONGODB_URI`.

### 3) Install and run (one shot)
On macOS/Linux:
```
./setup.sh
```
On Windows PowerShell:
```
./setup.ps1
```

Those will:
- install dependencies in both `client` and `server`
- start the backend on port 5000
- start the frontend on port 5173 with a proxy to the backend

### 4) Open the app
Visit http://localhost:5173

## Project structure
```
fundraiser-mern/
  client/               # Vite + React + Tailwind UI
  server/               # Express + Mongoose API
  setup.sh              # one-shot install & run for Linux/macOS
  setup.ps1             # one-shot install & run for Windows
  .gitignore
  README.md
```

## GitHub push (after you've tested locally)

From the project root (where this README lives):
```
git init
git add .
git commit -m "feat: fundraiser mern app - ui refresh"
git branch -M main
# create a repo at your account first, then set the remote like:
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## API
- `POST /api/donations` body: `{ "amount": number, "description": string, "name"?: string }`
- `GET  /api/donations`

## Notes
- For production, set proper CORS origins and consider rate limiting, authentication, and a payment gateway.
- The UI uses environment variable `VITE_API_URL` if set. Otherwise it uses `/api` which is proxied to `localhost:5000` during dev.