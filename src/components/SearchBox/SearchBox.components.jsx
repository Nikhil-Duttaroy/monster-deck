import React from "react";
import "./SearchBox.styles.css";

export const SearchBox = (props) => {
  return (
    <div className='search'>
      <input
        type='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};
