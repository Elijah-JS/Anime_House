import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-center items-center px-4">
        <Link to="/" className="text-2xl font-semibold">Anime House</Link>
      </nav>
    </header>
  );
};

export default Header;
