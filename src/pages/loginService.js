// loginService.js
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/user/login', {
      email,
      password,
    });

    const { token } = response.data;
    const decodedToken = jwtDecode(token);
    console.log('Decoded token:', decodedToken);
    return decodedToken;
    
  } catch (error) {
    console.error('Login failed:', error);
    const user = await response.json();
    return user;
   
  }

};

export default login;