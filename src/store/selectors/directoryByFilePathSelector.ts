import { Store } from '../../types';

const directoryByFilePathSelector = (pathIndex: number) => (store: Store) => {
  const { fileSystemPath, fileSystem } = store;
  const directory = fileSystemPath.reduce((acc, cur, index) => {
    if (index > pathIndex) {
      return acc;
    }
    return acc[cur];
  }, fileSystem);
  return directory;
};

export default directoryByFilePathSelector;
