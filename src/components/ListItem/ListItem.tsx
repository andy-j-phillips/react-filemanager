import { FileManagerItem, DisplayColumns } from '../../types';
import { useDispatch } from '../../store/dispatch';
import styles from './ListItem.module.scss';
import displayColumnsSelector from '../../store/selectors/displayColumnsSelector';

type ListItemProps = {
  item: FileManagerItem;
};

const ListItem = ({ item }: ListItemProps) => {
  const displayColumns = displayColumnsSelector();
  const dispatch = useDispatch();

  const handleDoubleClick = () => {
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

export default ListItem;
