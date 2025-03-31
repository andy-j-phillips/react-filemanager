import FileManagerListItem from '../FileManagerListItem';
import { getState } from '../../store/Provider';

const FileManagerDirectory = () => {
  const { directory, displayColumns } = getState();
  if(!directory) {
    return null;
  }
  return (
    <div>
      <ul>
        {directory.children.map((item) => (
          <FileManagerListItem key={item.id} item={item} displayColumns={displayColumns} />
        ))}
      </ul>
    </div>
  );
};

export default FileManagerDirectory;
