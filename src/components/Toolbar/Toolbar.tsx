import { getState } from '../../store/Provider';


const Toolbar = ()  => {
      const { directory } = getState();
    
    return <div>{directory.name}</div>
}

export default Toolbar;