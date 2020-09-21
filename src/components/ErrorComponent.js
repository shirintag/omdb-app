import React, { Component } from "react";
import { connect } from "react-redux";

class ErrorComponent extends Component {
  render() {
    return (
      <div>
        <h3>Sorry we did not find any movie with this keyword</h3>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    error: state.search.error,
  };
}

export default connect(mapStateToProps)(ErrorComponent);
