import ListItem from '../ListItem';
import directorySelector from '../../store/selectors/directorySelector';

const Directory = () => {
  const directory = directorySelector();
  return (
    <ul>
      {directory.children.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Directory;
