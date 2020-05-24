import React, { Component } from "react";

import { connect } from "react-redux";

import SearchForm from "./SearchMovies";
import MoviesContainer from "./MoviesContainer";
import { Spinner } from "./Spinner";

const mapStateToProps = (state) => {
  return { loading: state.movies.loading };
};

function Landing(props = { mapStateToProps }) {
  const loadState = props.loading;
  return (
    <div className="container">
      <SearchForm />
      {loadState ? <Spinner /> : <MoviesContainer />}
    </div>
  );
}

export default connect(mapStateToProps)(Landing);
