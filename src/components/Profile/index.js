import React, {Component} from 'react'
import './profile.css'
class Profile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const skills = this.props.profile.skills;
        const profilePicUrl = this.props.profile.picture?this.props.profile.picture:'https://katakrak.net/sites/default/files/default_images/default_profile_0.jpg'
        return(
            <div className="col-12 col-sm-6 col-lg-3 p-2">
                <div className="profile d-flex align-items-center justify-content-center text-align-center flex-column py-4 h-100" onClick={this.props.onClick}>
                    <img  className="profile-pic" src = {profilePicUrl}/>
                    <h5 className="py-4 text-center w-75">{this.props.profile.name+' '+this.props.profile.lastname}</h5>
                    <div className="row w-75">
                        {Object.keys(skills).map((skill,index)=>{return index<3?<span className="tag col mx-1 px-2 py-1">{skill.substring(0,5)}</span>:''})}
                    </div>
                </div>
            </div>
        );
    }

}
export default Profile