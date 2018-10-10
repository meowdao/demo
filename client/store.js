import {compose, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/reducers";


export default function configureStore (initialState = {}) {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === "development") {
    composeEnhancers = composeWithDevTools;
  }

  const middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV === "development") {
    middlewares.push(createLogger());
  }

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers/reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
