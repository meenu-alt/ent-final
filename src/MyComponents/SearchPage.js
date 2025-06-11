import React, { useState, useEffect } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";
import searchData from "../assets/json/searchData.json";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the search query from the URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("q") || "";
    setQuery(searchQuery);
    performSearch(searchQuery);
  }, [location.search]);

  // Perform search based on the query
  const performSearch = (searchQuery) => {
    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = searchData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    navigate(`/search?q=${encodeURIComponent(newQuery)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="container max-w-2xl bg-white p-6 rounded-lg shadow-lg" style={{ margin: "50px auto" }}>
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Search
        </h1>
        <form
          className="w-full flex bg-gray-50 shadow-sm rounded-lg overflow-hidden p-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            className="flex-grow px-4 py-2 text-gray-700 outline-none border border-gray-300 rounded-l-md"
            placeholder="Search"
            value={query}
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-200"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div className="mt-6">
          {query && results.length === 0 ? (
            <p className="text-gray-500 text-center">No results found for "{query}".</p>
          ) : results.length > 0 ? (
            <>
              <p className="text-gray-600 mb-4">Showing results for "{query}"</p>
              {results.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 p-4 mb-4 shadow-md rounded-lg hover:shadow-lg transition duration-200"
                >
                  <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-gray-500 text-center">Enter a search term to find results.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;