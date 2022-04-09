import _ from "lodash";
import React, { Component } from "react";
import { Search } from "semantic-ui-react";

const initialState = { isLoading: false, results: [], value: "" };

export default class SearchComponent extends Component {
  state = initialState;

  constructor({ list }) {
    super();
    this.list = list.map((li) => ({ ...li, description: li.owner }));
  }

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");

      this.setState({
        isLoading: false,
        results: this.list.filter(
          (result) => re.test(result.title) || re.test(result.owner)
        ),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        aligned="right"
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
      />
    );
  }
}
