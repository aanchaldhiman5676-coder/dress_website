import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-gray-900 text-white w-full px-4 py-4 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold">My Store</span>
        <img src={logo} alt="logo" className="h-16 w-16 object-cover rounded" />
      </div>

      
      <ul className="hidden md:flex gap-6">
        <li><Link to="/" className="hover:text-green-400">Home</Link></li>
        <li><Link to="/Mens" className="hover:text-green-400">Mens</Link></li>
        <li><Link to="/Womens" className="hover:text-green-400">Womens</Link></li>
        <li><Link to="/Kids" className="hover:text-green-400">Kids</Link></li>
      </ul>

      
      <div className="flex items-center gap-4">
        <Link to="/Cart">
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white">
            Cart ({totalItems})
          </button>
        </Link>

        <Link to="/Login">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
