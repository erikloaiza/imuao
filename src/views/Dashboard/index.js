import React, {Component} from 'react'
import {withFirebase} from '../../components/Firebase'

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
            <div className="row h-100">
                <div className="card m-2 col-4">
                    <p className="m-5 p-5 text-center">{this.state.totalUsers}</p>
                </div>
                <div className="card m-2 col">
                    <p className="m-5 p-5">Dashboard En construcción</p>
                    {JSON.stringify(this.state.lastViewedUsers)}
                </div>
                <div className="card m-2 container-fluid">
                    <p className="m-5 p-5">Dashboard En construcción</p>
                    {JSON.stringify(this.state.skills)}
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
}
export default withFirebase(Dashboard);