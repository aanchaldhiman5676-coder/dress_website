import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="bg-slate-800 min-h-screen py-10 px-6">
      <h2 className="text-2xl font-bold text-white mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-white">Your cart is empty!</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition">
              
              <div className="flex items-center gap-3">
                <img src={item.img} alt="cart-item" className="w-20 h-20 object-cover rounded-md"/>
                <span className="font-medium text-gray-800">Item</span>
              </div>

              <div className="text-gray-700 font-semibold">
                Qty: {item.count}
              </div>

              <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800 font-bold">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
