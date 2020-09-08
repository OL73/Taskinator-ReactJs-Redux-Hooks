import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions/types";

// let todos = [];
// if (localStorage.getItem("todos") != null) {
//     const todosString = localStorage.getItem("todos");
//     todos = JSON.parse(todosString);
// }
// const initialState = {
//     todos
// };
const initialState = {
    todos: []
};

export default function rootReducer(state = initialState, action) {
    const todos = [...state.todos];
    let position;

    switch (action.type) {
        case ADD_TODO:
            // exemple ajout dans le localStorage
            //localStorage.setItem("todos", JSON.stringify([...state.todos, action.payload]));

            // Ajout d'un tache dans le state
            return {
                todos: [...state.todos, action.payload]
            };
        case DELETE_TODO:
            // Suppression d'un tache dans le state
            position = todos.indexOf(action.payload);
            todos.splice(position, 1);

            return {
                todos
            };
        case COMPLETE_TODO:
            // "Cocher" la case --> compléter la tache
            position = todos.indexOf(action.payload);
            action.payload.complete = !action.payload.complete;
            todos[position] = action.payload;

            return {
                todos
            }
        default:
            return state;
    }
}