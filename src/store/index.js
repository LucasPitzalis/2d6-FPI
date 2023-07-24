import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import saveMiddleware from '../middlewares/save';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        saveMiddleware,
    )),
);

store.subscribe(() => {
    localStorage.setItem('character', JSON.stringify(store.getState().character));
    localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
    localStorage.setItem('skills', JSON.stringify(store.getState().skills));
    localStorage.setItem('items', JSON.stringify(store.getState().items));
    localStorage.setItem('letter', JSON.stringify(store.getState().letter));
});

export default store;
