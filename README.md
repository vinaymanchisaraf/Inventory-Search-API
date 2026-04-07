 Inventory Search Application

A full-stack inventory search system that allows users to search and filter products across multiple categories using dynamic query parameters.

---

## Live Demo

* Frontend: https://your-vercel-link
* Backend API: https://your-render-link

---

## Project Objective

The goal of this project is to build a scalable inventory search feature similar to real-world e-commerce or B2B platforms, where users can efficiently filter products based on multiple criteria such as name, category, and price.

---

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Data Source

* Static JSON file (in-memory dataset)

---

## Features

### Search Functionality

* Search products by name (partial match supported)
* Case-insensitive search

### Filters

* Category-based filtering
* Price range filtering (min & max)
* Combined filters support

### Smart UX Improvements

* Debounced auto-search (search triggers automatically while typing)
* Loading state indicator
* Clean and modern UI using Tailwind CSS
* Responsive card-based layout

### Result Handling

* Displays filtered results dynamically
* Shows “No results found” when no matches exist

---

## API Documentation

### GET `/search`

#### Query Parameters:

| Parameter | Description                  |
| --------- | ---------------------------- |
| q         | Product name (partial match) |
| category  | Filter by category           |
| minPrice  | Minimum price                |
| maxPrice  | Maximum price                |

#### Example:

```
/search?q=iphone&category=electronics&minPrice=500&maxPrice=1000
```

---

## Search Logic Explained

The backend applies filters dynamically based on query parameters:

1. Starts with full dataset
2. Applies product name filter using:

   * `includes()` for partial match
   * `toLowerCase()` for case-insensitivity
3. Applies category filter (exact match)
4. Applies price filters using numeric comparisons
5. Returns filtered results

All filters are optional and can be combined.

---

## Edge Case Handling

* Empty query → returns all products
* Invalid price input → handled gracefully
* No matching results → displays user-friendly message
* Supports multiple filters simultaneously

---

## Performance Improvements (For Large Scale)

If this system were scaled to large datasets:

* Use database indexing (MongoDB / SQL indexing)
* Implement pagination to limit results
* Add caching layer (Redis)
* Use full-text search for faster queries

---

## Project Structure

```
inventory-search/
│
├── backend/
│   ├── data/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│
└── README.md
```

---

## How to Run Locally

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Deployment

* Frontend deployed on **Vercel**
* Backend deployed on **Render**

---

## Key Highlights

* Clean separation of frontend and backend
* Dynamic filtering logic
* Real-world scalable design approach
* Modern UI/UX with Tailwind CSS

---

## Conclusion

This project demonstrates full-stack development skills including API design, dynamic filtering logic, UI/UX design, and deployment. It simulates a real-world inventory search system with scalability considerations.

---

## Author

**Vinay Manchisaraf**

---
