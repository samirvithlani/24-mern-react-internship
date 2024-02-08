import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div>
      <h1>NetflixMovies</h1>
      <ul>
        <li>
          <Link to ="/netflix/movies/thriller">Thriller</Link>
          </li>
        <li>
            <Link to ="action">Action</Link>
        </li>
      </ul>

    </div>
  )
}
