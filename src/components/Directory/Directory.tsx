import useSelector from '../../store/selector';
import curDirectorySelector from '../../store/selectors/curDirectorySelector';
import ListItem from '../ListItem';
import ListHeaderItem from '../ListItem/ListHeaderItem';

import styles from './Directory.module.scss';

const Directory = () => {
  const curDirectory = useSelector(curDirectorySelector);

  return (
    <ul className={styles.directory}>
      <ListHeaderItem />
      {curDirectory.children.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Directory;
