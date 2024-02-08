import React from "react";
import { Link } from "react-router-dom";

export const NetflixShows = () => {

  const shows = [
    {
      id:103,
      name: "Breaking Bad",
    },
    {
      id:104,
      name:"Dark"
    }
  ]
  return (
    <div>
      <h1>NetflixShows</h1>
      <ul>
        <li>
          <Link to="/netflix/shows/detail/101">Money Heist</Link>
        </li>

        <li>
          <Link to="/netflix/shows/detail/102">Stranger Things</Link>
        </li>
      </ul>
      {
        shows.map((show)=>{
          return(
            <ul>
              {/* <li>{show.name}</li> */}
              <li>
                <Link to ={`/netflix/shows/detail/${show.id}`}>{show.name}</Link>
              </li>
            </ul>
          )
        })
      }
     
    </div>
  );
};
