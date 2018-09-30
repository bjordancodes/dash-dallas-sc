import React from 'react';
import axios from 'axios';

export default Logout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');
    axios.get('/logout')
    .then(res=> res)
    .catch(err=> console.log(err));
}
