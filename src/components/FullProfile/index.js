import React, {Component} from 'react'
import CircleGraph from './CircleGraph' //For generatting the circles with pure css
import Project from './Project' //For generatting the circles with pure css

import './fullprofile.css'

class FullProfile extends Component{
    constructor(props){
        super(props);
        this.show = false;
    }
    render(){
        return(
            <div className="fullprofile fixed-bottom d-flex flex-column justify-content-center px-4">
                <div className="card mx-5 position-relative p-5">
                    <button className="btn btn-round-alt position-fixed m-n4">
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="row ml-5 mt-4">
                        <div className="col-9 text-right">
                            <h1>Nombre del Perfil</h1>
                            <h4>000000</h4>
                            <div className="row mt-3">{/* Iterate Here */}
                                <CircleGraph></CircleGraph>
                                <CircleGraph></CircleGraph>
                                <CircleGraph></CircleGraph>
                                <CircleGraph></CircleGraph>
                                <CircleGraph></CircleGraph>
                                <CircleGraph></CircleGraph>
                            </div>
                        </div>
                        <div className="col-3 d-flex flex-column align-items-center">
                            <img  className="profile-pic" src ="https://i1.sndcdn.com/artworks-000119323628-eyqu63-t500x500.jpg"/>
                            <span>cel</span>
                            <span>correo</span>
                        </div>
                    </div>
                    <div className="row ml-5 mt-4 pt-4">
                        <h2 className="col-12">Portfolio</h2>
                        <div className="row col-12">
                            <Project></Project>
                            <Project></Project>
                            <Project></Project>
                            <Project></Project>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FullProfile