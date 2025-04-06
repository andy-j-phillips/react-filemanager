import { Store } from '../types';

import { useProviderContext } from './Provider';

type DispatchSetter = (store: Store) => Partial<Store>;

export const useDispatch = () => {
  const providerContext = useProviderContext();

  return (setter: DispatchSetter) => {
    providerContext.setContextState((prevState) => {
      const newState = setter(prevState);
      return { ...prevState, ...newState };
    });
  };
};
