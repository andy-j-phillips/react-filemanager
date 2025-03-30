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

export type FileManagerItem = FileItem | DirectoryItem;

export type Args = {
  displayColumns: string[];
};
