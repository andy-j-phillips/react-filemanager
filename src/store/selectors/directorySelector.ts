import { getState } from '../../store/Provider';

const directorySelector = () => getState().directory;

export default directorySelector;
