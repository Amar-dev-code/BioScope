import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import "../App.css";

export function MovieCard(props) {
  const movie = props.movies;
  return (
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
        <h5 className="text-light card-title">
          {movie.Title} - {movie.Year}
        </h5>
        <Link className="btn btn-primary" to={"/Test/" + movie.imdbID}>
          Movie Details
          <i className="fa fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
}

export default withRouter(connect()(MovieCard));
