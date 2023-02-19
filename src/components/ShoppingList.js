import React, { useState } from "react";
import Item from "./Item";
import items from "../data/items";

function ShoppingList({ list }) {
  let [filter, setFilter] = useState('All')

function handleFilter(e){
    setFilter(e.target.value);
}
    const ShoppingDisplay = items.filter(item=>
      {if (filter === 'All'){
        return true 
      }
        return filter===item.category
      
    }
    )
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {ShoppingDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      
        </ul>
    </div>
  );
        }


export default ShoppingList;
