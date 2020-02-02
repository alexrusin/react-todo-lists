import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const checkIfLoggedIn = async () => {
        try {
            await window.axios.post(process.env.REACT_APP_API_URL + '/api/users/is-logged-in', {
                token
            });
            setIsLoggedIn(true)
        } catch (err) {
            
        }
    }

    checkIfLoggedIn();

    }, []);

  return (
    <Route
      {...rest}
      render={props =>
        !isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/lists', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute