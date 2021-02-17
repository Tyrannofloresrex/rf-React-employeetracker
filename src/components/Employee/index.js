import React from "react";
import ReactDOM from "react-dom";
import Employee from"./Employee"
import axios from "axios";

class EmployeeIndex extends Component{
    state = {
        employees: []
    }
    componentdidMount(){
        axios .get("https://randomuser.me/api/?results=20")
        .then(response => {
            this.setState({employees: response.data.results})
        })
        .catch(err => {
            console.log(err)
        });
    };

    render() {
        const employeeList =this.state.employees.map( employee => (
            <Employee 
                name={employee.name.first}
                image = {employee.picture.medium}
            />
        ));
        return <div className= "columns is-multiline">{employeeList}</div>
    }
}
ReactDOM.render(<EmployeeIndex />, document.getElementById("root"));