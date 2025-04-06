import displayColumnsSelector from '../../store/selectors/displayColumnsSelector';
import useSelector from '../../store/useSelector';

import styles from './ListItem.module.scss';

const ListHeaderItem = () => {
  const displayColumns = useSelector(displayColumnsSelector);

  return (
    <li className={styles.listItemHeader}>
      {['Name', ...displayColumns].map((col) => (
        <div key={col}>{col}</div>
      ))}
    </li>
  );
};

export default ListHeaderItem;
