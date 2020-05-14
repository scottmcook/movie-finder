import React, { Component } from "react";
import FilmCard from "./FilmCard";

const api_key = `${process.env.REACT_APP_TMDB_API_KEY}`;
const api = `https://api.themoviedb.org/3/movie/76341?api_key=${api_key}`;

// https://developers.themoviedb.org/3/getting-started/images
cost base_img_url = `https://image.tmdb.org/t/p`;

class App extends Component {
  state = {
    isLoading: true,
    film: {},
    error: null,
  };

  fetchUsers() {
    // Where we're fetching data from
    fetch(api)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
    
      // ...then we update the film state
      .then((data) =>
        this.setState({
          film: data,
          isLoading: false, 
        })
        
      )
      // Catch any errors we hit and update the app
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, film, error } = this.state;
    const { id, homepage, poster_path, title } = film;

    return (
      <>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <FilmCard
            title={title}
            poster={poster_path}
          />
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

export default App;
