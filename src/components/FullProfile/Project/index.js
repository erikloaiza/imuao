import React,{Component} from 'react'
import './project.css'
class Project extends Component{
    constructor(props){
        super(props)
        this.state = false;
        this.desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    }
    render(){
        return(
            <div className={`project p-2 ${this.props.state ? 'col-6' : 'col-4'}`} onClick={this.openProject}>
               <div className="card p-4 d-fex flex-column">
                    <h4 className="text-center">ProjectTitle</h4>
                    <span className="align-self-center px-3" style={{'--tagColor':'aqua'}}>Genre</span>
                    <p className="text-justify mt-4">{this.desc.substring(0,220)}...</p>
               </div>
           </div> 
        );
    }
    openProject= event=>{
        console.log('you clic me >.<')
        this.setState=true;
    }
}
export default Project