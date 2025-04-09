import { Store } from '../../types';

const isRootDirectorySelector = (store: Store): boolean => store.curDirectoryIndex === 0;

export default isRootDirectorySelector;
