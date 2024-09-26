import React from 'react'

// Functional Component for a single item in a list
const LineItem = ({item, handleCheck, handleDelete}) => {
    return (
        <li className="item" key={item.id}> {/* React needs keys for each list item */}
            <input type='checkbox' checked={item.checked} onChange={() => { handleCheck(item.id) }} />
            <label
                onDoubleClick={() => { handleCheck(item.id) }}
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
            > {item.item} </label> {/* Display the label with a JS Expression */}
            <button onClick={() => { handleDelete(item.id) }}>Delete</button>
        </li>
    )
}

export default LineItem