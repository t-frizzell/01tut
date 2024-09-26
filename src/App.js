// This component can be treated as the "Parent" component for all other components. 

// import the other React Components
import Header from './Header'; // Path is relative to this file's directory
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

// Components are represented by functions
// Components use Arrow Functions by standard
const App = () => {
  // Crate a new javascript variable, can be used inside JSX return statement.
  // JSX renders strings and integers as text in the web view.
  const name = "Drake";
  const number = 10;
  // To use these variables inside JSX, must use { }.
  // The use of { } signifies the use of a Javascript expression.


  /* Define variables to be used in useState */
  /* The following is called array destrucuting. */
  /* name is treated as a variable, setName is treated as a function  */
  const [items, setItems] = useState([
    // default data of the variable
    {
      id: 1,
      checked: true,
      item: "One half pound bag of ..."
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);


  //Functions can also be passed down with "prop drilling"
  const handleCheck = (id) => {
    // passed id from the array list, which is the key of the list item.
    console.log(`key id: ${id}`); // template literal: ${value}

    // To change the state, again use .map() to iterate through the array of items.
    // iterate through an array using map
    // Map is used to iterate through the array!
    const listItems = items.map((item) => item.id == id ? { ...item, checked: !item.checked } : item);
    // there might be a better way of doing this, like indexing or using a for loop

    // The setItems function takes the entire, not just a single entry into the current array.
    setItems(listItems);
  };

  const handleDelete = (id) => {
    // Iterate through the items by using another higher order function, .filter()
    // Create a new array that has filtered out the item id that matches passed id parameter.
    // "Returns the elements of an array that meet the condition specified in a callback function."
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  // The return statement inside functions (or "components") returns JSX.
  // JSX allows the use of Javascript expressions (ex: {logo}).
  // Expressions can use data types, variables, functions
  return (
    <div className="App">
      {/* Components */}

      {/* With Prop drilling, can pass properites to components */}
      {/* Properties are similar to how they are used in HTML elements */}
      <Header title="Groceries" />

      {/* Drill "pass" variables and functions down to child component */}
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer items={items}/>
    </div>
  );
}

// Export required for imports into other components
export default App;
