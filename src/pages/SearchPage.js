import React, { Component } from "react";
import SearchForm from "../components/SearchFormComponent";
import MovieComponent from "../components/MovieComponent";

class SearchPage extends Component {
  render() {
    return (
      <div>
        <h2>Search a movie on OMDb API</h2>
        <SearchForm />
        <MovieComponent />
      </div>
    );
  }
}

export default SearchPage;
