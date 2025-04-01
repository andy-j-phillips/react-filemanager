import { FileManagerItem, DisplayColumns } from '../../types';
import { useDispatch } from '../../store/dispatch';
import styles from './FileManagerListItem.module.scss';

type FilemanagerItemProps = {
  item: FileManagerItem;
  displayColumns: DisplayColumns;
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
    <li className={styles.listItem} onDoubleClick={handleDoubleClick}>
      <div>{item.name}</div>
      {displayColumns.map((column) => (
        <div key={column}>{item.hasOwnProperty(column) && item[column]}</div>
      ))}
    </li>
  );
};

export default FilemanagerItem;
