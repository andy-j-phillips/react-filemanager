import { getState } from '../../store/Provider';

import styles from './Toolbar.module.scss';

const Toolbar = () => {
  const { directory } = getState();

  return <div className={styles.toolbar}>{directory.name}</div>;
};

export default Toolbar;
