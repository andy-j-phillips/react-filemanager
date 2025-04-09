import useSelector from '../../store/selector';

import styles from './Toolbar.module.scss';

import schevronIcon from '../../assets/icons/chevron.svg';
import curDirectorySelector from '../../store/selectors/curDirectorySelector';
import { useDispatch } from '../../store/dispatch';

import traverseUpEffect from '../../store/effects/traverseUpEffect';
import isRootDirectorySelector from '../../store/selectors/isRootDirectorySelector';
import isEndOfFilePathSelector from '../../store/selectors/isEndOfFilePathSelector';
import traverseDownEffect from '../../store/effects/traverseDownEffect';

const Toolbar = () => {
  const dispatch = useDispatch();
  const curDirectory = useSelector(curDirectorySelector);
  const isRootDirectory = useSelector(isRootDirectorySelector);
  const isEndOfFilePath = useSelector(isEndOfFilePathSelector);

  const handleBackClick = () => {
    if (!isRootDirectory) {
      dispatch(traverseUpEffect);
    }
  };

  const handleForwardClick = () => {
    if (!isEndOfFilePath) {
      dispatch(traverseDownEffect());
    }
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.directionBtnContainer}>
        <img
          src={schevronIcon}
          alt="Left"
          className={`${styles.directionBtn} ${styles.directionBtnLeft} ${isRootDirectory ? styles.disabled : ''}`}
          onClick={handleBackClick}
        />
        <img
          src={schevronIcon}
          alt="Right"
          className={`${styles.directionBtn} ${isEndOfFilePath ? styles.disabled : ''}`}
          onClick={handleForwardClick}
        />
      </div>
      <div>{curDirectory.name}</div>
    </div>
  );
};

export default Toolbar;
