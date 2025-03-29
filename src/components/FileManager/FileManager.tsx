import React from 'react';
import fileData from '../../__mock__/data/fileData';
import { DirectoryItem } from '../../types'
import FilemanagerDirectory, { FileManagerDirectoryProps } from '../FileManagerDirectory';



const Filemanager = (props: FileManagerDirectoryProps) => {

  return (
    <FilemanagerDirectory {...props} />
  );
};

const ConsumedFilemanager = () => {
  return < Filemanager directory={fileData} displayColumns={['date_modified', 'size', 'kind']} />
}

export default ConsumedFilemanager;
