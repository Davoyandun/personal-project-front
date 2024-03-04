import React from "react";

type SearchBarProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSortByPrice: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  setSearchValue,
  setSortByPrice,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center mb-4">
      <input
        type="search" 
        placeholder="Buscar..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />

      <div className="inline-flex items-center space-x-2 ml-2">
        <label htmlFor="sort" className="text-sm font-medium">
          Ordenar por:
        </label>
        <select
          onChange={(e) => setSortByPrice(e.target.value)}
          id="sort"
          className="px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Price_Low">Price: Low to High</option>
          <option value="Price_High">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
