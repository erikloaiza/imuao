import React from 'react';
import './circle.css'

const CircleGraph= () =>(
    <div class="col-6 col-sm-4 col-lg-2">
        <div class="inner-content text-center" style={{'--tagColor':'aqua'}}>
        <p><em>Yolo</em></p>
            <div class="c100 p30 center">
                <span>33%</span>
                <div class="slice"><div class="bar"></div><div class="fill"></div></div>
            </div>
        </div>
    </div>
);
export default CircleGraph;