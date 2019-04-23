import React, {Component} from 'react'
import {withFirebase} from '../../components/Firebase'

import './dashboard.css'
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            totalUsers:0,
            lastViewedUsers:{},
            skills:{}
        };
    }
    render(){
        return(
            <div className="row h-100 dashboard">
                <div className="card m-2 col-4">
                    <span className="dashboard-item-name text-center pt-3">Total Perfiles</span>
                    <h1 className="ppal-text text-center justify-self-center align-self-center my-auto pb-2">{this.state.totalUsers}</h1>
                </div>
                <div className="card m-2 col pb-5 px-5">
                    <span className="dashboard-item-name text-center pt-3">Ultimas visitas</span>
                    {Object.keys(this.state.lastViewedUsers).map((user)=>{
                        const profilePicUrl = this.state.lastViewedUsers[user].picture?this.state.lastViewedUsers[user].picture:'https://katakrak.net/sites/default/files/default_images/default_profile_0.jpg'
                        return(
                            <div className="mx-2 d-flex align-items-center profile-list-item py-1">
                                <img className="profile-pic mx-3" src={profilePicUrl}/>
                                <p className="m-0">{this.state.lastViewedUsers[user].name+' '+this.state.lastViewedUsers[user].lastname}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="card m-2 container-fluid">
                    <span className="dashboard-item-name text-center pt-3">Promedio Habilidades</span>
                    <div className="bar-graph">
                        {Object.keys(this.state.skills).map((skill)=>{
                            return (
                            <div className="my-4 row mw-100">
                                <label className="bar-label col-6 col-sm-4 col-lg-2 align-self-center m-0">{skill}</label>
                                <div className="bar ml-n5 col p-0 d-flex">
                                    <div className = "bar-value h-100" style={{'--tagColor':this.getColor(skill), '--value':this.state.skills[skill].prom+'%'}}></div>
                                    <span className ="align-self-center ml-2">{this.state.skills[skill].prom.toFixed(1)}%</span>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );        
    }
    componentDidMount() {
        this.setState({
            totalUsers: this.props.firebase.getTotalProfiles(),
            lastViewedUsers: this.props.firebase.getLastViews(),
            skills: this.props.firebase.getSkillTags()
          });
    }   
    getColor=(skill) =>{
        return this.state.skills[skill].color;
    }
}
export default withFirebase(Dashboard);