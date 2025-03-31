// MyContext.js
import  { createContext, useState, use } from 'react';

export const ProviderContext = createContext(null);

export const Provider = ({ children, initialValue }) => {
  const [state, setState] = useState(initialValue);

  const setContextState = (setter) => {
    setState(setter);
  };

  const value = {
    state,
    setContextState,
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
