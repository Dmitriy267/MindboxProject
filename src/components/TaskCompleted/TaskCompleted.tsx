import React, { FC, useState } from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import { TodoTask } from '../TodoTask/TodoTask';
import styles from './TaskCompleted.module.scss';
export const TaskCompleted: FC = () => {
    const [taskTrue, setTaskTrue] = useState(false);
    const [taskFalse, setTaskFalse] = useState(false);
    const { todos } = useAppSelector((state) => state.todos);

    return (
        <div className={styles.wrapperDiv}>
            <button onClick={() => setTaskTrue((prev) => !prev)}>
                Показать выполненые задачи
            </button>

            {taskTrue &&
                todos
                    .filter((el) => el.completed === false)
                    .map((todo) => <TodoTask key={todo.id} {...todo} />)}

            <button onClick={() => setTaskFalse((prev) => !prev)}>
                Показать невыполненые задачи
            </button>

            {taskFalse &&
                todos
                    .filter((el) => el.completed === true)
                    .map((todo) => <TodoTask key={todo.id} {...todo} />)}
        </div>
    );
};
