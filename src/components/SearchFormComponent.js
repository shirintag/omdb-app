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
      showSuggestions: "",
    };
  }

  onChangeKeyword = (e) => {
    this.setState({
      ...this.state,
      keyword: e.target.value,
      showSuggestions: "show",
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.actions.searchMovie(this.state.keyword);
    this.setState({ keyword: "", showSuggestions: "" });
  };

  onClick = (selectedWord) => {
    this.setState({ keyword: selectedWord, showSuggestions: "" });
  };

  render() {
    let lastSearches = this.props.lastSearches;
    let select;
    if (lastSearches) {
      let options = lastSearches.map((el, index) => {
        return (
          <li
            className="dropdown-item"
            key={index}
            onClick={() => this.onClick(el)}
          >
            {el}
          </li>
        );
      });
      select = (
        <ul className={"dropdown-menu " + this.state.showSuggestions}>
          {options.reverse()}
        </ul>
      );
    }

    return (
      <div>
        <form
          className="form-inline"
          onSubmit={this.onSubmit}
          ref={(ref) => (this.form = ref)}
        >
          <div className="form-group mr-md-3 mb-2">
            <InputField
              name="movie"
              onChange={this.onChangeKeyword}
              onFocus={() =>
                lastSearches.length &&
                this.setState({ showSuggestions: "show" })
              }
              value={this.state.keyword}
            />
          </div>
          <input
            className="btn btn-light mr-md-3 mb-2"
            type="submit"
            value="search"
          />
        </form>
        <div className={"dropdown " + this.state.showSuggestions}>{select}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    lastSearches: state.search.lastSearches,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFormComponent);
