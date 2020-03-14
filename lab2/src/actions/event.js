import * as types from '../types/event';

export const addEvent = (id, actionType, notes, date) => ({
    type: types.EVENT_ADDED,
    payload: { id, actionType, notes, date },
});

export const deleteEvent = (id) => ({
    type: types.EVENT_DELETED,
    payload: { id },
});