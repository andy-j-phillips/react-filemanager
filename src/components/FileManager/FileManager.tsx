import FilemanagerDirectory from '../Directory';
import Toolbar from '../Toolbar';
import { Provider } from '../../store/Provider';
import { DirectoryItem, DisplayColumns } from '../../types';

type FileManagerProps = {
  directory: DirectoryItem;
  displayColumns: DisplayColumns;
};

const FileManager = (props: FileManagerProps) => {
  console.log(2);
  return (
    <Provider
      initialValue={{
        directory: props.directory,
        displayColumns: props.displayColumns,
      }}
    >
      <Toolbar />
      <FilemanagerDirectory />
    </Provider>
  );
};

export default FileManager;
