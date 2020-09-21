import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";

import SearchPage from "./pages/SearchPage";

import rootReducer from "./reducers";

import { loadState, saveState } from "./localstorage";
const persistentState = loadState();

const store = createStore(
  rootReducer,
  persistentState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState(state);
  }, 1000)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <SearchPage />
        </div>
      </Provider>
    );
  }
}

export default App;
