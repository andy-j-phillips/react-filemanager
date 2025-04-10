import { Store } from '../../types';

const isEndOfFilePathSelector = (store: Store): boolean => {
  const { curDirectoryIndex, fileSystemPath } = store;
  return fileSystemPath.length - 1 === curDirectoryIndex;
};

export default isEndOfFilePathSelector;
