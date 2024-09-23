// To generate a template using snippet, execute: CTRL+ALT+R > rafce
// rafce stands for: React Arrow Function Component Export

import React from 'react'

const Header = () => {
    return (
        <header>
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