import React, { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Movies from './components/Movies'


const App = () => {
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=ea6638ea40443b24947650ef1a6c2620"
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=ea6638ea40443b24947650ef1a6c2620&query=' 

const [movies, setMovies] = useState([])
const [query, setQuery] = useState('')
const [loading, setLoading] = useState(true)

useEffect(() => {
  fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setMovies(data.results)
  })
  .finally(() => setLoading(false))
},[])

const handleOnSubmit = (e) => {
  e.preventDefault()
  fetch(API_SEARCH + query)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setMovies(data.results)
  })
}

const handleOnChange = (e) => {
  setQuery(e.target.value)
}

  return (
    <>
     <div className='header'>
        <div className='nav container pt-3 pb-3'>
        <h2>Movies</h2>
        <form onSubmit={handleOnSubmit}>         
        <input value={query} onChange={handleOnChange} className='search' placeholder='Search...'/>
        </form>
        </div>
    </div>
    {
      loading && <Loading className='loading'/>
    }
    <div className='App'>
      <div className='container pt-5 movies'>
      {movies?.map((movie) => <div className='movies' key={movie.id}><Movies movie={movie} {...movie} /></div>)}
      </div>
    </div>
    </>
  )
}

export default App