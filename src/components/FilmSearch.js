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

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      props.search(encodeURI(searchValue));
      resetInputField();
    }
  }

  const handleBlankEntry = () => {
    alert('Don\'t f\'n do that');
  }

  return (
    <Grid justify={'center'} alignItems={'center'} container spacing={3}>
      <Grid item lg={6} xs={8}>
        <TextField 
          fullWidth={true}
          label="Search film database"
          value={searchValue}
          onChange={handleSearchInputChanges}
          onKeyPress={ searchValue !== "" ? handleEnter : handleBlankEntry }
          placeholder="Ex: Sunset Rock"
          variant="outlined" 
          required={true}
        />
      </Grid>
      <Grid item lg={2} xs={8}>
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
  );
};

export default FilmSearch;
