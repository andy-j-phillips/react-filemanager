type FileDirectoryBaseItem = {
  id: number | string;
  name: string;
  path: [string];
};

type FileItem = FileDirectoryBaseItem & {
  type: 'file';
};

export type DirectoryItem = FileDirectoryBaseItem & {
  children: (DirectoryItem | FileItem)[];
  type: 'directory';
};

type FileManagerItem = FileItem | DirectoryItem;
