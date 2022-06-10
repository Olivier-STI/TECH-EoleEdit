import renderer from 'react-test-renderer';
import {UploadForm} from '../Components/UploadForm'

test('test rendering', () => {
  const tree = renderer.create(<UploadForm/>).toJSON();

  expect(tree).toMatchSnapshot();
});