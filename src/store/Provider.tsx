import { createContext, useState, use, ReactNode } from 'react';
import { Store } from '../types';

type TProviderContext = {
  setContextState: React.Dispatch<React.SetStateAction<Store>>;
  state: Store;
};

const DEFAULT_STATE = {
  directory: null,
  displayColumns: [],
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

  const setContextState = (setter: (state: Store) => Store) => {
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
