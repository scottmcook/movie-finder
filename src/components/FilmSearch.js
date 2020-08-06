import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

const FilmSearch = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e)  => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(encodeURI(searchValue));
    resetInputField();
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      props.search(encodeURI(searchValue));
      resetInputField();
    }
  }

  const handleBlankEntry = () => {
  
    return searchValue === "" ? true : false
  }

  return (
    <>
    <Grid container justify={'center'} style={{ margin: 15 }}>
      <Typography variant="h4">Movie Finder</Typography>
    </Grid>
    <Grid container justify={'center'} alignItems={'center'} spacing={3}>
      <Grid item lg={3} m={6} xs={8}>
        <TextField 
          autoFocus={true}
          error={ searchValue === "" ? true : false }
          fullWidth={true}
          label="Search TMDB"
          value={searchValue}
          onChange={handleSearchInputChanges}
          onKeyPress={ handleEnter }
          placeholder="Sunset Rock"
          variant="outlined" 
          required={true}
        />
      </Grid>
      <Grid item lg={1} m={6} xs={4}>
        <Button 
          fullWidth={true}
          variant="contained" 
          color="primary" 
          onClick={ searchValue !== "" ? callSearchFunction : handleBlankEntry } 
          type="submit" 
          value="SEARCH">Search
        </Button>
      </Grid>
    </Grid>
    </>
  );
};

export default FilmSearch;
