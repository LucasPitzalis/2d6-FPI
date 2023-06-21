import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import reducer from '../reducers';

const enhancer = devToolsEnhancer();

const store = createStore(
    reducer,
    enhancer,
);

export default store;
