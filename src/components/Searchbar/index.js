import React from "react";

function Searchbar (props) {
    return <div>
    <form>
      <input class = "search-input" type="search" name="search" />
      <button  type="submit">Search</button>
      <button type="submit" onClick={props.sortEmployees}>Sort{props.flip<0?(<i className="fas fa-arrow-alt-circle-down"></i>):(<i className="far fa-arrow-alt-circle-up"></i>)}</button> 
    </form>
  </div>
  }
  
  export default Searchbar;
