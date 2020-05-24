import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              BioScope
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-white d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fa fa-imdb fa-5x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fa fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

/*There is an extension in VS code called as ES6/React/Redux if we install it,
then we can just type refc in our js file and it will give us the code snippet
of a function*/
