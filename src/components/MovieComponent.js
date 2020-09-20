import React from "react";
import { connect } from "react-redux";

const MovieComponent = ({ movies }) => {
  let component = movies.map((movie, index) => {
    return (
      <div style={{ margin: "20px" }} key={index}>
        <img src={movie.Poster} alt="Poster" />
        <p>Title: {movie.Title}</p>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
        <p>imdbID: {movie.imdbID}</p>
      </div>
    );
  });

  return <div>{component}</div>;
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.search.movies,
  };
}
export default connect(mapStateToProps)(MovieComponent);
