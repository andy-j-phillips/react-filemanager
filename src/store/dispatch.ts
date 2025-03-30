import React, { use, useState } from 'react';
import { useProviderContext } from './Provider';

export const useDispatch = () => () => (setter) => {
  const _ = useState(null);
  return useProviderContext().updateState(setter);
};
