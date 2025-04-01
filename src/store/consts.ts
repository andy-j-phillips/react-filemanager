import { Store } from '../types';

export const DEFAULT_STATE: Store = {
  directory: {
    id: -1,
    name: '',
    path: [],
    type: 'directory',
    children: [],
  },
  displayColumns: [],
};
