import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, img) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === id);
      if (existing) {
        return prevCart.map(item =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { id, img, count: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

