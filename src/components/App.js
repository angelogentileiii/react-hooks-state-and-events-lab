import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [currentClass, setCurrentClass] = useState(false);
  console.log(currentClass)

  function changePageMode() {
    setCurrentClass(!currentClass)


  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = currentClass ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changePageMode}>Dark Mode</button>
      </header>
      <ShoppingList things={items} />
    </div>
  );
}

export default App;
