import React, {Component} from 'react'
import './profile.css'
class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="col-3 p-2">
                <div className="profile d-flex align-items-center justify-content-center text-align-center flex-column py-4">
                    <img  src = "https://i1.sndcdn.com/artworks-000119323628-eyqu63-t500x500.jpg"/>
                    <h5 className="py-4">Of user</h5>
                    <div className="row w-75">
                        <span className="tag col mx-1 py-1">ux</span>
                        <span className="tag col mx-1 py-1">games</span>
                        <span className="tag col mx-1 py-1">yolo</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile