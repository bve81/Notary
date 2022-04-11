import _ from "lodash";
import React, { useState } from "react";
import { Search } from "semantic-ui-react";

const initialState = { isLoading: false, results: [], value: "" };

const SearchComponent = (props) => {
  const list = props.list.map((li) => ({ title: li.title, description: li.owner }));
  const [state, setState] = useState(initialState);
  const { isLoading, value, results } = state;

  const handleResultSelect = (e, { result }) => {
    setState({ ...state, value: result.title });
    props.searchResultCallback(result);
  };

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, { value }) => {
    clearTimeout(timeoutRef.current);
    setState({ ...state, isLoading: true, value });

    timeoutRef.current = setTimeout(() => {
      if (value.length < 1) {
        props.searchResultCallback();
        return setState(initialState);
      }

      const re = new RegExp(_.escapeRegExp(value), "i");
      const isMatch = (result) => re.test(result.title) || re.test(result.description);

      setState({ isLoading: false, results: list.filter(isMatch) });
    }, 400);
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Search
      aligned="right"
      loading={isLoading}
      onResultSelect={handleResultSelect}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
    />
  );
};

export default SearchComponent;
