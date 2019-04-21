import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Banner from '../../components/Banner'

import Dashboard from '../Dashboard'
import Profiles from '../Profiles'


const Home = () => (
    <Router>
    <div>
        <Banner />
        <hr />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.PROFILES} component={Profiles} />
    </div>
  </Router>
);

export default Home;