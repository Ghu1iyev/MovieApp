import React, { useState } from 'react'

const Header = ({setMovies}) => {

const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=ea6638ea40443b24947650ef1a6c2620&query='
const [query, setQuery] = useState('')  


  const handleOnSubmit = (e) => {
    e.preventDefault()
    fetch(API_SEARCH + query)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setMovies(data.results)
    })
  }

  const hanldeOnChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div className='header'>
        <div className='nav container d-flex justify-content-between align-items-center pt-3 pb-3'>
        <h2>Movies</h2>
        <form onSubmit={handleOnSubmit}>         
        <input name="query" value={query} onChange={hanldeOnChange} className='search' placeholder='Search...'/>
        </form>
        </div>
    </div>
  )
}

export default Header