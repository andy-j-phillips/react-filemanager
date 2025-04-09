import { DirectoryItem, Store } from '../../types';

const directoryByFilePathSelector = (pathIndex: number) => (store: Store) => {
  const { fileSystemPath, fileSystem } = store;
  const [, ...paths] = fileSystemPath;
  const directory = paths.reduce<DirectoryItem>((acc, cur, index) => {
    if (index > pathIndex - 1) {
      return acc;
    }

    // TODO cache children as object rather than iterate on each CD
    return acc.children.find((item) => item.name === cur);
  }, fileSystem);
  return directory;
};

export default directoryByFilePathSelector;
