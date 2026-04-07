function Results({ results }) {
  if (results.length === 0) {
    return (
      <p className="text-center text-gray-400 text-lg mt-6">
        🚫 No results found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      {results.map((item) => (
        <div
          key={item.id}
          className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border"
        >
          <h2 className="text-xl font-bold text-gray-800">
            {item.product_name}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            📦 {item.category}
          </p>

          <p className="text-indigo-600 font-bold mt-3 text-lg">
            💰 ${item.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Results;