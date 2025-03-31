import { FileManagerItem, Args } from '../../types';
import { useDispatch } from '../../store/dispatch';
import styles from './FileManagerListItem.module.scss';

type FilemanagerItemProps = {
  item: FileManagerItem;
  displayColumns: Args['displayColumns'];
};

const FilemanagerItem = ({ item, displayColumns }: FilemanagerItemProps) => {
  const dispatch = useDispatch();
  const handleDoubleClick = () => {
    console.log(item);
    if (item.type === 'directory') {
      dispatch(() => ({ directory: item }));
    } else {
      alert('File clicked'); // TODO
    }
  };

  return (
    <li className={styles.fileManagerListItem} onDoubleClick={handleDoubleClick}>
      <div>{item.name}</div>
      {displayColumns.map((column) => (
        <div key={column}>{item[column]}</div>
      ))}
    </li>
  );
};

export default FilemanagerItem;
