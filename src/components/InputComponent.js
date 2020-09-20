import React from "react";

const SearchComponent = ({ onChange }) => {
  return (
    <div className="form-group">
      <label className="label">Enter a keyword</label>
      <input
        type="text"
        className="form-control"
        placeholder="Inception"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchComponent;
