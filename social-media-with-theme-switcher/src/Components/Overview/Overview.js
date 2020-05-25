import React from 'react';

//import FaceBook from '../../assets/images/icon-facebook.svg';
import {Facebook,Twitter,Instagram,Youtube} from '../../assets/index';

import './overview.css';

const Overview = ({data}) => (
    <div className="container grid">
        {data.map((data,index)=>(<div key={index} className="card">
            <div className ='icon-holder'>{console.log(data[4])}
                <img src={`${data[4] == "Facebook" ? Facebook : data[4] == "Twitter" ? Twitter :  data[4] == "Youtube" ? Youtube : Instagram }`}></img><span>{data[0]}</span>
            </div>
            <div>
                <h2>{data[1]}</h2>
                <h5>{data[2]}</h5>
            </div>
            <div>
                <h5>{data[3]}</h5>
            </div>
        </div>))} 
    </div>
);

export default Overview;