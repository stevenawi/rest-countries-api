import { createStore } from 'redux';
import { setThemeReducer } from './reducer/setThemeReducer';

const store = createStore(setThemeReducer);

export default store;
