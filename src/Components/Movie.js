import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Spinner } from "../Components/Spinner";

import { Button } from "../Assets/Atoms/components/button";

function Movie(props) {
  debugger;
  const dispatch = useDispatch();

  const movie = props.movie;
  const loading = props.loading;

  /*useEffect(() => {
    dispatch(exactItem(props.match.params.id));
    //dispatch(setLoading());
  });*/

  return loading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={movie.Poster} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{movie.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {movie.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {movie.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {movie.Rated}
            </li>
            <li className="list-group-item">
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong> {movie.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong> {movie.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actors:</strong> {movie.Actors}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {movie.Plot}
            <hr />
            <Button
              buttonLabel="View on IMDB"
              onClick={
                (window.location.href = `https://www.imdb.com/title/${movie.imdbID}`)
              }
            ></Button>
            {/* <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on IMDB
            </a> */}
            <Link to="/BioScope" className="btn btn-default text-light">
              Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
