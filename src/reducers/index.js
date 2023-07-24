import { combineReducers } from 'redux';

import characterReducer from './character';
import contactsReducer from './contacts';
import skillsReducer from './skills';
import itemsReducer from './items';
import appReducer from './app';

const rootReducer = combineReducers({
    app: appReducer,
    character: characterReducer,
    skills: skillsReducer,
    items: itemsReducer,
    contacts: contactsReducer,
});

export default rootReducer;
