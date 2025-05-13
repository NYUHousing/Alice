# Alice Copilot – Monorepo

This repository contains both the **frontend** and **backend** for Alice, an internal AI-powered copilot designed to assist with documentation, workflow automation, and personalized queries across Jira and other systems.

---

## 🗂 Project Structure

copilot/
├── frontend/ # React + Tailwind UI (Vite, managed in Cursor)
├── backend/ # Azure Functions backend (C#, Isolated Worker)
├── shared/ # (Optional) Shared models or constants
├── .gitignore
├── README.md

---

## 🧑‍💻 Development Setup

### Frontend (React + Tailwind)

- Open the `frontend/` folder in **Cursor** (or VS Code).
- Run:

```bash
cd frontend
npm install
npm run dev

Local dev runs on http://localhost:5173/.

Make sure vite.config.js proxies API calls to the backend:

js
Copy
Edit
server: {
  proxy: {
    '/api': 'http://localhost:7071',
  },
}


Backend (Azure Functions)
Open the copilot.sln file in Visual Studio.

Run the Azure Functions project locally:

bash
Copy
Edit
cd backend
func start
The API will run on http://localhost:7071/api/.

🔄 Connecting Frontend to Backend
From the frontend, make API calls like:

ts
Copy
Edit
fetch('/api/GetUserTasks')
Vite's proxy will forward this to your local Azure Functions instance.

🚀 Deployment (Overview)
Frontend: Deploy via Azure Static Web Apps, Blob Storage, or any static hosting.

Backend: Deploy to Azure Functions as usual.

You can set environment variables using .env files for dev/production separation.

🧠 Tools Used
React + Tailwind (Vite) – frontend

Azure Functions (.NET 7 Isolated Worker) – backend

Cursor – AI-assisted frontend development

Visual Studio – backend development
