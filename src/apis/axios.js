import axios from "axios";

const instance = axios.create({
    baseURL: 'https://project-managment-ui.vercel.app'
})

if (localStorage.getItem('JWT')) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('JWT')}`;
}

export default instance;