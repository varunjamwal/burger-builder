import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-f2d6c.firebaseio.com/'
}); 

export default instance;