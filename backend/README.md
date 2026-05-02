# ⚙️ Zepto Demo — Backend

The REST API server for the Zepto Demo app, built with **Node.js**, **Express 5**, and **MongoDB (Mongoose)**.

---

## 📁 Folder Structure

```
backend/
├── models/
│   └── products.js       # Mongoose Product schema
├── config/               # Reserved for future config
├── .env                  # Environment variables (not committed)
├── server.js             # Express app entry point
├── productCreate.js      # Seed script to populate MongoDB
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/zeptoDemo
PORT=5000
```

> ⚠️ Never commit your `.env` file. It is already in `.gitignore`.

### 3. Seed the database (first time only)

```bash
node productCreate.js
```

This populates MongoDB with sample products across all categories (Fruits, Vegetables, Leafy & Herbs, Cleaning Aids, Pooja Needs, etc.)

### 4. Start the server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server runs at: `http://localhost:5000`

---

## 📡 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Fetch all products |
| `GET` | `/api/product/:id` | Fetch a single product by MongoDB `_id` |

### Category & Subcategory

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/Home/:category` | Get all distinct subcategories for a category |
| `GET` | `/api/Home/:category/:subcategory` | Get products filtered by category + subcategory. Use `All` to get all products in a category |
| `GET` | `/api/Home/subs/:subcategory` | Get products by subcategory name only (cross-category) |

### Cart

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/cart/add` | Add item to cart and decrement stock in DB |

**POST `/api/cart/add` — Request Body:**

```json
{
  "productId": "64abc123...",
  "quantity": 2
}
```

**Success Response:**

```json
{
  "message": "Cart updated successfully",
  "productId": "64abc123...",
  "remainingStock": 18
}
```

---

## 🗄️ Product Schema

```js
{
  name: String,              // required
  category: String,          // required — e.g. "fresh", "home", "cafe"
  subcategory: String,       // required — e.g. "Fruits", "cleaning aids"
  price: Number,             // required
  image: String,             // image URL
  description: String,
  stock: Number,             // default: 0
  Brand: String,             // required
  productType: String,       // required
  DietaryPreferance: String, // required
  GoodFor: String,
  weight: String,            // required
  customareCareDetails: String,
  informationDisclaimer: String,
  customerCareDetails: String,
  sellerName: String,
  sellerAddress: String,
  sellerLicenseNo: String,
  countryOfOrigin: String,
  shelfLife: String
}
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `express` v5 | Web framework |
| `mongoose` v8 | MongoDB ODM |
| `cors` | Cross-origin request handling |
| `dotenv` | Environment variable loading |
| `nodemon` *(dev)* | Auto-restart on file changes |

---

## 🗂️ Seeded Product Categories

| Category | Subcategories |
|----------|--------------|
| `fresh` | Fruits, Vegetables, Leafy & Herbs |
| `home` | cleaning aids, Pooja & Worship Needs |
| `cafe` | Coffee & beverages |
| `snacks` | Chips, Drinks, etc. |

---

## 🔧 Scripts

```bash
npm start      # Start with node
npm run dev    # Start with nodemon (auto-reload)
```
