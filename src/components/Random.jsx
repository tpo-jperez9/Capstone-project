import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import apiKey from '../config';
import axios from 'axios';

function MovieDetail() {
  
  //Title, overview, run time, rating, directors, actors, reviews(2)
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState(0);
  const [rating, setRating] = useState(0);
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let randomId = Math.floor(Math.random()*200000) + 2
    axios.get(`https://api.themoviedb.org/3/movie/${randomId}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
      .then((response) => {
        console.log(response)
        setTitle(response.data.title)
        let filePath = response.data.poster_path
        setPoster(`https://image.tmdb.org/t/p/w500/${filePath}`)
        setOverview(response.data.overview)
        setRuntime(response.data.runtime)
        setRating(response.data.vote_average)
        const actorData = response.data.credits.cast;
        let names = [];
        for (let i=0; i<=2; i++) {
          names.push(actorData[i].name)
        }
        setActors(names)
        const crewData = response.data.credits.crew;
        let directorNames = [];
        for (let x=0; x<crewData.length; x++) {
          if (crewData[x].job === "Director") {
            directorNames.push(crewData[x].name);
          }
        }
        setDirectors(directorNames)
        })

    axios.get(`https://api.themoviedb.org/3/movie/${randomId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        console.log(response.data)
        let reviewData = response.data.results;
        console.log(reviewData)
        console.log(reviewData.length)
        if (reviewData) {
          let reviewList = [];
          for (let i=0; i<reviewData.length; i++) {
            reviewList.push(reviewData[i].content);  
          }
          setReviews(reviewList)
      }
      })
  }, [])

  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          
          <div className="content">
            <div className="row">
              <div className="col-md-6">
                <h2 className="movie-title">{title}</h2>
                <img src={poster}></img>
                <div className="movie-summary">
                   <p>{overview}</p>
                </div>
                
                <ul className="movie-meta">
                  <li><strong>Rating:</strong><span> {rating}</span></li>
                  <li><strong>Length:</strong> {runtime} minutes</li>
                </ul>

                <ul className="starring">
                  <li><strong>Directors: </strong>{directors}</li>
                  <li><strong>Stars: </strong>{actors[0]}, {actors[1]}, and {actors[2]}</li>
                </ul>

                <div className="entry-content">
                  <h4>Reviews</h4>
                  { (reviews.length > 0)
                    ?           
                      <ul>
                        <li>{reviews[0]}</li>
                        {(reviews[1])
                          ? <li>{reviews[1]}</li>
                          : <></>
                        }
                      </ul>
                    :
                    <p>Sorry, it looks like there are no reviews yet.</p>
                  }

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default MovieDetail;

