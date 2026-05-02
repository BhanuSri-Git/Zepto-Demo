# 🛒 Zepto Demo — Full Stack Grocery App

A full-stack clone of the [Zepto](https://www.zeptonow.com/) quick-commerce grocery app, built with **React** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 📁 Project Structure

```
zepto-demo/
├── backend/          # Express REST API + MongoDB
├── frontend/         # React SPA
├── package.json      # Root-level scripts
└── README.md
```

---

## ✨ Features

- 🏠 **Home Page** — Category navigation bar (Fresh, Home, Cafe, Electronics, etc.)
- 🔍 **Search** — Search products by name via the header search bar
- 📦 **Product Listing** — Browse products by category and subcategory
- 🛍️ **Product Detail Page** — Full product info including brand, weight, dietary preference, seller details
- 🛒 **Cart** — Add, remove, and update product quantities with real-time total
- 🌿 **Fresh Produce** — Fruits, Vegetables, Leafy & Herbs
- 🏡 **Home Category** — Cleaning aids, Pooja & Worship Needs
- ☕ **Cafe Section** — Coffee and beverage products
- 🍿 **Snacks & Drinks** — Snack and beverage listings
- 📱 **Responsive UI** — Mobile-friendly layout

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/BhanuSri-Git/Zepto-Demo.git
cd Zepto-Demo
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

### 3. Set up the Frontend

```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`.

---

## 🔗 API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/product/:id` | Get single product by ID |
| GET | `/api/Home/:category` | Get subcategories for a category |
| GET | `/api/Home/:category/:subcategory` | Get products by category & subcategory |
| GET | `/api/Home/subs/:subcategory` | Get products by subcategory only |
| POST | `/api/cart/add` | Add product to cart & update stock |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, React Router v7, Axios |
| Backend | Node.js, Express 5, Mongoose |
| Database | MongoDB Atlas |
| Styling | CSS Modules, Font Awesome |
| Dev Tools | Nodemon, Create React App |

---

## 📸 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with category tabs and featured sections |
| `/product/:id` | Product detail page |
| `/Home/:category` | Products by category |
| `/Home/:category/:subcategory` | Products filtered by subcategory |
| `/Home/subs/:subcategory` | Search results by subcategory |
| `/cart` | Shopping cart |

---

## ⚠️ Notes

- The `backend/.env` file contains your MongoDB URI — **never commit this to GitHub**. It is already listed in `.gitignore`.
- The cart state is managed client-side via React Context. Cart data resets on page refresh.
- Stock is decremented in MongoDB when items are added to the cart.

---

## 📄 License

This project is for educational/demo purposes only. Not affiliated with Zepto.
