import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const input = useRef(null);
  const handleForm = (e) => {
    e.preventDefault();
    if (input.current.value === "") {
      setSearch("a");
    } else {
      setSearch(input.current.value);
    }
  };
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div className="search-container">
      <form action="" onChange={handleForm} onSubmit={handleForm}>
        <label htmlFor="name">
          <h3>Search Your Favorite Cocktail</h3>
        </label>
        <input type="text" id="name" ref={input} />
      </form>
    </div>
  );
};

export default SearchForm;
