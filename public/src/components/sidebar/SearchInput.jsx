import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form>
        <input type="text" placeholder="Search"  />
        <button className="search-btn">
        <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput
