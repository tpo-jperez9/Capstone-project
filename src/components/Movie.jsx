import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <React.Fragment>
      <Link key={props.id} to={`/movies/${props.id}`}>
        <ul className="slides list-unstyled">
          <li className="col-md-4">
            <img src={props.poster} className="img-thumbnail"></img>
            <h1 className="theme-dark">{props.title}</h1>
            <p>{props.description}</p>
          </li>
        </ul>
      </Link>
    </React.Fragment>
  );
}

export default Movie;
