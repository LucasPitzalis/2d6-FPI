import { combineReducers } from 'redux';

import characterReducer from './character';
import appReducer from './app';

const rootReducer = combineReducers({
    character: characterReducer,
    app: appReducer,
});

export default rootReducer;
