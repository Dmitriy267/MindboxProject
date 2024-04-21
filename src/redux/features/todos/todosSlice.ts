import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../../models/Todo/Todo';
type TodosState = {
    todos: Todo[];
};
const initialState: TodosState = {
    todos: [],
};
export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: new Date().toISOString(),
                task: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const toggle = state.todos.find(
                (todo) => todo.id === action.payload
            );
            if (toggle) {
                toggle.completed = !toggle.completed;
            }
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
    },
});
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
