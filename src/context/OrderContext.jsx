import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderState, setOrderState] = useState({
    isOpen: false,
    product: null,
  });

  const openOrder = (product = null) => {
    setOrderState({
      isOpen: true,
      product: product,
    });
  };

  const closeOrder = () => {
    setOrderState({
      isOpen: false,
      product: null,
    });
  };

  return (
    <OrderContext.Provider value={{ orderState, openOrder, closeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
