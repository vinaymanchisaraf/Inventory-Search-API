import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Results from "./components/Results";

function App() {
  const [filters, setFilters] = useState({
    q: "",
    category: "",
    minPrice: "",
    maxPrice: ""
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 AUTO SEARCH with debounce
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchResults();
    }, 500);

    return () => clearTimeout(delay);
  }, [filters]);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/search", {
        params: filters
      });
      setResults(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl">

        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          🔍 Inventory Search
        </h1>

        <SearchBar filters={filters} setFilters={setFilters} />
        <Filters filters={filters} setFilters={setFilters} />

        {/* 🔥 Loading */}
        {loading && (
          <p className="text-center mt-4 text-blue-600 font-semibold">
            Loading...
          </p>
        )}

        <div className="mt-6">
          <Results results={results} />
        </div>

      </div>
    </div>
  );
}

export default App;