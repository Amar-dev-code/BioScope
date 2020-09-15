import React from "react";
import {
  searchMovies,
  fetchMovieList,
} from "../Redux/Actions/SearchMoviesAction";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "../Assets/Atoms/components/button";
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
          <Button
            buttonLabel="Search"
            type="button"
            onClick={onSubmit}
          ></Button>
        </form>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(SearchForm);
