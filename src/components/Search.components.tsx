import { FaSearch } from "react-icons/fa";

const Search: React.FC = () => {
  return (
    <div className="flex items-center mt-2 mb-2 gap-2 border-b border-gray-300 pb-2">
      <FaSearch />

      <input
        type="text"
        id="search"
        placeholder="Search"
        className="flex-grow outline-none border-none focus:ring-0  placeholder-gray-500 rounded-sm text-gray-700"
      />
    </div>
  );
};

export default Search;
