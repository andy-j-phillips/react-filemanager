import FileManagerListItem from '../ListItem';
import { getState } from '../../store/Provider';

const FileManagerDirectory = () => {
  const { directory, displayColumns } = getState();
  return (
    <ul>
      {directory.children.map((item) => (
        <FileManagerListItem key={item.id} item={item} displayColumns={displayColumns} />
      ))}
    </ul>
  );
};

export default FileManagerDirectory;
