import React from 'react'
import logo from './logo.jpg';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <img src={logo} className="h-30 w-40 object-cover rounded" alt="logo" />
      <div>
          <h2 className="text-xl font-bold mb-4">CLOTHES COLLECTIONS </h2>
          <form>
            <input type="email" placeholder="Enter your email" className="p-2 rounded text-white w-full mb-2" />
            <button className="bg-indigo-500 px-4 py-2 rounded w-full">Subscribe</button>
          </form>
        </div>

        
        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to = "/" className='hover:underline'>Shop</Link></li>
            <li><Link to = "/about" className = "hover:underline">About</Link></li>
           <li><Link to="/" className="hover:underline">Contact me</Link>
           </li>
          </ul>
         <div className='text-xl flex gap-3'>
          <i class=" text-blue-600 fa-brands fa-facebook"></i>
          <i class="text-pink-600 fa-brands fa-instagram"></i>
          <i class="text-red-600 fa-brands fa-youtube"></i>
          <i class="text-blue-400 fa-brands fa-linkedin"></i>
          </div>
       
      </div>
      </div>
      <div className='text-center'>
       <p className="text-sm mt-3">&copy; 2025 BrandName. All rights reserved.</p> 
       <a href="#" className="block text-sm hover:underline">Privacy Policy</a> 
       <a href="#" className="block text-sm hover:underline">Terms of Use</a> 
       </div> 
</footer >

  ) 
}

export default Footer
