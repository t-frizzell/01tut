// This component can be treated as the "Parent" component for all other components. 

// import the other React Components
import Header from './Header'; // Path is relative to this file's directory
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react'; //Ch11 - Add useEffect
import AddItem from './AddItem';
import SearchItem from './SearchItem';

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
  ] || []); 
  /* 
    Initalize useState with an empty array (give it a default data type)
    || is a "short circuit" operator. Basically checks if the first value is null, if true then returns the second type.
  */


  // only 1 source for new entries for the controlled input.
  const [newItem, setNewItem] = useState(''); // can be empty string
  const [search, setSearch] = useState(''); // can be empty string

  useEffect(() => {
    // This is where would put saving to local storage
  }, [items]); 
  /*
    Only run the function when the dependency changes.
    With empty dependencies ([]), useEffect will only be called at load-time
      Ideal way to load data, especially if working with an API
    Note: To prevent infintie loop, do not use the setData & data of a useState with useEffect. Pick one use.
  */

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    console.log("List Saved and Updated");
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const _newItem = { id: id, checked: false, item: item };

    const _listItems = [...items, _newItem];
    setAndSaveItems(_listItems);
  }

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
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    // Iterate through the items by using another higher order function, .filter()
    // Create a new array that has filtered out the item id that matches passed id parameter.
    // "Returns the elements of an array that meet the condition specified in a callback function."
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent submit from reloading the page.
    if (!newItem) return; // If no newItem, exit function.

    addItem(newItem);
    //addItem function
    setNewItem(''); // remove text from input box.
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

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      {/* Drill "pass" variables and functions down to child component */}
      <Content
        items={items.filter(i => ((i.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}

// Export required for imports into other components
export default App;
