import React, {useState} from "react";
import Item from "./Item";
import items from "../data/items";


function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function selectFoodChange(event) {
    // console.log(event.target.value)
    setSelectedCategory(event.target.value)
  }

  const category = items.filter((item) => {
    if(selectedCategory === "All") {
      return true
    } else {
      return item.category === selectedCategory
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={selectFoodChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {category.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
