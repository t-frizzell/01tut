// To generate a template using snippet, execute: CTRL+ALT+R > rafce
// rafce stands for: React Arrow Function Component Export

import React from 'react'

const Footer = () => {
    const today = new Date();   

  return (
    <footer>
        {/* In semantic HTML, footers use a footer element, not div */}
        {/* Use Js Expression to reference today variable */}
        <p>Copyright ©{today.getFullYear()}</p>
    </footer>
  )
}

export default Footer