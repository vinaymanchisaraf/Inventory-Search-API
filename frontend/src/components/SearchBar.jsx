function SearchBar({ filters, setFilters }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search products..."
      className="w-full p-3 border rounded-xl mb-4 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
      value={filters.q}
      onChange={(e) =>
        setFilters({ ...filters, q: e.target.value })
      }
    />
  );
}

export default SearchBar;