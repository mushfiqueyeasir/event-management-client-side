import React, { useContext, useState } from "react";

import {
  searchBarBodyStyle,
  searchBarContainerStyle,
  searchBarIconStyle,
  searchBarInputStyle,
} from "./styledClass";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";

const SearchBar = () => {
  const { handleSearch } = useContext(GLOBAL_CONTEXT);
  const [search, setSearch] = useState(false);

  return (
    <div className={searchBarContainerStyle}>
      <div className={searchBarBodyStyle}>
        <input
          onChange={handleSearch}
          onFocus={() => setSearch(true)}
          onBlur={() => setSearch(false)}
          type="text"
          name="search"
          placeholder="Search..."
          className={searchBarInputStyle}
        />
        {!search && (
          <label className={searchBarIconStyle}>
            <i className="fas fa-search"></i>
          </label>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
