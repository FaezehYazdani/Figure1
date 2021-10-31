import { createStore } from 'redux';
import appReducer from '../reducers/index';

const configureStore = () => {
  return createStore(appReducer);
};

export default configureStore;
