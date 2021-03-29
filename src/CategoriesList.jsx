import React from "react";

const CategoriesList = (props) => {
  return (
    <>
      <div className="Category-list">
        <a href="#link">{props.name}</a>
      </div>
    </>
  );
};
export default CategoriesList;
