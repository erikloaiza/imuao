import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes';
import *  as DATAROUTES from '../../constants/firebaseConfig';
import { withFirebase } from '../../components/Firebase';

import './login.css'
import { ReactComponent as Logo } from '../../assets/logo.svg';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class Login extends Component{
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="h-100 d-flex justify-content-center align-items-center flex-column row overflow-hidden ml-md-5 mr-md-5">
        <Logo/>
            <form onSubmit={this.onSubmit} className="card col-lg-4 col-sm-6 d-flex flex-column justify-content-center align-items-center position-relative pb-4 pt-4">
            {error && <p className="text1">{error.message}</p>}
            <div className="input input-round w-75">
              <i className="far fa-envelope pr-2"></i>
              <input
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email Address"
                />
            </div>
            <div className="input input-round w-75">
              <i className="far fa-meh-rolling-eyes pr-2"></i>
              <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
              </div>
              <br />
              <span className="text1">Al ingresar usted acetpa nuestros</span>
              <a href="#">terminos y condiciones</a>
              <div className="submit-button position-absolute">
                <button disabled={isInvalid} type="submit" className="btn btn-round-primary">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
        </div>
    );
  }


  onSubmit = event => {
    event.preventDefault(); //No reload page on Submit

    const { email, password } = this.state;
    console.log(email);
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    this.props.firebase
    .doFetchData(DATAROUTES.PROFILES)
    .then(() => {
      console.log('Yai i got the data c:')
      console.log(this.props.firebase.getData());
    })
    .catch(error => {
      console.log('Naa i got an error :c')
      console.log(error)
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

}

export default withFirebase(Login);