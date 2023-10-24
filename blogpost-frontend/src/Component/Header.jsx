import React from 'react';

// Context or state for user information (you may have your own implementation)
const UserContext = React.createContext();

const Header = () => {


  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">Rebel Alliance Blog</h1>
        
        <div>
          <p className="text-yellow-500 mr-4">Skywalker</p>
          <nav>
            {/* <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-yellow-500 hover:text-yellow-400">Home</a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 hover:text-yellow-400">About</a>
              </li>
              <li>
                <a href="#" className="text-yellow-500 hover:text-yellow-400">Contact</a>
              </li>
            </ul> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
