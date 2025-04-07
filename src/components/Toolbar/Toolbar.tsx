import useSelector from '../../store/selector';

import styles from './Toolbar.module.scss';

import schevronIcon from '../../assets/icons/chevron.svg';
import curDirectorySelector from '../../store/selectors/curDirectorySelector';
import { useDispatch } from '../../store/dispatch';

import traverseUpEffect from '../../store/effects/traverseUpEffect';

const Toolbar = () => {
  const dispatch = useDispatch();
  const curDirectory = useSelector(curDirectorySelector);

  return (
    <div className={styles.toolbar}>
      <div className={styles.directionBtnContainer}>
        <img
          src={schevronIcon}
          alt="Left"
          className={`${styles.directionBtn} ${styles.directionBtnLeft}`}
          onClick={() => dispatch(traverseUpEffect)}
        />
        <img src={schevronIcon} alt="Right" className={styles.directionBtn} />
      </div>
      <div>{curDirectory.name}</div>
    </div>
  );
};

export default Toolbar;
