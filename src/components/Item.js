import React, { useState } from "react";


function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const inCartClass = inCart ? "in-cart" : ""
  const inCartButton = inCart ? "Remove From Cart" : "Add to Cart"
  
  function handleClick() {
    setInCart(!inCart)
  }

  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCartButton}</button>
    </li>
  );
}

export default Item;
