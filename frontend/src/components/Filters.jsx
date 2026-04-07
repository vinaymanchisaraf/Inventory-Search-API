function Filters({ filters, setFilters }) {
  return (
    <div>
      <select
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={(e) =>
          setFilters({ ...filters, minPrice: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: e.target.value })
        }
      />
    </div>
  );
}

export default Filters;