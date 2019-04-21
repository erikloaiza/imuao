import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../../views/Login';
import Home from '../../views/Home';


import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.HOME} component={Home} />
    </Router>
);
export default App;