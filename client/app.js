import React, {Component, Fragment} from "react";
import {Switch, Route} from "react-router";
import Landing from "./components/landing/landing";
import Login from "./components/login/login";
import NotFound from "./components/common/notfound";
import Header from "./components/partials/header";


export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/login" component={Login}/>
                    <Route component={NotFound}/>
                </Switch>
            </Fragment>
        );
    }
}
