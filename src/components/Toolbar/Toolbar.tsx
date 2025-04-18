import useSelector from '../../store/selector';

import styles from './Toolbar.module.scss';

const Toolbar = () => {
  const { directory } = useSelector((state) => state);

  return <div className={styles.toolbar}>{directory.name}</div>;
};

export default Toolbar;
