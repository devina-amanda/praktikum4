import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Information from './Information';
import Kontak from './Kontak';
import List from './List';

const Utama = () => (
    <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/Information" component = {Information} />
        <Route path = "/Kontak" component = {Kontak} />
        <Route path="/list" component={List} />
    </Switch>
)

export default Utama;