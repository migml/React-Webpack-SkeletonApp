import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from './containers/home';
import { About } from './containers/about';

export const Routes = () => <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/home' component={Home} />
</Switch>;