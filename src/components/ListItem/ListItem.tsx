import fileIcon from '../../assets/icons/file.svg';
import folderIcon from '../../assets/icons/folder.svg';
import { useDispatch } from '../../store/dispatch';
import traverseDownEffect from '../../store/effects/traverseDownEffect';
import useSelector from '../../store/selector';
import displayColumnsSelector from '../../store/selectors/displayColumnsSelector';
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
      dispatch(traverseDownEffect(item.name, true));
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
