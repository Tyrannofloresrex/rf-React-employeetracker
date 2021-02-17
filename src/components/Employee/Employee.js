import React from "React"
import ReactDOM from "react-dom";

class Employee extends Component {
    render() {
        return (
          <div className="column">
            <div className="card">
              <div className="card-image">
                <img alt="Profile" src={this.props.image}/>
              </div>
              <div className="card-content">
                <div className="employee-info">
                    <p className="name">{this.props.name}</p>
                    <p className="location">{this.props.location}</p>
                    <p className="email">{this.props.email}</p>
                    <p className="birthday">{this.props.birthday}</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Employee
