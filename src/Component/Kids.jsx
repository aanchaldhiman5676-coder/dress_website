import React, { useState, useContext } from 'react';
import { kidsimg } from '../assets/assets';
import { CartContext } from '../Context/CartContext';

const Kids = () => {
  const imag = Object.values(kidsimg);

  const [counts, setCounts] = useState(Array(imag.length).fill(0));
  const [wishlist, setWishlist] = useState(Array(imag.length).fill(false));
  const { addToCart } = useContext(CartContext);

  const increment = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
    addToCart(`kids-${index}`, imag[index]);
  };

  const decrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index]--;
      setCounts(newCounts);
    }
  };

  const toggleWishlist = (index) => {
    const newWishlist = [...wishlist];
    newWishlist[index] = !newWishlist[index];
    setWishlist(newWishlist);
  };

  return (
    <div className='bg-slate-800 min-h-screen py-10 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center'>
        {imag.map((img, index) => (
          <div key={index} className='bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[280px] hover:scale-105 transition-transform duration-300'>
            <img src={img} alt={`img-${index}`} className='w-full h-64 sm:h-72 md:h-80 object-cover hover:opacity-90 transition-opacity duration-300'/>

            <div className='p-4 flex flex-col items-center'>
              <div className='flex items-center justify-between gap-3 mb-3'>
                <span className='font-semibold text-gray-800'>Qty:</span>
                <button onClick={() => decrement(index)} className='bg-red-400 hover:bg-red-500 text-white font-bold px-2 py-1 rounded transition'>-</button>
                <span className='w-6 text-center'>{counts[index]}</span>
                <button onClick={() => increment(index)} className='bg-green-400 hover:bg-green-500 text-white font-bold px-2 py-1 rounded transition'>+</button>
              </div>

              <button
                onClick={() => toggleWishlist(index)}
                className='flex items-center gap-2 text-red-500 hover:text-red-600 transition'
              >
                <i className={wishlist[index] ? 'fas fa-heart' : 'far fa-heart'}></i>
                <span className='text-sm text-black'>
                  {wishlist[index] ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kids;
