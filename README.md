# 📧 TertiaryGuide Newsletter System

A full-stack **newsletter subscription system** for TertiaryGuide, built with **React.js** on the frontend and **FastAPI** on the backend. Admins can log in securely, compose newsletters, and send them as a **carbon copy (BCC)** to all registered subscribers.

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router DOM, Axios, CSS (custom responsive styles)
- **Backend:** FastAPI, Python, JWT Authentication
- **Database:** SQLite (can be swapped with PostgreSQL or MongoDB)
- **Emailing:** SMTP via `smtplib`
- **Environment Management:** `python-dotenv`

---

## ✨ Features

### Public
- 📥 Users can subscribe to newsletters via a simple form.
- 📧 Subscriptions are validated and stored securely.

### Admin Panel
- 🔐 Login with protected JWT token auth.
- 📰 Send a newsletter email to all subscribers.
- ✅ Secure logout mechanism.
- 💡 Admin-only routes and access handling.

---

## 🖼️ Preview

 

---

## 📁 Folder Structure
tertiaryguide-newsletter/
├── backend/
│ ├── main.py
│ ├── auth.py
│ ├── admin.py
│ └── database.py
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── component/
│ │ │ ├── SubscriberForm.jsx
│ │ │ ├── Admin/
│ │ │ │ ├── loginpage.jsx
│ │ │ │ ├── logout.jsx
│ │ │ │ ├── Newsletter.jsx
│ │ │ └── styles/
│ │ │ └── newsletter.css
├── .env
├── README.md
└── requirements.txt

### 1. Clone the Repo

```bash
git clone https://github.com/<your-username>/tertiaryguide-newsletter.git
cd tertiaryguide-newsletter

cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

JWT_SECRET=your_jwt_secret
JWT_ALGORITHM=HS256
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

cd ../frontend
npm install
npm start

📬 Sending Newsletters
Log in at /admin/login

Compose subject and message.

Hit Send, and emails will be BCC'd to all users in the database.

📌 To-Do
 Save newsletter history to the database

 Implement multi-admin support

 Add email analytics (sent/opened status)

 Connect to MongoDB or PostgreSQL in production

🧑‍💻 Author
Felix Owusu
📫 felixo6996@gmail.com
🔗 WhatsApp on my Profile





