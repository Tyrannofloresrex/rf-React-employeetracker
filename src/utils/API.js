import axios from "axios";
const API = 'https://randomuser.me/api/?inc=name,location,email,cell,picture&results=20&nat=us'
export default {
    generateEmployees: function() {
        return axios.get(API)
    }
}