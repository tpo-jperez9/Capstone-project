import React, { useEffect, useState, useContext } from "react";
import Context from "../Context";
import MovieContainer from "./MovieContainer";

function Search() {
  const { searchResults } = useContext(Context);

  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="row ">
            <div
              className="col-md-12
            "
            >
              {searchResults.length > 0 ? (
                <MovieContainer data={searchResults} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Search;

