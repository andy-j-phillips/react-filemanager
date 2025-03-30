import React from 'react';
import FilemanagerDirectory, { FileManagerDirectoryProps } from '../FileManagerDirectory';
import { Provider } from '../../store/Provider';

const Filemanager = (props: FileManagerDirectoryProps) => {
  return (
    <Provider
      initialValue={{
        directory: props.directory,
        displayColumns: props.displayColumns,
      }}
    >
      <FilemanagerDirectory />
    </Provider>
  );
};


export default Filemanager;
