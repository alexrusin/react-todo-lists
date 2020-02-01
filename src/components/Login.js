import React from 'react';
import {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const cardImageStyle = {
  backgroundImage: 'url(\'https://source.unsplash.com/ck0i9Dnjtj0/600x800\')'
};

const Login = ({history}) => {      
  
      const [error, setError] = useState({isError: false, errorMessage: ''});
      let usernameRef = useRef();
      let passwordRef = useRef();
    
      async function handleLogin() {
          const username = usernameRef.current.value;
          const password = passwordRef.current.value;
  
          if (!username || !password) {
              setError({
                  isError: true,
                  errorMessage: 'Please provide username and/or password'
              });
              return;
          }
  
          setError({
                  isError: false,
                  errorMessage: ''
              });
  
         axios.post(process.env.REACT_APP_API_URL + '/api/users/login', {
                  username,
                  password
              }).then(({data}) => {
                localStorage.setItem('token', data.token);
                history.push('/lists');
              }).catch((error) => {
                
                if (error.response.data.errorMessage) {
                  setError({
                    isError: true,
                    errorMessage: error.response.data.errorMessage
                  });
                } else {
                  setError({
                    isError: true,
                    errorMessage: 'Error logging in'
                  });
                  console.log(error);
                }
                
              });
      }
  return (
    <>
    <div className="container mx-auto">
    <div className="flex justify-center px-6 my-12">
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        <div
          className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 rounded-l-lg" style={cardImageStyle}
        ></div>
        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          {error.isError && <p className="text-xs italic text-red-500 bg-red-200 p-2 rounded">{error.errorMessage}</p>}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Email
              </label>
              <input
                ref={usernameRef}
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                onFocus={()=> setError({isError: false, errorMessage: ''})}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Password
              </label>
              <input
                ref={passwordRef}
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border {/*border-red-500*/} rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onFocus={()=> setError({isError: false, errorMessage: ''})}
              />
            </div>
            <div className="mb-6 text-center">
              <button
                onClick={handleLogin}
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                to="/register"
              >
                Create an Account!
              </Link>
           
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                to="./forgot-password.html"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Login;