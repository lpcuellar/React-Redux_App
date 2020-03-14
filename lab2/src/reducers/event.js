import omit from 'lodash/omit';

import * as types from '../types/event';
import { combineReducers } from 'redux';

const order = (state = [], action) => {
    switch (action.type) {
        case type.EVENT_ADDED: {
            return [...state, action.payload.id];
        }
        case (action.type.EVENT_DELETED): {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        }
        case types.EVENT_DELETED: { //No está bien este reducer :((
            return omit(state,action.payload)
        }
        default: {
            return state;
        }
    }
};

const event = combineReducers({
    order,
    byId,
});

export default event;