import renderer from 'react-test-renderer';
import {UploadForm} from '../Components/UploadForm'

test('rend correctement', () => {
  const tree = renderer.create(<UploadForm/>).toJSON();
  expect(tree).toMatchSnapshot();
});