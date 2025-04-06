import fileIcon from '../../assets/icons/file.svg';
import folderIcon from '../../assets/icons/folder.svg';
import { useDispatch } from '../../store/dispatch';
import displayColumnsSelector from '../../store/selectors/displayColumnsSelector';
import useSelector from '../../store/useSelector';
import { FileManagerItem } from '../../types';

import styles from './ListItem.module.scss';

type ListItemProps = {
  item: FileManagerItem;
};

const ListItem = ({ item }: ListItemProps) => {
  const displayColumns = useSelector(displayColumnsSelector);
  const dispatch = useDispatch();

  const handleDoubleClick = () => {
    if (item.type === 'directory') {
      dispatch(() => ({ directory: item }));
    } else {
      // eslint-disable-next-line no-undef
      alert('File clicked'); // TODO
    }
  };

  return (
    <li className={styles.listItemBody} onDoubleClick={handleDoubleClick}>
      <div>
        <img
          src={item.type === 'file' ? fileIcon : folderIcon}
          alt="Folder Icon"
          className={styles.listItemBodyIcon}
        />{' '}
        {item.name}
      </div>
      {displayColumns.map((column) => (
        <div key={column}>{item[column]}</div>
      ))}
    </li>
  );
};

export default ListItem;
