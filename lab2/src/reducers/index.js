import { combineReducers } from 'redux';

import  baby, * as babySelectors from './baby';
import  event, * as eventSelectors from './event';

const reducer = combineReducers({
    baby,
    event,
});

export default reducer;