import React from "react";
import { connect } from "react-redux";
import { MovieCard } from "./MovieCard";
import { Link, withRouter } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    loadState: state.movies.loading,
    movieList: state.movies.movies,
  };
};
function MoviesContainer(props = mapStateToProps) {
  debugger;
  const loadState = props.loadState;
  const movieList = props.movieList;
  let moviesContent = "";

  moviesContent =
    movieList.Response == "True"
      ? movieList.Search.map((movies, index) => (
          <MovieCard key={index} movies={movies} />
        ))
      : null;
  return <div className="row">{moviesContent}</div>;
}
export default withRouter(connect(mapStateToProps)(MoviesContainer));
