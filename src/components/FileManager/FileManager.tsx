import FilemanagerDirectory, { FileManagerDirectoryProps } from '../FileManagerDirectory';
import Toolbar from '../Toolbar';
import { Provider } from '../../store/Provider';

const Filemanager = (props: FileManagerDirectoryProps) => {
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
