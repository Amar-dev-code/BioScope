import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
import { Button } from "../Assets/Atoms/components/button";

export function MovieCard(props) {
  const movie = props.movies;
  return (
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
        <h5 className="text-light card-title">
          {movie.Title} - {movie.Year}
        </h5>
        <Button
          href={`http://localhost:3000/Test/${movie.imdbID}`}
          buttonLabel="Movie Details >"
        ></Button>
      </div>
    </div>
  );
}

export default withRouter(connect()(MovieCard));
