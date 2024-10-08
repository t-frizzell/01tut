// This component can be treated as the "Parent" component for all other components. 

// import the other React Components
import Header from './Header'; // Path is relative to this file's directory
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react'; //Ch11 - Add useEffect
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './APIRequest';

// Components are represented by functions
// Components use Arrow Functions by standard
const App = () => {
  const API_URL = "http://localhost:3500/items"; // This url will not change for this project

  /* Define variables to be used in useState */
  /* The following is called array destrucuting. */
  /* name is treated as a variable, setName is treated as a function  */

  const [items, setItems] = useState([]); // Keep the empty array, the default value type for items.
  /* 
    Initalize useState with an empty array (give it a default data type)
    || is a "short circuit" operator. Basically checks if the first value is null, if true then returns the second type.
  */


  // only 1 source for new entries for the controlled input.
  const [newItem, setNewItem] = useState(''); // can be empty string
  const [search, setSearch] = useState(''); // can be empty string

  //setup fetch error with useState
  const [fetchError, setFetchError] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); // Initally true

  useEffect(() => {
    // Use async and await, along with fetch ("Read" in CRUD)
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data"); // ok = 200, not ok = 404
        setFetchError(null);
        
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        setFetchError(err);
        console.log(err.message); //stack or message
      } finally {
        setIsLoading(false);
      }
    }

    // Call the async function. Note it does not return a value.
    fetchItems();

  }, []); // execute useEffect at load.
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

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const _newItem = { id: id, checked: false, item: item };

    const _listItems = [...items, _newItem];
    setAndSaveItems(_listItems);

    // update REST API, POST request
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_newItem) // only send the new item
    }

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  //Functions can also be passed down with "prop drilling"
  const handleCheck = async (id) => {
    // passed id from the array list, which is the key of the list item.
    console.log(`key id: ${id}`); // template literal: ${value}

    // To change the state, again use .map() to iterate through the array of items.
    // iterate through an array using map
    // Map is used to iterate through the array!
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    // there might be a better way of doing this, like indexing or using a for loop

    // The setItems function takes the entire, not just a single entry into the current array.
    setAndSaveItems(listItems);

    // update Rest API, Get request
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked }) //myItem[0].checked
    };
    const reqUrl = `${API_URL}/${id}`; // Update the specific index with PATCH (localhost:3500/items/5 (with index 5))
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result); // if error is not null...
  };

  const handleDelete = async (id) => {
    // Iterate through the items by using another higher order function, .filter()
    // Create a new array that has filtered out the item id that matches passed id parameter.
    // "Returns the elements of an array that meet the condition specified in a callback function."
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);

    const deleteOptions = {method: 'DELETE'};
    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, deleteOptions);
    if (result) setFetchError(result);
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color: "red"}}>{`${fetchError}`}</p>}
        {/* Drill "pass" variables and functions down to child component */}
        {!fetchError && !isLoading && <Content
          items={items.filter(i => ((i.item).toLowerCase()).includes(search.toLowerCase()))}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        /> }
      </main>
      <Footer items={items} />
    </div>
  );
}

// Export required for imports into other components
export default App;
