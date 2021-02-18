import React from "react";

function Searchbar (props) {
    return <div>
    <form>
      <input class = "search-input" type="search" name="search" />
      <button  type="submit">Search</button>
      <button type="submit" onClick={props.sortEmployees}>Sort</button> 
    </form>
  </div>
  }
  
  export default Searchbar;
