import { Store } from '../types';

export const DEFAULT_STATE: Store = {
  directory: {
    id: -1,
    name: '',
    path: [],
    type: 'directory',
    children: [],
    created_at: '',
    kind: 'directory',
    size: 0,
  },
  displayColumns: [],
};
