import React from "react";
import "./index.css";

function Employee(props) {
  return (
    <div class ="table-div">
    <tr>
      <td className="img-column">
        <img alt={props.name} src={props.image} />
      </td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.cell}</td>
      <td>{props.location}</td>
      <span
        onClick={() => props.deleteEmployee(props.email)}
        className="remove"
      >
        <i class="fa fa-trash" aria-hidden="true"></i>
      </span>
    </tr>
    </div>
  );
}

export default Employee;
