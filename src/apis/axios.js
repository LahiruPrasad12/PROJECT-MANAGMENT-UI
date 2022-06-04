import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reg14-new.herokuapp.com'
})

if (localStorage.getItem('JWT')) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('JWT')}`;
}

export default instance;