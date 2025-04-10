import { Store } from '../../types';
import curDirectorySelector from './curDirectorySelector';

describe('curDirectorySelector', () => {
  it('should return the curDirectory from the store', () => {
    const store = {
      curDirectory: '/home/user',
    };
    expect(curDirectorySelector(store as unknown as Store)).toEqual('/home/user');
  });
});
