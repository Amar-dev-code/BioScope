import React, { useEffect } from "react";
import Movie from "./Movie";
import { useDispatch } from "react-redux";
import { exactItem, setLoading } from "../Redux/Actions/SearchMoviesAction";
import { connect } from "react-redux";
import { Spinner } from "../Components/Spinner";

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
    movie: state.movies.exactItem,
  };
};

function Test(props = { mapStateToProps }) {
  const dispatch = useDispatch();
  const movieData = props.movie;
  const loading = props.loading;
  useEffect(() => {
    dispatch(exactItem(props.match.params.id));
    //dispatch(setLoading());
  });
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Movie movie={movieData} loading={loading} />
    </div>
  );
}

export default connect(mapStateToProps)(Test);
