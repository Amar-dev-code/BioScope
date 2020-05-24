import React from "react";
import {
  searchMovies,
  fetchMovieList,
} from "../Redux/Actions/SearchMoviesAction";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const mapStateToProps = (state) => {
  return { itemToSearchFor: state.movies.text, loading: state.movies.loading };
};

function SearchForm(props = { mapStateToProps }) {
  const dispatch = useDispatch();
  const itemToSearchFor = props.itemToSearchFor;
  function onSubmit(e) {
    dispatch(fetchMovieList(itemToSearchFor));
  }

  function onChange(e) {
    dispatch(searchMovies(e.target.value));
  }

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" />
          What's on Mind Today
        </h1>
        <form id="searchForm">
          <input
            type="Text"
            placeholder="Search Movies"
            className="form-control"
            name="searchMovies"
            onChange={onChange}
          ></input>
          <button
            type="button"
            className="btn btn-primary btn-bg mt-3"
            onClick={onSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(SearchForm);
