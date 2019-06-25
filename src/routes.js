import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Box from './pages/Box';
import BoxesAll from './pages/BoxesAll';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" exact component={Box} />
            <Route path="/box/show/all" component={BoxesAll} />
        </Switch>
    </BrowserRouter>
);

export default Routes;