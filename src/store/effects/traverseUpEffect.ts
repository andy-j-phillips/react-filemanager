import { Store } from '../../types';
import directoryByFilePathSelector from '../selectors/directoryByFilePathSelector';
import isRootDirectorySelector from '../selectors/isRootDirectorySelector';

const traverseUpEffect = (store: Store) => {
  const { curDirectoryIndex } = store;
  const isRootDirectory = isRootDirectorySelector(store);
  if (!isRootDirectory) {
    const newDirectory = directoryByFilePathSelector(curDirectoryIndex - 1)(store);
    return {
      curDirectoryIndex: curDirectoryIndex - 1,
      curDirectory: newDirectory,
    };
  }
  return {};
};

export default traverseUpEffect;
