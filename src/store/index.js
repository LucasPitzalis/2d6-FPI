import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import reducer from '../reducers';

const enhancer = devToolsEnhancer();

const store = createStore(
    reducer,
    enhancer,
);

store.subscribe(() => {
    localStorage.setItem('character', JSON.stringify(store.getState().character));
});

export default store;
