import React from 'react';
import {Link} from 'react-router-dom';

function Movie(props) {

  return (
    <React.Fragment>
    <Link key={props.id} to={`/movies/${props.id}`}>
      <img src={props.poster}></img>
    </Link>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    </React.Fragment> 
   )
}
 
export default Movie;
