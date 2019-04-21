import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Banner from '../../components/Banner'

import Dashboard from '../Dashboard'
import Profiles from '../Profiles'


const Home = ({ match }) => (
    <div>
        <Banner />
        <hr />
        <Switch>
          <Route exact path={`${match.url}`} component={Dashboard} />
          <Route  path={`${match.url}${ROUTES.PROFILES}`} component={Profiles} />
        </Switch>
    </div>
);

export default Home;