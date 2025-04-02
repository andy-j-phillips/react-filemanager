import ListItem from '../ListItem';
import directorySelector from '../../store/selectors/directorySelector';
import styles from './Directory.module.scss';

const Directory = () => {
  const directory = directorySelector();
  return (
    <ul className={styles.directory}>
      {directory.children.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Directory;
