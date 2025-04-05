import styles from './ListItem.module.scss';
import displayColumnsSelector from '../../store/selectors/displayColumnsSelector';

const ListHeaderItem = () => {
  const displayColumns = displayColumnsSelector();

  return (
    <li className={styles.listItemHeader}>
      {['Name', ...displayColumns].map((col) => (
        <div>{col}</div>
      ))}
    </li>
  );
};

export default ListHeaderItem;
