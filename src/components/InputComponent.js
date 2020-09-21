import React from "react";

const SearchComponent = ({ onChange, onFocus, value }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="movie name..."
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      />
    </div>
  );
};

export default SearchComponent;
