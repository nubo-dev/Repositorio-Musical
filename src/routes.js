import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

// Components
import App from './Components/App'
import Albums from './Components/Albums'
import Page404 from "./Components/Page404";

class Routes extends Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path='/' component={Albums} />
                    <Route component={Page404} />
                </Switch>
            </App>
        )
    }
}

export default Routes;