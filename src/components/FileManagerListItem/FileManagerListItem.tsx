import React from 'react';
import { FileManagerItem, Args } from '../../types';
import setDirectoryEffect from '../../store/effects/setDirectoryEffect';
import { useProviderContext } from '../../store/Provider';
import { useDispatch } from '../../store/dispatch';

type FilemanagerItemProps = {
  item: FileManagerItem;
  displayColumns: Args['displayColumns'];
};

const FilemanagerItem = ({ item, displayColumns }: FilemanagerItemProps) => {
  const dispatch = useDispatch();
  const handleDoubleClick = () => {
    if (item.type === 'directory') {
      dispatch((state) => ({ directory: item }));
    } else {
      alert('File clicked'); // TODO
    }
  };

  return (
    <li onDoubleClick={handleDoubleClick}>
      <div>{item.name}</div>
      {displayColumns.map((column) => (
        <div key={column}>{item[column]}</div>
      ))}
    </li>
  );
};

export default FilemanagerItem;
