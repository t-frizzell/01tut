import React from 'react'
import LineItem from './LineItem'

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {/* inside JSX, we need an expression to display the data */}
            {/* To iterate through the array, need to use .map() (a higher order function)*/}
            {/* Remember to always practice using arrow functions () => {} */}

            {/* Begin automatically, do not use arrow function in beginning */}
            {/* Each item will be a list item (<li></li>) */}
            {/* Give each list a class name PROPERTY */}

            {/* HTML Attribute values can be set using JSX expressions (checked, key, etc...) */}
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList