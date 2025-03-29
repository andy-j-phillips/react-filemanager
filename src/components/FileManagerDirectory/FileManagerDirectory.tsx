import React from 'react';
import { DirectoryItem } from '../../types'
import styles from './fileManagerDirectory.module.scss'

export type FileManagerDirectoryProps = {
  directory: DirectoryItem;
  displayColumns: string[];
};

const FileManagerDirectory = ({ directory, displayColumns }: FileManagerDirectoryProps) => {
  console.log(directory)
  return (
    <div>
      {directory.children.map((item) => (
        <ul key={item.id}>
          <li className={styles.fileManagerDirectoryListItem}>
            <div>{item.name}</div>
            {displayColumns.map((column) => (
              <div key={column}>{item[column]}</div>
            ))}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FileManagerDirectory;
