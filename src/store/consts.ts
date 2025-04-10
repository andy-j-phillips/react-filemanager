import { Store, DirectoryItem } from '../types';

const INITIAL_DIRECTORY: DirectoryItem = {
  id: -1,
  name: '',
  path: [],
  type: 'directory',
  children: [],
  created_at: '',
  kind: 'directory',
  size: 0,
};

export const DEFAULT_STATE: Store = {
  curDirectory: INITIAL_DIRECTORY,
  fileSystem: INITIAL_DIRECTORY,
  fileSystemPath: [],
  curDirectoryIndex: 0,
  displayColumns: [],
};
