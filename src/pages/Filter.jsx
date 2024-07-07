import React from "react";
import x from '../assets/x.svg'

const Filter = () => {
  return (
    <>
      <div className="filter-title">Filter</div>
      <div className="filter-buttons">
        <div>
          <img src={x} alt="" />
          Unisex
        </div>
        <div>
          <img src={x} alt="" />
          All
        </div>
      </div>
    </>
  );
};

export default Filter;
