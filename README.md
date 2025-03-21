# PostgreStore - PERN Stack E-commerce

A full-stack e-commerce application built with the PERN (PostgreSQL, Express, React, Node.js) stack.

## 🔴 Live Demo

[PostgreStore Live](https://pern-store-xowm.onrender.com)

## ✨ Features

- 🛍️ Product listing with dynamic grid layout
- 🌓 Dark/Light theme support
- ➕ Add new products with modal form
- 🖼️ Image URL support for products
- 💰 Price formatting and validation
- 🔄 Real-time updates
- 🎯 Rate limiting with Arcjet
- 🆔 UUID for secure product IDs
- 📱 Responsive design

## 🛠️ Tech Stack

- **Frontend:**

  - React
  - TailwindCSS
  - DaisyUI
  - Zustand (State Management)
  - React Router DOM
  - Lucide React (Icons)

- **Backend:**
  - Node.js
  - Express
  - PostgreSQL (Neon DB)
  - UUID
  - Arcjet (Rate Limiting)

## 🚀 Quick Start

1. Clone the repository:

```bash
git clone https://github.com/Asif-Zaman-Suvo/PERN-Store.git
```

2. Install dependencies:

```bash
# Root directory
npm install

# Frontend directory
cd frontend
npm install
```

3. Set up environment variables:

```env
# .env
PORT=3000
PGHOST=your_neon_db_host
PGDATABASE=your_db_name
PGUSER=your_db_user
PGPASSWORD=your_db_password
ARCJET_KEY=your_arcjet_key
```

4. Run development servers:

```bash
# Backend (root directory)
npm run dev

# Frontend (frontend directory)
npm run dev
```

5. Seed the database:

```bash
npm run seed
```

## 📁 Project Structure

├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── productController.js
│ ├── lib/
│ │ └── arcjet.js
│ ├── routes/
│ │ └── productRoutes.js
│ ├── seeds/
│ │ └── product.js
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ └── App.jsx
│ └── index.html
│
└── package.json

## 🔒 Security Features

- Helmet for secure headers
- CORS enabled
- Rate limiting with Arcjet
- UUID for product IDs
- Environment variable protection

## 🛠️ Development

- **Frontend Development**: `npm run dev` in frontend directory
- **Backend Development**: `npm run dev` in root directory
- **Database Seeding**: `npm run seed`
- **Production Build**: `npm run build`

## 🚀 Deployment

The application is deployed on Render.com with the following configuration:

- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

<h3 align="center">MD Asifuzzaman Suvo</h3>
<p align="center">
    <a href="https://www.linkedin.com/in/md-asifuzzaman-suvo/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
    </a>
</p>

---

⭐️ Star this repo if you find it helpful!
