import React, { useState } from 'react';
import './App.css';
import Data from './data.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Step() {
    const params = useParams();

    return(
        <div className="App">
            <h1>{Data[params.id].name}</h1>
            <ul>
                <li>
                    <Link  className="link" to={`/courses/${params.id}/${0}`}>{Data[params.id].courses[0].name}</Link>
                </li>
                <li>
                    <Link  className="link" to={`/courses/${params.id}/${1}`}>{Data[params.id].courses[1].name}</Link>
                </li>
                <li>
                    <Link  className="link" to={`/courses/${params.id}/${2}`}>{Data[params.id].courses[2].name}</Link>
                </li>
                <li>
                    <Link  className="link" to={`/courses/${params.id}/${3}`}>{Data[params.id].courses[3].name}</Link>
                </li>
            </ul>
        </div>
    )
};

export default Step;