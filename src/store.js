import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const Store = createStore(rootReducer, devToolsEnhancer());

export { Store };
