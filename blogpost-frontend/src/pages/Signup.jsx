import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const authEndpoint = 'http://localhost:3000/auth/register';
  const handleRegistration = () => {
    const userData = {
      username,
      password,
      email,
    };

    axios
      .post(authEndpoint, userData)
      .then((response) => {
        console.log('User registered:', response.data);
        // Handle success (e.g., show a success message or redirect)
      })
      .catch((error) => {
        console.error('Registration error:', error);
        // Handle errors (e.g., display an error message)
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black bg-opacity-75 p-8 rounded-lg">
        <h1 className="text-3xl text-yellow-500 text-center mb-4 font-extrabold">Join the Force!</h1>
        <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="username">
              Rebel Alliance Username
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
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="flex items-center justify-between">
            <button
              className="btn-primary bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegistration}
            >
              Join the Rebellion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
