import React from 'react';
import FriendCard from './components/Employee';
import Wrapper from './components/Wrapper';

class App extends Component {
    

    deleteEmployee = id => {
        const employees = this.state.employees.filter(employee => employee.id !==id)
    }
}