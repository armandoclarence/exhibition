import axios from 'axios';
const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/users/login', {
      email,
      password,
    });
    const { token } = response.data;
    console.log(token)
    return token;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
  
};

export default login;