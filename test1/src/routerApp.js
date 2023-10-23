import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from './navBar';
import PageError from './pageError';
import PersonList from './personList';
import PDF from './PDF/PdfCreator';


class RouterApp extends Component {

    render() {
        return (
            <BrowserRouter>
        <div>
          <NavBar />
          <Redirect
            from="/"
            to="/administration" />
          <Switch>
            <Route
              path="/administration"
              component={PersonList} />
            
            <Route
              exact
              path="/page2"
              render={() => <PDF />} />
            <Route component={PageError} />
          </Switch>
        </div>
      </BrowserRouter>
        );
    }
}


export default RouterApp;