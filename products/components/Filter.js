import React from "react";

const Filter = ({ filterValueSelected }) => {
  const onFilterValueChange = (event) => {
    filterValueSelected(event.target.value);
  };
  return (
    <div className="text-[#23286b] flex flex-col justify-center items-center m-10">
      <h2 className="my-5 text-[#f5f1f3]">Choose a category:</h2>
      <select name="category" onChange={onFilterValueChange}>
        <option value="all">All</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </div>
  );
};

export default Filter;
