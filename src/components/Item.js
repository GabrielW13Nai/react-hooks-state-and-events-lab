import React, { useState } from "react";




function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  const cartstatus = inCart? "" : "in-cart"
  
  function handleAdd(){
    setCart(inCart => !inCart)
  }

  return (
    <li className={cartstatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{inCart? "Add to cart" : "in-cart"}</button>
    </li>
  );
}


export default Item;
