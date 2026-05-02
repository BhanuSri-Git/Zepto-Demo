# 🎨 Zepto Demo — Frontend

The React-based single-page application for the Zepto Demo grocery app.

---

## 📁 Folder Structure

```
frontend/
├── public/
│   └── index.html                    # HTML entry point
├── src/
│   ├── context/
│   │   └── CartContext.jsx           # Global cart state (React Context)
│   ├── App.js                        # Route definitions
│   ├── index.js                      # React DOM entry point
│   │
│   ├── zeptoHeader.jsx               # Top navigation header
│   ├── zeptoHomeHeader.jsx           # Home page with category tabs
│   ├── zeptoSearchBar.jsx            # Search bar component
│   ├── zeptoLogo.jsx                 # Logo component
│   ├── zeptoLoginCart.jsx            # Login + cart icon in header
│   │
│   ├── zeptoHomeCoffeePage.jsx       # Coffee section on home page
│   ├── zeptoExploreMore.jsx          # Explore more section
│   ├── HomeGrocery&Kitchen.jsx       # Grocery & Kitchen section
│   ├── SnacksDrinks.jsx              # Snacks & Drinks section
│   ├── zeptoFooter1.jsx              # Footer with popular searches
│   │
│   ├── productsByCategory.jsx        # Category/subcategory product listing
│   ├── zeptoSearchBySubcategory.jsx  # Products filtered by subcategory
│   ├── zeptoOnion.jsx                # Product detail page
│   ├── zeptoProductImagePage.jsx     # Product image display
│   ├── zeptoProductInfo.jsx          # Product info section
│   ├── zeptoProductHighlights.jsx    # Product highlights section
│   ├── zeptoAddToCart.jsx            # Add to cart button component
│   ├── cartPage.jsx                  # Shopping cart page
│   │
│   ├── categoryBased.jsx             # Category-based layout helper
│   ├── categoryPageSubcategoryPage.jsx  # Subcategory page layout
│   ├── product.jsx                   # Product card component
│   ├── productPrice.jsx              # Price display component
│   │
│   └── *.css                         # Component-level stylesheets
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

App runs at: `http://localhost:3000`

> Make sure the backend server is running at `http://localhost:5000` before starting the frontend.

---

## 🗺️ Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomeHeader` | Home page with category tabs and featured sections |
| `/product/:id` | `ProductDetails` | Full product detail page |
| `/Home/:category` | `ProductCategory` | All products in a category |
| `/Home/:category/:subcategory` | `ProductCategory` | Products filtered by subcategory |
| `/Home/subs/:subcategory` | `SearchBySubCategory` | Products by subcategory (cross-category) |
| `/cart` | `CartPage` | Shopping cart |

---

## 🛒 Cart — How It Works

Cart state is managed globally using **React Context** (`CartContext.jsx`).

### Available cart actions

| Action | Description |
|--------|-------------|
| `addToCart(product)` | Adds product or increments quantity if already in cart |
| `decreaseFromCart(productId)` | Decrements quantity, removes item if quantity reaches 0 |
| `removeFromCart(productId)` | Removes product completely from cart |
| `updateQuantity(productId, qty)` | Sets quantity to a specific value |

### Usage in any component

```jsx
import { useCart } from "./context/CartContext";

const { cartItems, addToCart, removeFromCart } = useCart();
```

> ⚠️ Cart state is in-memory only — it resets on page refresh (no localStorage persistence yet).

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | v19 | UI library |
| `react-router-dom` | v7 | Client-side routing |
| `axios` | v1 | HTTP requests to backend API |
| `@fortawesome/fontawesome-free` | v7 | Icons for category buttons and UI |

---

## 🎨 Styling

- Each component has its own `.css` file for scoped styles
- Global styles are in `index.css` and `App.css`
- Font Awesome icons used throughout the UI for category tabs and buttons

---

## 🔌 Backend API Base URL

The frontend communicates with the backend at:

```
http://localhost:5000
```

If you deploy the backend, update the API base URL in the relevant component files (`zeptoOnion.jsx`, `productsByCategory.jsx`, `cartPage.jsx`, etc.).

---

## 🧪 Testing

```bash
npm test
```

Uses React Testing Library and Jest (via Create React App defaults).

---

## 🏗️ Build for Production

```bash
npm run build
```

Outputs optimized static files to the `build/` folder, ready for deployment.

---

## 🔧 Scripts

```bash
npm start        # Start development server (port 3000)
npm run build    # Build for production
npm test         # Run tests
npm run eject    # Eject CRA config (irreversible)
```
