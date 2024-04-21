import React, { FC } from 'react';
import { TodoItemProps } from '../../models/TodoItemProps/TodoItemProps';

export const TodoTask: FC<TodoItemProps> = ({ task }) => {
    return <p>{task}</p>;
};
