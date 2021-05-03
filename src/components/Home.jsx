import React, {useEffect, useState, useContext} from 'react';
import Context from '../Context';
import MovieContainer from './MovieContainer';

function Home(){
    const {movieData, fetchMovies} = useContext(Context);

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
    <header>
        <h1>JJSMHL Movie Site</h1>
        <MovieContainer data={movieData} />
    </header>
    )
}

export default Home;

