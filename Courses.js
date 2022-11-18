import './App.css';
import React from 'react';
import Data from './data.json';
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <div>
      <h1>Find a Course</h1>
      <ul>
        {Data.map(item => (
            <li key={item.id}>
                <Link className="link" to={`/courses/${item.id}`}>{item.name}</Link>
            </li>
  ))}
      </ul>
    </div>
  );
}

export default Courses;