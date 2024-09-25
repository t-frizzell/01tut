import React from 'react'
import { useState } from 'react';

// Move arrow function from App.js into this Main.js component

const Content = () => {
    // useState
    // variable, set function

    /* Define variables to be used in useState */
    /* The following is called array destrucuting. */
    /* name is treated as a variable, setName is treated as a function  */
    const [name, setName] = useState('default_data'); // Provide default data when loaded.
    /* Because `name` is set to a variable, it can be used directly in JSX */

    // Another example of useState. 
        // Remember, similar to a Rust tuple
    const [count, setCount] = useState(0);

    // Functions are created using const keyword
    // Standard practice is to create functions using arrow functions = () => {}
    const handleNameChange = () => {
        const names = ["bob", "kevin", "dave"];
        const int = Math.floor(Math.random() * 3);
        //return names[int]; 

        // Instead of returning a random value, can set the value into useState
        setName(names[int]);
    };

    // Remember, using an arrow function
    const handleClick = () => {
        setCount(count+2); // 0+2
        setCount(count+2); // 0+2 again. This will do the same thing, because it is referencing the same value that was initially brought into the function.

        // use the count variable from useState
        // ❗ returning useState variable will return the value it held when the function was called.
        console.log(count); 
    };
    const handleClick2 = (name) => {
        console.log(`${name} was clicked`); // use a template literal
    };

    return (
        <main>
            <p onDoubleClick={() => {handleClick()}}>
                {/* Instead of <div>, using <main> because this is the main content of the page */}
                Hello {name}
            </p>

            {/* Without using an event (button & click), functions are invoked when the page loads. */}
            <button onClick={handleNameChange}>
                {/* 
                    We are using a reference to handleClick, by the lack of parenthesis.
                    If parenthesis were used, the function would be invoked automatically.
                */}

                {/* Buttons by default should have some text */}
                Change Name with useState!
            </button>

            {/* To pass in arguments / parameters to functions from properties, use an anonymous function () => {} */}
            <button onClick={() => {handleClick()}}> Change the count!</button>
        </main>
    )
}

export default Content