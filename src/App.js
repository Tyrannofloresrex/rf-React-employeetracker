import React from "react";
import Employee from "./components/Employee";
import Table from "./components/Table";
import Searchbar from "./components/Searchbar";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
    displayEmployees: [],
    flip: 1,
    search: "",
  };
  componentDidMount() {
    API.generateEmployees().then((res) => {
      console.log(res);
      this.setState({ employees: res.data.results });
      this.setState({displayEmployees:res.data.results})
    });
  }

  // deleteEmployee = (email) => {
  //   const employeeList = this.state.employees.filter(
  //     (employee) => employee.email !== email
  //   );
  //   this.setState({ employees: employeeList });
  // };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  sortEmployees = (event) => {
    event.preventDefault();
    this.setState({
      flip: this.state.flip * -1,
      displayEmployees: this.state.employees.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return -1 * this.state.flip;
        } else if (a.name.last > b.name.last) {
          return 1 * this.state.flip;
        } else {
          return 0;
        }
      }),
    });
  };

  searchEmployees = (event) => {
    event.preventDefault();
    const employeeFilter = this.state.employees.filter(
      (employeeFound) =>
        employeeFound.name.first.toLowerCase() ===
        this.state.search.toLowerCase() ||
        employeeFound.name.last.toLowerCase() ===
        this.state.search.toLowerCase()
    );
    this.setState({
      displayEmployees: employeeFilter,
    });
    
  };

  // Map over the employees array and put their info in a card
  render() {
    return (
      <div>
        <h1>Employee List</h1>
        <Searchbar
          sortEmployees={this.sortEmployees}
          flip={this.state.flip}
          searchEmployees={this.searchEmployees}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Table />
        <tbody>
        {this.state.displayEmployees.map((employee) => (
          <Employee
            deleteEmployee={this.deleteEmployee}
            name={employee.name.first + " " + employee.name.last}
            image={employee.picture.medium}
            email={employee.email}
            cell={employee.cell}
            location={employee.location.city + ", " + employee.location.state}
          />
        ))}
        </tbody>
        ;
      </div>
    );
  }
}
export default App;
