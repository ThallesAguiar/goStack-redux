import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
    return (
        //Obriga aparecer somente uma rota por vez.
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
}