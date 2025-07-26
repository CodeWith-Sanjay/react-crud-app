# React + Node.js + PostgreSQL CRUD App

A full-stack CRUD (Create, Read, Update, Delete) web application built using:

- React.js (Frontend)
- Node.js + Express.js (Backend)
- PostgreSQL (Database)

## ✨ Features

- Add new users with multiple details (name, email, gender, job, etc.)
- Edit user data inline via form
- Delete users
- Display users in a styled, responsive table
- Modular component structure using `UserForm` and `UserTable`

## ⚠️ Caution

> This project **stores real user data into a PostgreSQL database**. Make sure your database is configured properly and not exposed publicly. **Do not deploy with production data without securing the backend.**

---

## 📁 Project Structure

CRUD_users/
├── backend/
│ ├── index.js # Express server with PostgreSQL integration
│ └── db.js # PostgreSQL connection setup
├── frontend/
│ ├── src/
│ │ ├── main.jsx
│ │ ├── components/
│ │ │ ├── UserForm.jsx
│ │ │ |── UserTable.jsx
| | | |__ UserForm.css
| | |_|__ UserTable.css
│ └── public/
│ └── index.html
└── README.md

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- PostgreSQL installed and running

---

### 🔧 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
2. Install dependencies:
    npm install
3. Create a table in PostgreSQL:
    CREATE TABLE crud_users (
    name TEXT,
    age INT,
    email TEXT,
    gender TEXT,
    city TEXT,
    country TEXT,
    contact TEXT,
    qualification TEXT,
    specification TEXT,
    job TEXT
    );
4. Configure database connection in db.js.
5. Start the backend:
node index.js


💻 Frontend Setup
1. Navigate to the frontend folder:
    cd frontend
2. Install dependencies:
    npm install
3. Start the frontend:
    npm run dev


🌐 App Usage
- The app runs on http://localhost:3000
- Make sure the backend is also running on the default http://localhost:3000/users
- You can:
    Add a user via the form
    View all users in a table
    Edit or delete users from the list


📌 Important Notes
- Ensure CORS is properly enabled on the backend.
- The frontend makes API requests to /users endpoint.
- Form validation and user feedback can be enhanced.

📸 Screenshots
Add screenshots here for better visibility (optional)

🛡 License
This project is open-source and free to use for learning purposes.

🙋‍♂️ Author
Built by Sanjay