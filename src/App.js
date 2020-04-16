import React, { Component } from "react";
import FilmCard from "./FilmCard";

const api_key = `${process.env.REACT_APP_TMDB_API_KEY}`;
const api = `https://api.themoviedb.org/3/movie/76341?api_key=${api_key}`;

class App extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  };

  fetchUsers() {
    // Where we're fetching data from
    fetch(api)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      .then((response) => {
        console.log(response.id);
      })
      // ...then we update the users state
      .then((data) =>
        this.setState({
          users: data,
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
    const { isLoading, users, error } = this.state;

    return (
      <>
        <FilmCard />
        <h1>Random User</h1>

        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          users.map((user) => {
            const { id, homepage, poster_path, title } = user;
            return (
              <div key={id}>
                <h1>{homepage}</h1>
                <p>Poster: {poster_path}</p>
                <p>Email Address: {title}</p>
                <hr />
              </div>
            );
          })
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

export default App;
