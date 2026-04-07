const express = require("express");
const router = express.Router();
const data = require("../data/inventory.json");

router.get("/", (req, res) => {
  try {
    let { q, category, minPrice, maxPrice } = req.query;

    let results = [...data];

    // Product name search (case-insensitive)
    if (q) {
      results = results.filter(item =>
        item.product_name.toLowerCase().includes(q.toLowerCase())
      );
    }

    // Category filter
    if (category) {
      results = results.filter(item =>
        item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Price filters
    if (minPrice) {
      if (isNaN(minPrice)) {
        return res.status(400).json({ error: "Invalid minPrice" });
      }
      results = results.filter(item => item.price >= Number(minPrice));
    }

    if (maxPrice) {
      if (isNaN(maxPrice)) {
        return res.status(400).json({ error: "Invalid maxPrice" });
      }
      results = results.filter(item => item.price <= Number(maxPrice));
    }

    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;