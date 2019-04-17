import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducer/reducer";
import thunk from "redux-thunk";
import HomeScreenContainer from "../container/HomeScreenContainer";
import PreferencesScreen from "../screens/PreferencesScreen";
import { saveToLocalStorage } from "../middlewares";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Route exact path="/" component={HomeScreenContainer} />
          <Route path="/preferences" component={PreferencesScreen} />
        </Provider>
      </Router>
    );
  }
}

export default App;
