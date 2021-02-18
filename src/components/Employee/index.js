import React from "react";

function Employee(props) {
  return (
    <tr>
      <th scope="row"></th>
      <td className="img-column">
        <img alt={props.name} src={props.image} />
      </td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.cell}</td>
      <td>{props.location}</td>
      {/* <span
        onClick={() => props.deleteEmployee(props.email)}
        className="remove"
      >
        <i class="fa fa-trash trashcan" aria-hidden="true"></i>
      </span> */}
    </tr>
  );
}

export default Employee;
