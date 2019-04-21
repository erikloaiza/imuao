import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Login from '../../views/Login';
import Home from '../../views/Home';


import * as ROUTES from '../../constants/routes';

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path={ROUTES.LOGIN} component={Login} />
                    <Route path={ROUTES.HOME} component={Home} />
                </Switch>
            </Router>
        );
    }
    componentDidMount(){
        const isAuthenticated = true;
        if(isAuthenticated ){
            //this.props.history.push(ROUTES.HOME);
        }
        else{
            //this.props.history.push(ROUTES.LOGIN);
        }
    }
}

export default App;