import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflix/home">
                Netflix Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflix/movies">
                Netflix Movies
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflix/shows">
                Netflix Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
              apidemo1
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/useeffectdemo">
              useeffectdemo
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
              apidemo2
              </Link>
            </li>
                        
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
              apidemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo4">
              apidemo4
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
