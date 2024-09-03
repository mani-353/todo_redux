export function addTodoAction(id,text) {
    return {
        type: 'ADD_TODO',
        payload: { id,text }
    }
}
export function deleteTodoAction(id) {
    return {
        type: 'DELETE_TODO',
        payload: { id }
    }
}
export function updateTodoAction(id, text) {
    return {
        type: 'UPDATE_TODO',
        payload: { id, text }
    }
}