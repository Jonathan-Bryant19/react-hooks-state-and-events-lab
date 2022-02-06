import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items)

  

  function handleOnChange(e) {
    if (e.target.value === "All") {
      setSelectedCategory(items)
    } else if (e.target.value === "Produce") {
      setSelectedCategory(
        items.filter(item => item.category === "Produce")
      )
    } else if (e.target.value === "Dairy") {
      setSelectedCategory(
        items.filter(item => item.category === "Dairy")
      )
    } else if (e.target.value === "Dessert") {
      setSelectedCategory(
        items.filter(item => item.category === "Dessert")
      )
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleOnChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
