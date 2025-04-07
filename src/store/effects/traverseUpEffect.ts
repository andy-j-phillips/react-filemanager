import { Store } from '../../types';
import directoryByFilePathSelector from '../selectors/directoryByFilePathSelector';

const traverseUpEffect = () => (store: Store) => {
  const { curDirectoryIndex } = store;
  const newDirectory = directoryByFilePathSelector(curDirectoryIndex - 1)(store);
  return {
    curDirectoryIndex: curDirectoryIndex - 1,
    curDirectory: newDirectory,
  };
};

export default traverseUpEffect;
