import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
// import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';

const CustomInput = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      color: '#ffffff',
      '& fieldset': {
        borderColor: '#ffffff',
      },
      '&:hover fieldset': {
        borderColor: '#ffffff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffffff',
      },
    },
  },
})(TextField);


const FilmSearch = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e)  => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    // e.preventDefault();
    if (searchValue !== "") {
      props.search(encodeURI(searchValue));
      resetInputField();
    } 
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter' && searchValue !== "") {
      callSearchFunction();
    } 
  }

  return (
    <>
    <Grid container justify={'center'} style={{ margin: 15 }}>
      <Typography variant="h4" style={{ color: '#ffffff' }}>Movie Finder</Typography>
    </Grid>
    <Grid container justify={'center'} alignItems={'center'} spacing={3}>
      <Grid item lg={3} m={6} xs={8}>
        <CustomInput 
          autoFocus={true}
          fullWidth={true}
          onChange={handleSearchInputChanges}
          onKeyPress={handleEnter}
          placeholder="Sunset Rock"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          style={{ border: '#ffffff', color: '#ffffff' }}
          value={searchValue}
          variant="outlined" 
          required={true}
        />
      </Grid>
      {/* <Grid item lg={1} m={6} xs={4}>
        <Button 
          fullWidth={true}
          variant="contained" 
          color="primary" 
          onClick={ searchValue !== "" ? callSearchFunction : handleBlankEntry } 
          type="submit" 
          value="SEARCH">Search
        </Button>
      </Grid> */}
    </Grid>
    </>
  );
};

export default FilmSearch;
