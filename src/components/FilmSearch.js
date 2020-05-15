import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";


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
    <form>
      <TextField 
        label="Search Film"
        value={searchValue}
        onChange={handleSearchInputChanges}
        variant="outlined" 
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default FilmSearch;
