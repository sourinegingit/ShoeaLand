import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useState<string>("");
    const navigate = useNavigate();
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if (query) {
        navigate(`/search/${query}`);
      }
    };
  
    return (
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="px-4 py-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
    );
  };
  export default Search;