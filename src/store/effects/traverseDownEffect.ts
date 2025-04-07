import { Store, DirectoryItem } from '../../types';

const traverseDownEffect = (directoryName: string, isNew: boolean) => (store: Store) => {
  const { fileSystemPath, curDirectoryIndex, curDirectory } = store;
  const curPath = [...fileSystemPath];
  // TODO cache children as object rather than iterate on each CD
  const newDirectory = curDirectory.children.find(
    (item) => item.name === directoryName,
  ) as DirectoryItem;

  if (newDirectory) {
    const newState: Partial<Store> = {
      curDirectoryIndex: curDirectoryIndex + 1,
      curDirectory: newDirectory,
    };
    if (isNew) {
      newState.fileSystemPath = curPath.splice(0, curDirectoryIndex + 1).concat(newDirectory.name);
    }
    return newState;
  }

  return store;
};

export default traverseDownEffect;
