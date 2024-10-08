import React from 'react'
import ItemList from './ItemList'

// Move arrow function from App.js into this Main.js component

// Destructure drilled props from parent with {}
const Content = ({items, setItems, handleCheck, handleDelete}) => {

    return (
        <>
        {/* changed <main> into a "fragment" */}
        {/* Anything inside JSX needes to be in a "parent" element, or an element container. */}

                {/* To pass in arguments / parameters to functions from properties, use an anonymous function () => {} */}

                {/* Display the javascript array in JSX with an unordered list. */}
                {/* An unordered list begins with an HTML element <ul> */}
            {items.length ? (
                <ItemList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{marginTop: '2rem'}}>
                    List is empty
                </p>
            )}
        </>
    )
}

export default Content