import * as types from '../types/event';

export const addEvent = (id, typeAction, notes, date) => ({
    type: types.EVENT_ADDED,
    payload: { id, typeAction, notes, date },
});

export const deleteEvent = (id) => ({
    type: types.EVENT_DELETED,
    payload: { id },
});