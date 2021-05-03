import React from 'react';
import Movie from './Movie';

function MovieContainer(props) {
  const data = props.data;
  let movies = [];

  for (let i=0; i<=2; i++) {
    const title = data[i].original_title;
    const description = data[i].overview;
    const id = data[i].id;

    function buildMoviePoster(movieData) {
      let filePath = data[i].poster_path;
      return `https://image.tmdb.org/t/p/w500/${filePath}`
    };

    const poster = buildMoviePoster();

    movies.push(<Movie key={id} id={id} title={title} description={description} poster={poster}/>)
  }
  return (
    <React.Fragment>
    {movies}
    </React.Fragment>
  )
};

export default MovieContainer;

