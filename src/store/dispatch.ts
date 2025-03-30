import React, { use, useState } from 'react';
import { useProviderContext } from './Provider';

export const useDispatch = () => {
    const _ = useState(null);
    const providerContext = useProviderContext();
  return (setter) => {
    
    providerContext.updateState((prevState) => {
      const newState  = setter(prevState);
      return { ...prevState, ...newState };
    })
  }
}
