type FileDirectoryBaseItem = {
  id: number | string;
  name: string;
  path: string[];
};

type FileItem = FileDirectoryBaseItem & {
  type: 'file';
};

export type DirectoryItem = FileDirectoryBaseItem & {
      children: FileManagerItem[];
  type: 'directory';
};
export type DisplayColumns = string[];

export type FileManagerItemColumns = Record<DisplayColumns[number], string | number | undefined>;

export type FileManagerItem = FileItem | (DirectoryItem & FileManagerItemColumns);

export type Store = {
  directory: DirectoryItem;
  displayColumns: DisplayColumns;
};
