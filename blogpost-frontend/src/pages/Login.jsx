import React, { useState } from 'react';
import axios from 'axios';


function Login() {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Replace with your authentication API endpoint
    const authEndpoint = 'http://localhost:3000/auth/login';
    const data = {
      email: username, // assuming 'username' contains the email
      password: password,
    };

    // Send a POST request to your authentication API
    axios
      .post(authEndpoint,data)
      .then((response) => {
        // If authentication is successful, set isAuthenticated to true
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.log(error);
        alert('Authentication failed. Please check your credentials.');
      });
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black bg-opacity-75 p-8 rounded-lg">
        <h1 className="text-3xl text-yellow-500 text-center mb-4 font-extrabold">Rebel Alliance Login</h1>
        {isAuthenticated ? (
          <p className='text-white'>You are logged in! Add your content here.</p>
        ) : (
          <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex-grow"></div>
            <button
              className="btn-primary bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );

  
}

export default Login