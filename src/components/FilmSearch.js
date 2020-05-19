import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";




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

  return (
    <Grid justify={'center'} alignItems={'center'} container spacing={3}>
      <Grid item xs={4}>
        <TextField 
          fullWidth={true}
          label="Search film database"
          value={searchValue}
          onChange={handleSearchInputChanges}
          variant="outlined" 
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={callSearchFunction} type="submit" value="SEARCH">Search</Button>
      </Grid>
    </Grid>
  );
};

export default FilmSearch;
