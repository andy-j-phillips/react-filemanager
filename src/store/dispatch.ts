import { useState } from 'react';
import { useProviderContext } from './Provider';
import { Store } from '../types';

type DispatchSetter = (store: Store) => Partial<Store>;

export const useDispatch = () => {
  const _ = useState(null);
  const providerContext = useProviderContext();

  return (setter: DispatchSetter) => {
    providerContext.setContextState((prevState) => {
      const newState = setter(prevState);
      return { ...prevState, ...newState };
    });
  };
};
