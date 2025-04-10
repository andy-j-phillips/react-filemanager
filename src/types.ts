export type DisplayColumn = 'name' | 'size' | 'created_at' | 'kind';

export type DisplayColumns = DisplayColumn[];
type FileDirectoryBaseItem = {
  id: number | string;
  name: string;
  path: string[];
} & Record<DisplayColumn, string | number | undefined>;

type FileItem = FileDirectoryBaseItem & {
  type: 'file';
};

export type DirectoryItem = FileDirectoryBaseItem & {
  children: FileManagerItem[];
  type: 'directory';
};

export type FileManagerItemColumns = Record<DisplayColumns[number], string | number | undefined>;

export type FileManagerItem = FileItem | (DirectoryItem & FileManagerItemColumns);

export type Store = {
  fileSystem: DirectoryItem;
  fileSystemPath: string[];
  curDirectoryIndex: number;
  curDirectory: DirectoryItem;
  displayColumns: DisplayColumns;
};

export type FileManagerProps = {
  directory: DirectoryItem;
  displayColumns: DisplayColumns;
};
