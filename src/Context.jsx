import React, { useState } from 'react';
import axios from 'axios';
import apiKey from './config';

const Context = React.createContext();

export const ServiceProvider = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);
  const [futureMoviesMonthOne, setFutureMoviesMonthOne] = useState([]);
  const [futureMoviesMonthTwo, setFutureMoviesMonthTwo] = useState([]);
  const [futureMoviesMonthThree, setFutureMoviesMonthThree] = useState([]);

  async function fetchMovies(){
      await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => setMovieData(response.data.results))
  }

  async function performSearch(query){
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
     .then((response) => {
      console.log('response',response.data.results) 
      setSearchResults(response.data.results)
      })
     .then(console.log(searchResults))

  }

  async function fetchRandomMovies(){
      let randomId = Math.floor(Math.random()*200000) + 2
      await axios.get(`https://api.themoviedb.org/3/movie/${randomId}?api_key=${apiKey}&language=en-US`)
        .then((response) => {
          setRandomMovies(response.data)
        })
  }

  async function fetchFutureMovies(year, month, gte, lte, monthNum){
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&primary_release_date.gte=${year}-${month}-${gte}&primary_release_date.lte=${year}-${month}-${lte}&with_watch_monetization_types=flatrate`)
      .then((response) => {
        let data = response.data.results
        let titles = []
        for(let i=0; i<=4; i++) {
          let title = data[i].title;
          titles.push(title);
        }
        if (monthNum === 1){
          setFutureMoviesMonthOne(titles)
        } else if (monthNum === 2){
          setFutureMoviesMonthTwo(titles)
        } else if (monthNum === 3){
          setFutureMoviesMonthThree(titles)
        }
      })
  }

  return ( 
    <Context.Provider value={{movieData, fetchMovies, performSearch, searchResults, fetchRandomMovies, randomMovies, fetchFutureMovies, futureMoviesMonthOne, futureMoviesMonthTwo, futureMoviesMonthThree}}>{props.children}</Context.Provider>
  )
}

export default Context;

