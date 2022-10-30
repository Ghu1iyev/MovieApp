import React from 'react'


const API_IMG = "https://image.tmdb.org/t/p/w500/"
const Movies = ({poster_path, vote_average, title}) => {

  return (
    <div className='movie'>
      <img src={API_IMG+poster_path} alt=''/>
      <div className='title d-flex justify-content-between'>
      <h5>{title}</h5>
      <p>{vote_average}</p>
      </div>
    </div>
  )
}

export default Movies