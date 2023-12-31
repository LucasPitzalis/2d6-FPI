import { combineReducers } from 'redux';

import characterReducer from './character';
import contactsReducer from './contacts';
import skillsReducer from './skills';
import itemsReducer from './items';
import petsReducer from './pets';
import appReducer from './app';
import letterReducer from './letter';

const rootReducer = combineReducers({
    app: appReducer,
    character: characterReducer,
    skills: skillsReducer,
    items: itemsReducer,
    pets: petsReducer,
    contacts: contactsReducer,
    letter: letterReducer,
});

export default rootReducer;
