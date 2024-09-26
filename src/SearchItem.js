import React from 'react'

// destructure
const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => {e.preventDefault()}}>
    {/* Class names are used inside css stylings */}
    {/* Prevent reloading the page, which is default behaviour */}
        <label htmlFor='search'>
            Search
        </label>
        <input 
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        ></input>
    </form>
  )
}

export default SearchItem