import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import apiKey from '../config';
import axios from 'axios';

function MovieDetail() {
  const params = useParams();
  const id = params.id;
  
  //Title, overview, run time, rating, directors, actors, reviews(2)
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState(0);
  const [rating, setRating] = useState(0);
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        setTitle(response.data.title)
        setOverview(response.data.overview)
        setRuntime(response.data.runtime)
        setRating(response.data.vote_average)
      })

    axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        console.log(response.data)
        setReviews(response.data.results)
      })
  }, [id])

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-6">
         <h3>This is the Movie Detail page for {title}!!</h3>
         <p>{overview}</p>
        </div>
      </div>
    </div>
  )
};

export default MovieDetail;


