import React from 'react';
import fileData from '../../__mock__/data/fileData';
import Filemanager from '../../src/components/FileManager';

const ConsumedFilemanager = () => {
  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Filemanager directory={fileData} displayColumns={['date_modified', 'size', 'kind']} />
    </div>
  );
};

export default ConsumedFilemanager;
