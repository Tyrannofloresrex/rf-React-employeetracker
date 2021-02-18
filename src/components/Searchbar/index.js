import React from "react";

function Searchbar (props) {
    return <div>
    <form>
      <input class = "search-input" type="search" name="search" value={props.search} onChange= {props.handleInputChange } />
      <button type="submit" onClick={props.searchEmployees}>Search</button>
      <button onClick={props.sortEmployees}>Sort{props.flip<0?(<i className="fas fa-arrow-alt-circle-down"></i>):(<i className="far fa-arrow-alt-circle-up"></i>)}</button>
    </form>
  </div>
  }
  
  export default Searchbar;
