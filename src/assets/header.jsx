const Header = ({ onSortChange, onSearchChange }) => {
  const handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    onSearchChange(searchQuery);
  };

  return (
    <div className="header">
      <button onClick={() => onSortChange("year.desc")}>Date New to Old</button>
      <button onClick={() => onSortChange("year.asc")}>Date Old to New</button>
      <button onClick={() => onSortChange("rate.desc")}>Popularity</button>
      <button onClick={() => onSortChange("title.asc")}>A-Z</button>
      <button onClick={() => onSortChange("title.desc")}>Z-A</button>
      <input
        type="text"
        placeholder="Wonach suchst du?"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Header;
