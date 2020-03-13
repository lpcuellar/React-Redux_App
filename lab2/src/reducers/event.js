import omit from 'lodash/omit';

import * as types from '../types/event';

export const event = (state = {}, action) => {
    switch (action.type) {
        case types.EVENT_ADDED:
            {
                return {
                    ...state,
                    [action.payload.id]: action.payload,
                };
            }
        case types.EVENT_DELETED: //No está bien este reducer :((
            {
                state.hasOwnProperty()
            }
        default:
            {
                return state;
            }
    }
};

export default event;