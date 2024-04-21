import React, { FC } from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { Form } from './components/Form/Form';
import { TaskCompleted } from './components/TaskCompleted/TaskCompleted';
const App: FC = () => {
    return (
        <div className="App">
            <Form />
            <TodoList />
            <TaskCompleted />
        </div>
    );
};

export default App;
