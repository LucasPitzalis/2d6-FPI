import { combineReducers } from 'redux';

import characterReducer from './character';
import contactsReducer from './contacts';
import appReducer from './app';

const rootReducer = combineReducers({
    app: appReducer,
    character: characterReducer,
    contacts: contactsReducer,
});

export default rootReducer;
