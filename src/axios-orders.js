import axios from 'axios';
const instance = axios.create({
    baseURL:'https://burger-f7deb.firebaseio.com/'
})

export default instance;