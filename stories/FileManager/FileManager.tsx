import React from 'react';
import Filemanager, { FileManagerProps } from '../../src/components/FileManager';

const ConsumedFilemanager = (props: FileManagerProps) => {

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Filemanager {...props}  />
    </div>
  );
};

export default ConsumedFilemanager;
