import React, { FC } from 'react';
import { TodoItemProps } from '../../models/TodoItemProps/TodoItemProps';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { toggleTodo, removeTodo } from '../../redux/features/todos/todosSlice';
import styles from './TodoItem.module.scss';

export const TodoItem: FC<TodoItemProps> = ({ completed, id, task }) => {
    const dispatch = useAppDispatch();

    return (
        <li className={styles.li}>
            <input
                type="checkbox"
                role="checkbox"
                checked={completed}
                onChange={() => {
                    dispatch(toggleTodo(id));
                }}
                className={styles.checkbox}
            />
            <span
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {task}
            </span>
            <button onClick={() => dispatch(removeTodo(id))}>Удалить</button>
        </li>
    );
};
