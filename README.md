# Mini Shop

A modern and responsive mini shopping application built with React, Axios, and Tailwind CSS. The application fetches product data from the DummyJSON API and provides an interactive shopping experience.

## Features

- **Product Display:** Fetch and display products from the DummyJSON API.
- **Categories:** Browse products by category.
- **Pagination:** Navigate through products using page controls.
- **URL Synchronization:** Keep category and page selections synchronized with URL query parameters.
- **Add Products:** Submit a form to create new products using POST requests.
- **Delete Products:** Remove products using optimistic UI updates with rollback on failure.
- **Loading and Error States:** Display feedback while data is loading or when requests fail.
- **Reusable Hooks:** Manage product, category, and URL state with custom React hooks.
- **Responsive Design:** A clean interface that adapts to different screen sizes.

## Technologies Used

- React
- JavaScript
- Axios
- Tailwind CSS
- Vite
- Lucide React
- DummyJSON API

## API Integration

This project uses the [DummyJSON API](https://dummyjson.com/) for product data.

Main endpoints:

| Endpoint | Purpose |
|---|---|
| `/products` | Fetch products |
| `/products/:id` | Fetch a single product |
| `/products/categories` | Fetch categories |
| `/products/category/:category` | Filter products by category |
| `/products/search?q=` | Search products |
| `/products/add` | Add a product |
| `/products/:id` | Delete a product |

**Note:** DummyJSON simulates product creation and deletion. Changes are not permanently saved on the server.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rithairagena13-spec/week9-shop.git
```

### 2. Navigate into the project

```bash
cd week9-shop
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## Project Structure

```text
src/
├── api/
│   ├── client.js
│   └── products.js
├── hooks/
│   ├── useProducts.js
│   ├── useProduct.js
│   ├── useCategories.js
│   └── useUrlState.js
├── components/
│   ├── Navbar.jsx
│   ├── CategoryList.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── AddProductForm.jsx
│   ├── Loading.jsx
│   └── ErrorMessage.jsx
├── pages/
│   └── HomePage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Learning Objectives

This project demonstrates practical experience with:

- Creating reusable Axios instances.
- Organizing API requests into service functions.
- Using React `useEffect` and `useState`.
- Creating custom data-fetching hooks.
- Handling asynchronous requests and cancellation.
- Loading independent data in parallel.
- Synchronizing application state with URL parameters.
- Managing POST and DELETE requests.
- Implementing optimistic UI updates and rollback.

## Author

**Ritha IRAGENA**

GitHub: [rithairagena13-spec](https://github.com/rithairagena13-spec)

---

*Built as part of the Week 9 React Data Fetching and Axios classwork.*