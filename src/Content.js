import React from 'react'

// Move arrow function from App.js into this Main.js component

  /* 
  Functions are created using const keyword
  Standard practice is to create functions using arrow functions = () => {}
  */
  const handleNameChange = () => {
    const names = ["bob","kevin","dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

const Content = () => {
  return (
    <main>
        {/* Instead of <div>, using <main> because this is the main content of the page */}
        Hello {handleNameChange()}
    </main>
  )
}

export default Content