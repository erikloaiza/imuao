import React, {Component} from 'react'
import Profile from '../../components/Profile'
import FullProfile from '../../components/FullProfile'

import './profiles.css'
const INITIAL_STATE = {
    search:''
  };

class Profiles extends Component{
    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
    }
    render(){
        const { search } = this.state;
        const isInvalid = search === '' ;

        return(       
        <div className="px-5">
            <div className="mt-4 mb-5 pt-2 row px-2 pl-md-0 pr-md-0">
                <div className="input  col-md-2 col-12">
                    <input></input>
                </div>
                <div className="input col-md-2 col-12">
                    <input></input>
                </div>
                <div className="input col-md-2 col-12">
                    <input></input>
                </div>
                <div className="input input-round col ml-lg-5">
                <input
                    name="search"
                    value={search}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Buscar"
                    />
                </div>
                <button disabled={isInvalid} type="submit" className="btn btn-round-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div className="user-group row pb-5" groupname='A'>
              <Profile></Profile>
              <Profile></Profile>
              <Profile></Profile>
              <Profile></Profile>
              <Profile></Profile>
            </div>
            <div className="user-group row pb-5" groupname='B'>
              <Profile></Profile>
              <Profile></Profile>
              <Profile></Profile>
              <Profile></Profile>
              <Profile></Profile>
            </div>
            
            {/*<FullProfile></FullProfile>*/}
        </div>
        );
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

}

export default Profiles;