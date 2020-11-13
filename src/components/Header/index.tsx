import React, { useState } from "react";
import { useData } from "../Contexts/index";
const Header: React.FC = () => {
  const context = useData();
  return (
    <header id="header">
      <div className="search-bar">
        <input
          type="text"
          placeholder="search by "
          className="search__input"
          onChange={(e: React.ChangeEvent<{ value: string }>) => context.handleSearch(e.target.value)}
        />
        <select
          className="search__select"
          onChange={(e: React.ChangeEvent<{ value: string }>) => context.searchOption(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
        <img src="./src/images/search.svg" alt="search__icon" className="search__icon" />
      </div>
    </header>
  );
};

export default Header;
