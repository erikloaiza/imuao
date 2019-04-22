import React,{Component} from 'react'

class Project extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           <div className="col-4 p-2">
               <div className="card">
                    <h4>ProjectTitle</h4>
                    <span>Genre</span>
                    <p>
                        
                    </p>
               </div>
           </div> 
        );
    }
}
export default Project