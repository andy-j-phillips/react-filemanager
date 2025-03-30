import React from 'react';
import { DirectoryItem, Args } from '../../types';
import FileManagerListItem from '../FileManagerListItem';
import { getState } from '../../store/Provider';
// import styles from './fileManagerDirectory.scss';

// console.log(styles); // Add this line

const FileManagerDirectory = () => {
  const { directory, displayColumns } = getState();
  return (
    <div>
      {directory.children.map((item) => (
        <ul key={item.id}>
          <FileManagerListItem key={item.id} item={item} displayColumns={displayColumns} />
        </ul>
      ))}
    </div>
  );
};

export default FileManagerDirectory;
