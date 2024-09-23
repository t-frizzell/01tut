import React from 'react'

// Move arrow function from App.js into this Main.js component

const Content = () => {
    /* 
    Functions are created using const keyword
    Standard practice is to create functions using arrow functions = () => {}
    */
    const handleNameChange = () => {
        const names = ["bob", "kevin", "dave"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    // Remember, using an arrow function
    const handleClick = () => {
        console.log("Button Clicked");
    }
    const handleClick2 = (name) => {
        console.log(`${name} was clicked`); // use a template literal
    }

    return (
        <main>
            <p onDoubleClick={() => handleClick()}>
            {/* Instead of <div>, using <main> because this is the main content of the page */}
            Hello {handleNameChange()}
            </p>

            {/* Without using an event (button & click), functions are invoked when the page loads. */}
            <button onClick={handleClick}>
                {/* 
                    We are using a reference to handleClick, by the lack of parenthesis.
                    If parenthesis were used, the function would be invoked automatically.
                */}

                {/* Buttons by default should have some text */}
                Click Me
            </button>

            {/* To pass in arguments / parameters to functions from properties, use an anonymous function () => {} */}
            <button onClick={() => {handleClick2('Dave')}}> Click Me</button>
        </main>
    )
}

export default Content