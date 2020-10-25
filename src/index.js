import React from "react";
import ReactDOM from "react-dom";
import Name from "./containers/Name";
import Questions from "./containers/Questions";
import "./styles/main.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/quiz" exact component={Questions} />
        <Route path="/" exact component={Name} />
        <Route
          render={() => {
            return "Page not found";
          }}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
