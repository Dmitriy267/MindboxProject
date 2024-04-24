import React, { FC, useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { addTodo } from '../../redux/features/todos/todosSlice';
import styles from './Form.module.scss';
export const Form: FC = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();
    const addTodoHandler = () => {
        dispatch(addTodo(value));
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setValue('');
        addTodoHandler();
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="task">Задача</label>
                <input
                    type="text"
                    id="task"
                    placeholder="Введите название задачи"
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit">Добавить</button>
            </form>
        </>
    );
};
