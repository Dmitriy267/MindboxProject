import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

export const TodoList: FC = () => {
    const { todos } = useAppSelector((state) => state.todos);
    return (
        <ul className={styles.ul}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};
