import React, { useState } from "react";

export const WeatherForm = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [emptyInput, setEmptyInput] = useState(false)
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      setEmptyInput(true)
      return 
    } else {
      setEmptyInput(false)
    }

    handleSearch(inputValue);
    setInputValue("");
  };

  const iconSearch = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );

  return (
    <>
      <div className="weatherForm__container">
        <form onSubmit={handleSubmit} className="weatherForm__form">
          <input
            type="text"
            placeholder="City"
            value={inputValue}
            onChange={handleInputChange}
            className="weatherForm__input-city"
          />
          <button type="submit" aria-label="Search" className="weatherForm__input-btn">
            {iconSearch}
          </button>
        </form>
      </div>
      {emptyInput&&<p className="weatherForm__error">Enter a city</p>}
    </>
  );
};