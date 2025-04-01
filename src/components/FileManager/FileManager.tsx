import FilemanagerDirectory from '../Directory';
import Toolbar from '../Toolbar';
import { Provider } from '../../store/Provider';
import { DirectoryItem, DisplayColumns } from '../../types';

type FilemanagerProps = {
  directory: DirectoryItem;
  displayColumns: DisplayColumns;
};

const Filemanager = (props: FilemanagerProps) => {
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

export default Filemanager;
