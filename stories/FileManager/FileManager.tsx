import fileData from '../../__mock__/data/fileData';
import Filemanager from '../../src/components/FileManager';


const ConsumedFilemanager = () => {
  return <Filemanager directory={fileData} displayColumns={['date_modified', 'size', 'kind']} />;
};

export default ConsumedFilemanager;
