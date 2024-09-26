import React from 'react'
import { useRef } from 'react'

// A functional component for adding an item to the list
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    // use a ref hook to bring focus back to search menu, from add button.
    const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={(e) => {handleSubmit(e)}}>
        {/* Override default submit behaviour, and use handleSubmit instead */}
        <label htmlFor='addItem'>
            Add Item
        </label>
        <input 
            autoFocus 
            ref={inputRef}
            id='addItem' 
            type='text' 
            placeholder='Add Item' 
            required 
            value={newItem} 
            onChange={(e) => {setNewItem(e.target.value)}}
        >
        </input>
        <button 
            type='submit' 
            aria-label='Add Item'
            onClick={() => {inputRef.current.focus()}}
        > + </button>
    </form>
  )
}

export default AddItem