import React from 'react'
import { useParams } from 'react-router-dom'

export const NetflixShowsDetail = () => {
    const id = useParams().id
  return (
    <div>
        <h1>DETAIL - {id}</h1>
    </div>
  )
}
