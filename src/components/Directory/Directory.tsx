import directorySelector from '../../store/selectors/directorySelector';
import useSelector from '../../store/selector';
import ListItem from '../ListItem';
import ListHeaderItem from '../ListItem/ListHeaderItem';

import styles from './Directory.module.scss';

const Directory = () => {
  const directory = useSelector(directorySelector);

  return (
    <ul className={styles.directory}>
      <ListHeaderItem />
      {directory.children.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Directory;
