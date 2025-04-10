import { Store } from '../../types';
import isRootDirectorySelector from './isRootDirectorySelector';

describe('isRootDirectorySelector', () => {
  it('should return true if curDirectoryIndex is 0', () => {
    const store = {
      curDirectoryIndex: 0,
    };
    expect(isRootDirectorySelector(store as Store)).toBe(true);
  });

  it('should return false if curDirectoryIndex is not 0', () => {
    const store = {
      curDirectoryIndex: 1,
    };
    expect(isRootDirectorySelector(store as Store)).toBe(false);
  });
});
