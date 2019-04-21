import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../../components/Firebase';

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
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }


  onSubmit = event => {
    event.preventDefault(); //No reload page on Submit

    const { email, password } = this.state;
    console.log(this.props)
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

}

export default withFirebase(Login);