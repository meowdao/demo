import "./styles.less";
import "../static/img/favicon.ico";
import React from "react";
import configureStore from "./store";
import App from "./app";
import render from "./render";

const store = configureStore(window.__INITIAL_STATE__);

render(App, store);

if (module.hot) {
    module.hot.accept("./app", () => {
        render(App, store);
    });
}
