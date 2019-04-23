import React, {Component} from 'react'
import CircleGraph from './CircleGraph' //For generatting the circles with pure css
import Project from './Project' //For generatting the circles with pure css

import './fullprofile.css'

class FullProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
    render(){
        const profile = this.props.profile;
        const profilePicUrl = this.props.profile.picture?this.props.profile.picture:'https://katakrak.net/sites/default/files/default_images/default_profile_0.jpg'

        console.log(profile)
        if(Object.keys(profile).length>0)
        return(
            <div className={"fullprofile fixed-bottom d-flex flex-column justify-content-center px-4 " + (this.state.show?'':'hiden')}>
                <div className="card mx-5 position-relative p-5">
                    <button className="btn btn-round-alt position-fixed m-n4" onClick={this.hide}>
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="row ml-5 mt-4">
                        <div className="col-9 text-right">
                            <h1>{profile.name+' '+profile.lastname}</h1>
                            <h5>{profile.code}</h5>
                            <div className="row mt-3">{/* Iterate Here */}
                            {Object.keys(profile.skills).map(( skill, index)=>{return index<6?<CircleGraph name={skill} value={profile.skills[skill]} getColor ={this.props.getColor}></CircleGraph>:''})}
                            </div>
                        </div>
                        <div className="col-3 d-flex flex-column align-items-center">
                            <img  className="profile-pic mb-4" src ={profilePicUrl}/>
                            <span>{profile.phone}</span>
                            <span>{profile.email}</span>
                        </div>
                    </div>
                    <div className="row ml-5 mt-4 pt-4">
                        <h2 className="col-12">Portfolio</h2>
                        <div className="row col-12">
                            {Object.keys(profile.portfolio).map(( project )=>{return <Project project= {profile.portfolio[project]}></Project>})}
                        </div>
                    </div>
                </div>
            </div>
        );
        else{
            return <div></div>
        }
    }
    componentWillReceiveProps(){
        if(Object.keys(this.props.profile).length>0)
        this.setState({show:true});
    }
    hide = () =>{
        this.setState({show:false});
    }
}
export default FullProfile