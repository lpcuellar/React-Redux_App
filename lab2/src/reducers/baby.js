import { combineReducers } from 'redux';

import * as types from '../types/baby';

const order = (state = [], action) => {
    switch (action.types) { 
        case types.BABY_ADDED: {
                return [...state, action.payload.id];
        }
        default: {
                return state;
        }
    } 
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

const selected = (state = null, action) => {
    switch (action.type) {
        case types.BABY_SELECTED: {
            return action.payload;
        }
        default: {
            return state;
            }
    }
};

const baby = combineReducers({
    byId,
    order,
    selected,
});

export default baby;