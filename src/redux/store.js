import { createStore } from 'redux';
const intialvlaue = {
    todo: [],
}
const reducer = (state = intialvlaue, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, todo: [...state.todo, { id: action.payload.id, text: action.payload.text }]
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todo: state.todo.filter((todo) => todo.id !== action.payload.id),
            };
        case 'UPDATE_TODO':
            return {
                ...state, todo: state.todo.map(todo => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
            };
        default:
            return state
    }
}
const store = createStore(reducer)
export default store;