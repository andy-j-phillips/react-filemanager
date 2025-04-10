import { Store } from '../../types';
import directoryByFilePathSelector from './directoryByFilePathSelector';

describe('directoryByFilePathSelector', () => {
  it('should return the directory by file path', () => {
    const store = {
      fileSystemPath: ['root', 'home', 'user'],
      fileSystem: {
        name: 'root',
        children: [
          {
            name: 'home',
            children: [
              {
                name: 'user',
                children: [],
              },
            ],
          },
        ],
      },
    };
    expect(directoryByFilePathSelector(1)(store as unknown as Store)).toEqual({
      name: 'home',
      children: [{ name: 'user', children: [] }],
    });
  });
  it('should return undefined if the directory does not exist', () => {
    const store = {
      fileSystemPath: ['home', 'user'],
      fileSystem: {
        name: 'root',
        children: [
          {
            name: 'home',
            children: [],
          },
        ],
      },
    };
    expect(directoryByFilePathSelector(1)(store as unknown as Store)).toBeUndefined();
  });

  it('should return the root directory if the path index is 0', () => {
    const store = {
      fileSystemPath: ['root', 'home', 'user'],
      fileSystem: {
        name: 'root',
        children: [
          {
            name: 'home',
            children: [
              {
                name: 'user',
                children: [],
              },
            ],
          },
        ],
      },
    };
    expect(directoryByFilePathSelector(0)(store as unknown as Store)).toEqual({
      name: 'root',
      children: [
        {
          name: 'home',
          children: [
            {
              name: 'user',
              children: [],
            },
          ],
        },
      ],
    });
  });
});
