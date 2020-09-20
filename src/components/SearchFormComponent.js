import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InputField from "./InputComponent";
import * as ActionCreators from "../actions/searchActions";

class SearchFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  onChangeKeyword = (e) => {
    this.setState({ ...this.state, keyword: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.actions.searchMovie(this.state.keyword);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <InputField name="movie" onChange={this.onChangeKeyword} />
        <input className="btn btn-light" type="submit" value="search" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(SearchFormComponent);
