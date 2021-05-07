import React, { useEffect, useState, useContext } from "react";
import {useHistory} from 'react-router-dom';
import Context from "../Context";
import MovieContainer from "./MovieContainer";
import PremiereList from './PremiereList';


function Home() {
  const { movieData, fetchMovies, fetchFutureMovies, futureMoviesMonthOne, futureMoviesMonthTwo, futureMoviesMonthThree } = useContext(Context);
  let history = useHistory();

  useEffect(() => {
    fetchMovies();
    fetchFutureMovies('2021', '06', '01', '30', 1);
    fetchFutureMovies('2021', '07', '01', '31', 2);
    fetchFutureMovies('2021', '08', '01', '31', 3);
  }, []);

  function handleClick() {
    history.push('/random')
  }

  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="row ">
            <div className="col-md-12">
              {movieData.length > 0 ? (
                <MovieContainer data={movieData} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <p></p>
      <div className="row">

      </div>
      <div className="row">
							<div className="col-md-4">
								<h2 className="section-title">June Premieres</h2>
								<ul className="movie-schedule">
									{(futureMoviesMonthOne.length>0)
                    ? <PremiereList data={futureMoviesMonthOne} />
                    : <p>Loading...</p>
                  }
								</ul>
							</div>
							<div className="col-md-4">
								<h2 className="section-title">July Premieres</h2>
								<ul className="movie-schedule">
                {(futureMoviesMonthTwo.length>0)
                    ? <PremiereList data={futureMoviesMonthTwo} />
                    : <p>Loading...</p>
                  }
								</ul> 
							</div>
							<div class="col-md-4">
								<h2 class="section-title">August Premieres</h2>
								<ul class="movie-schedule">
								{(futureMoviesMonthThree.length>0)
                    ? <PremiereList data={futureMoviesMonthThree} />
                    : <p>Loading...</p>
                  }
								</ul> 
							</div>
						</div> 
            </div>
    </main>
  );
}

export default Home;