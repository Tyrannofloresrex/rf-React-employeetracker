import React from "react";
import "./index.css";


function Table(props) {
    return <table class="table">
    <tr>
        <thead class ="thead-dark ">
            <th scope ="col">Employee #</th>
            <th scope ="col">Name</th>
            <th scope ="col">E-mail</th>
            <th scope ="col">Phone</th>
            <th scope ="col">Location</th>
            <th scope ="col"class="empty"></th>
        </thead>
    </tr>
    </table>
};
  
  export default Table
