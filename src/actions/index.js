import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './types';

export const addTodo = (text) => {
    return ({
        type: ADD_TODO,
        payload: {
            text,
            complete: false
        }
    });
};

export const deleteTodo = (item) => {
    return ({
        type: DELETE_TODO,
        payload: item
    })
};

export const completeTodo = (item) => {
    return ({
        type: COMPLETE_TODO,
        payload: item
    })
}