import React, { Component } from "react";
import FilmCard from "./FilmCard";

class App extends Component {
  state = {
    isLoading: true,
    data: [],
    error: null,
  };

  fetchUsers() {
    // Where we're fetching data from
    fetch(`https://jsonplaceholder.typicode.com/users`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          data: data,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, data, error } = this.state;
    return (
      <>
        <FilmCard />
        <h1>Random User</h1>
        
        {error ? <p>{error.message}</p> : null}
        
        {!isLoading ? (
          data.map((user) => {
            const { username, name, email } = user;
            return (
              <div key={username}>
                <p>Name: {name}</p>
                <p>Email Address: {email}</p>
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
