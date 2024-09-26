// To generate a template using snippet, execute: CTRL+ALT+R > rafce
// rafce stands for: React Arrow Function Component Export

import React from 'react'

// this is a "Component Function", so properties can be passed into the component.
// passed properties can be "destructured". So (props) can be re-written to be ({title}) and referenced as {title   }
const Header = (props) => {
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

            {/* Props hold all the different properties from the parent component that have been passed to the child component. */}
            <h1>{props.title}</h1>
        </header>
    )
}

// Default prop values
Header.defaultProps = {
    title: "Default Title"
}

// Components need to be exported to import into other components.
    // If using snippets, export is automatically generated on creation.
export default Header