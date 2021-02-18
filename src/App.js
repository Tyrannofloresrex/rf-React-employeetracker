import React from "react";
import Employee from "./components/Employee";
import Table from "./components/Table";
import Searchbar from "./components/Searchbar";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    API.generateEmployees().then((res) => {
      console.log(res);
      this.setState({ employees: res.data.results });
    });
  }

  deleteEmployee = (email) => {
    const employeeList = this.state.employees.filter(
      (employee) => employee.email !== email
    );
    this.setState({ employees: employeeList });
  };

  sortEmployees = (event) => {
    event.preventDefault();
    this.setState({
      employees: this.state.employees.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return a.name.last < b.name.last
            ? -1
            : a.name.last > b.name.last
            ? 1
            : 0;
        } else {
          return a.name.last > b.name.last
            ? 1
            : a.name.last < b.name.last
            ? -1
            : 0;
        }
      }),
    });
  };

  searchEmployees = (event) => {
    event.preventDefault();
    this.setState({
      employees: this.state.employees.filter()
    })
  }

  // Map over the employees array and put their info in a card
  render() {
    return (
      <div>
        <h1>Employee List</h1>
        <Searchbar sortEmployees={this.sortEmployees} />
        <Table />
        {this.state.employees.map((employee) => (
          <Employee
            deleteEmployee={this.deleteEmployee}
            name={employee.name.first + " " + employee.name.last}
            image={employee.picture.medium}
            email={employee.email}
            cell={employee.cell}
            location={employee.location.city + ", " + employee.location.state}
          />
        ))}
        ;
      </div>
    );
  }
}
export default App;
