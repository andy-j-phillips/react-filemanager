import { Provider } from '../../store/Provider';
import { DirectoryItem, DisplayColumns } from '../../types';
import FilemanagerDirectory from '../Directory';
import Toolbar from '../Toolbar';

import styles from './FileManager.module.scss';

export type FileManagerProps = {
  directory: DirectoryItem;
  displayColumns: DisplayColumns;
};

const FileManager = (props: FileManagerProps) => {
  return (
    <div className={styles.fileManager}>
      <Provider
        initialValue={{
          directory: props.directory,
          displayColumns: props.displayColumns,
        }}
      >
        <Toolbar />
        <FilemanagerDirectory />
      </Provider>
    </div>
  );
};

export default FileManager;
