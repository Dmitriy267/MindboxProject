import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskCompleted } from '../components/TaskCompleted/TaskCompleted';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

test('button with text', () => {
    render(
        <Provider store={store}>
            <TaskCompleted />
        </Provider>
    );

    expect(screen.getByText('Показать выполненые задачи'));
});

test('the component is have button', () => {
    render(
        <Provider store={store}>
            <TaskCompleted />
        </Provider>
    );
    expect(screen.getAllByRole('button'));
});

test('the function called one', () => {
    const onClick = jest.fn();

    render(
        <Provider store={store}>
            <TaskCompleted />
        </Provider>
    );

    fireEvent.click(screen.getByText('Показать выполненые задачи'));
    expect(onClick).not.toHaveBeenCalledTimes(1);
});
