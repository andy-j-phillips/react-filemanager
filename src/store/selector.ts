import { Store } from '../types';

import { useProviderContext } from './Provider';

const useSelector = <T>(selector: (store: Store) => T) => {
  return selector(useProviderContext().state);
};

export default useSelector;
