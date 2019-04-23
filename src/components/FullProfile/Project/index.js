import React,{Component} from 'react'
import './project.css'
import { randomBytes } from 'crypto';
class Project extends Component{
    constructor(props){
        super(props)
        this.state = {
            showFull:false
        }
    }
    render(){
        const project = this.props.project
        if(project)
        return(
            <div className={`project p-2 ${this.state.showFull ? 'col-12' : 'col-4'}`} onClick={this.openProject}>
               <div className="card p-4 d-fex flex-column h-100">
                    <h4 className="text-center">{project.name}</h4>
                    <span className="align-self-center px-3" style={{'--tagColor': this.randomColor()}}>{project.type}</span>
                    <p className="text-justify mt-4">{this.state.showFull?project.description:project.description.substring(0,220)+'...'}</p>
                    <a className={`btn btn-primary-custom align-self-center col-8 col-sm-6 col-md-2 ${this.state.showFull ? 'd-block' : 'd-none'}`} 
                        href={project.url}>Visitar
                    </a>
               </div>
           </div> 
        );
        else{
            return <div></div>
        }
    }
    openProject = ()=>{
        this.setState({showFull:!this.state.showFull});
    }
    randomColor(){
        var h = 1 + Math.random()*(1, 360);
        var s = 100;
        var l = 50;
        return 'hsl(' + h + ',' + s + '%,' + l + '%)';
      }
}
export default Project