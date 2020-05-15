import React, { useReducer, useEffect } from "react";
import FilmCard from "./components/FilmCard";
import FilmSearch from "./components/FilmSearch";

const api_key = `${process.env.REACT_APP_TMDB_API_KEY}`;
const TMDB_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=spider%20man&page=1&include_adult=false`;

// const TMDB_API_URL = `https://www.omdbapi.com/?s=man&apikey=4a3b711b`;

// https://developers.themoviedb.org/3/getting-started/images

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(TMDB_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.results,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchValue}&page=1&include_adult=false`
      // `https://www.omdbapi.com/?${searchValue}&apikey=4a3b711b`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.results,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;
  return (
    <>
      <FilmSearch search={search} />
      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        movies.map((movie, index) => (
          <FilmCard key={`${index}-${movie.title}`} movie={movie} />
        ))
      )}
    </>
  );
};

export default App;
