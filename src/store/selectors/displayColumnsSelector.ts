import { getState } from '../../store/Provider';

const displayColumnsSelector = () => getState().displayColumns;

export default displayColumnsSelector;
