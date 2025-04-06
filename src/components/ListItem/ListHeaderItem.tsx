import useSelector from '../../store/selector';
import displayColumnsSelector from '../../store/selectors/displayColumnsSelector';

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
