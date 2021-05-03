import React from 'react';
import Movie from './Movie';

function MovieContainer(props) {
  const data = props.data;
  let movies = [];

  for (let i=0; i<=2; i++) {
    const title = data[i].original_title;
    const description = data[i].overview;
    movies.push(<Movie title={title} description={description} />)
  }
  return (
    <React.Fragment>
    <h1>Movie Container</h1>
    {movies}
    </React.Fragment>
  )
};

export default MovieContainer;

