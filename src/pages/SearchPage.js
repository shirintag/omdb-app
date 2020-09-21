import React, { Component } from "react";
import SearchForm from "../components/SearchFormComponent";
import MovieComponent from "../components/MovieComponent";
import ErrorComponent from "../components/ErrorComponent";

import { connect } from "react-redux";

class SearchPage extends Component {
  render() {
    let component;
    if (this.props.error) {
      component = <ErrorComponent />;
    } else {
      component = <MovieComponent />;
    }
    return (
      <div>
        <h2>Search a movie on OMDb API</h2>
        <SearchForm />
        {component}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    error: state.search.error || !Boolean(state.search.movies),
  };
}

export default connect(mapStateToProps)(SearchPage);
