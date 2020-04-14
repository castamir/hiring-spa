// reference: https://facebook.github.io/create-react-app/docs/running-tests#src-setuptestsjs
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
