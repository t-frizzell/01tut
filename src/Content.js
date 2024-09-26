import React from 'react'
import { useState } from 'react';

// Move arrow function from App.js into this Main.js component

const Content = () => {

    // useState
    // variable, set function

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
    // couldnt I create a struct instead of manually creating data like this?

    // Functions are created using const keyword
    // Standard practice is to create functions using arrow functions = () => {}

    const handleCheck = (id) => {
        // passed id from the array list, which is the key of the list item.
        console.log(`key id: ${id}`); // template literal: ${value}
        
        // To change the state, again use .map() to iterate through the array of items.
            // iterate through an array using map
            // Map is used to iterate through the array!
        const listItems = items.map((item) => item.id == id ? {...item, checked: !item.checked} : item);
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

    return (
        <main>
                {/* To pass in arguments / parameters to functions from properties, use an anonymous function () => {} */}

                {/* Display the javascript array in JSX with an unordered list. */}
                {/* An unordered list begins with an HTML element <ul> */}
            {items.length ? (
                <ul>
                    {/* inside JSX, we need an expression to display the data */}
                    {/* To iterate through the array, need to use .map() (a higher order function)*/}
                    {/* Remember to always practice using arrow functions () => {} */}

                    {/* Begin automatically, do not use arrow function in beginning */}
                        {/* Each item will be a list item (<li></li>) */}
                        {/* Give each list a class name PROPERTY */}

                    {/* HTML Attribute values can be set using JSX expressions (checked, key, etc...) */}
                    {items.map((item) => (
                        <li className="item" key={item.id}> {/* React needs keys for each list item */}
                            <input type='checkbox' checked={item.checked} onChange={() => {handleCheck(item.id)}}/>
                            <label 
                                onDoubleClick={() => {handleCheck(item.id)}}
                                style={(item.checked) ? {textDecoration: 'line-through'} : null} 
                            > {item.item} </label> {/* Display the label with a JS Expression */}
                            <button onClick={() => {handleDelete(item.id)}}>Delete</button>
                        </li>
                        
                    ))}
                </ul>
            ) : (
                <p style={{marginTop: '2rem'}}>
                    List is empty
                </p>
            )}
        </main>
    )
}

export default Content