import React from 'react';
import './circle.css'

const CircleGraph= () =>(
    <div className="col-6 col-sm-4 col-lg-2">
        <div className="inner-content text-center" style={{'--tagColor':'aqua'}}>
        <p><em>Yolo</em></p>
            <div className="c100 p30 center">
                <span>33%</span>
                <div className="slice"><div className="bar"></div><div className="fill"></div></div>
            </div>
        </div>
    </div>
);
export default CircleGraph;