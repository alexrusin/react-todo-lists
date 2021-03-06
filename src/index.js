import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import AppRouter from './routers/AppRouter';

window.axios = require('axios').default;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';

const token = localStorage.getItem('token');
if (token) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));
