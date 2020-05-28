import React from 'react'

import {Facebook,Twitter,Instagram,Youtube} from '../../assets/index';

import './Today.css';

const Today = ({data}) => (
    <div className="container">
        <div className="grid">
        {data.map((data,indx) => (
            <div key={indx} className="card-2">
                <h5>{data[0]}</h5>
                <h5 className="right">{data[1]}</h5>
                <h5>{data[2]}</h5>
                <img className="right" src={`${data[3] == "Facebook" ? Facebook : data[3] == "Twitter" ? Twitter :  data[3] == "Youtube" ? Youtube : Instagram }`}></img>
            </div>
        ))}
        </div>
    </div>
);

export default Today;
