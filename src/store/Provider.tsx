// MyContext.js
import React, { createContext, useState, use } from 'react';

export const ProviderContext = createContext(null);

export const Provider = ({ children, initialValue }) => {
  const [state, setState] = useState(initialValue);

  const updateState = (setter) => {
    setState(setter);
  };

  const value = {
    state,
    updateState,
  };

  return <ProviderContext.Provider value={value}>{children}</ProviderContext.Provider>;
};

export const useProviderContext = () => {
  const context = use(ProviderContext);
  if (!context) {
    throw new Error('useProviderContext must be used within a Provider');
  }
  return context;
};

export const getState = () => {
  return useProviderContext().state;
};
