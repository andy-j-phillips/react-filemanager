import { Store } from '../../types';
import displayColumnsSelector from './displayColumnsSelector';

describe('displayColumnsSelector', () => {
  it('should return the displayColumns from the store', () => {
    const store = {
      displayColumns: ['name', 'size', 'date'],
    };
    expect(displayColumnsSelector(store as Store)).toEqual(['name', 'size', 'date']);
  });
});
