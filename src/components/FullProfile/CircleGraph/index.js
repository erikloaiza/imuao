import React, {Component}from 'react';
import './circle.css'

class CircleGraph extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const value = this.props.value;
        const name = this.props.name;
        console.log(value)
        if(value)
        return(
            <div className="col-6 col-sm-4 col-lg-2">
                <div className="inner-content text-center" style={{'--tagColor':this.props.getColor(name)}}>
                <p><em>{name?name:''}</em></p>
                    <div className={`c100 center p${value}`}>
                        <span>{value}%</span>
                        <div className="slice"><div className="bar"></div><div className="fill"></div></div>
                    </div>
                </div>
            </div>
        );
        else{
            return<div></div>
        }
    }
}
export default CircleGraph;