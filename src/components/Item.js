import React, {useState} from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function addToCart (){
    setInCart(!inCart)
    console.log(inCart)
  }

    const isInCart = inCart ? "in-cart" : "";
    let buttonContent;
    
    if (isInCart === "in-cart") {
      buttonContent = "Remove from Cart"
    } else {
      buttonContent = "Add to Cart"
    }
    

    return (
      <li className={isInCart}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button onClick={addToCart} className="add">{buttonContent}</button>
      </li>
    );
  }

export default Item;
