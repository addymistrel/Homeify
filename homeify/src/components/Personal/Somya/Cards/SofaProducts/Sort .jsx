import React from "react";
function Sort({ sortOrder, setSortOrder, handleOpen }) {
  function handleChange(e) {
    setSortOrder(e.target.value);
  }

  return (
    <div className="sort_div">
      <div id="filter_div">Filter By</div>
      <div id="swatch_div">
        <button className="button-24" role="button" onClick={handleOpen}>
          Color Swatch
        </button>
      </div>
      <div id="brand_div">
        <button className="button-24" role="button">
          Brand
        </button>
      </div>
      <div id="margin_div">
        <button className="button-24" role="button">
          Margin
        </button>
      </div>
      <div id="sort_head">
        <h3>Sort By</h3>
      </div>
      <div id="sort_option">
        <select onChange={handleChange}>
          <option value={1}>Lowest to Highest</option>
          <option value={2}>Highest to Lowest</option>
        </select>
      </div>
    </div>
  );
}
export default Sort;
