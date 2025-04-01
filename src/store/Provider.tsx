import { createContext, useState, useContext, ReactNode } from 'react';
import { Store } from '../types';
import { DEFAULT_STATE } from './consts';

type TProviderContext = {
  setContextState: React.Dispatch<React.SetStateAction<Store>>;
  state: Store;
};

export const ProviderContext = createContext<TProviderContext>({
  setContextState: () => {},
  state: DEFAULT_STATE,
});

export const Provider = ({
  children,
  initialValue,
}: {
  children: ReactNode;
  initialValue: Store;
}) => {
  const [state, setState] = useState(initialValue);

  const setContextState: React.Dispatch<React.SetStateAction<Store>> = (
    newStateOrSetter: React.SetStateAction<Store>,
  ) => {
    setState(newStateOrSetter);
  };

  const value = {
    state,
    setContextState,
  };

  return <ProviderContext.Provider value={value}>{children}</ProviderContext.Provider>;
};

export const useProviderContext = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProviderContext must be used within a Provider');
  }
  return context;
};

export const getState = () => {
  return useProviderContext().state;
};
