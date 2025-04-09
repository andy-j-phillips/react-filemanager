import { Store } from '../../types';
import isEndOfFilePathSelector from './isEndOfFilePathSelector';

describe('isEndOfFilePathSelector', () => {
  it('should return true if curDirectoryIndex is equal to the last index of fileSystemPath', () => {
    const store = {
      curDirectoryIndex: 2,
      fileSystemPath: ['root', 'folder1', 'folder2'],
    };
    expect(isEndOfFilePathSelector(store as Store)).toBe(true);
  });

  it('should return false if curDirectoryIndex is not equal to the last index of fileSystemPath', () => {
    const store = {
      curDirectoryIndex: 1,
      fileSystemPath: ['root', 'folder1', 'folder2'],
    };
    expect(isEndOfFilePathSelector(store as Store)).toBe(false);
  });
});
