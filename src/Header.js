// To generate a template using snippet, execute: CTRL+ALT+R > rafce
// rafce stands for: React Arrow Function Component Export

import React from 'react'

const Header = () => {
    // This is an example of inline css
    // To use inline, use an "object" variable
    const headerStyle = {
        backgroundColor: 'royalblue',
        color: '#fff',
    }

    return (
        <header style={headerStyle}>
        {/* Use a Js Expression to assign the value of the above object to the header style */}

        {/* 
        Best practice to use semantic HTML
        For this component, instead of <div>, use <header>
        */}
            <h1>Groceries List</h1>
        </header>
    )
}

// Components need to be exported to import into other components.
    // If using snippets, export is automatically generated on creation.
export default Header