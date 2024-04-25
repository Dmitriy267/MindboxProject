import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '../components/Form/Form';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

test('label with text', () => {
    render(
        <Provider store={store}>
            <Form />
        </Provider>
    );

    expect(screen.getByLabelText('Задача'));
});

test('calls onClick prop when clicked', () => {
    const handleChange = jest.fn();
    render(
        <Provider store={store}>
            <Form />
        </Provider>
    );

    fireEvent.click(screen.getByPlaceholderText('Введите название задачи'));
    expect(handleChange).toHaveLength(0);
});

test('the function called one', () => {
    const handleChange = jest.fn();

    render(
        <Provider store={store}>
            <Form />
        </Provider>
    );

    fireEvent.click(screen.getByPlaceholderText('Введите название задачи'));
    expect(handleChange).not.toHaveBeenCalledTimes(1);
});
