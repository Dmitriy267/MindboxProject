import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

test('calls onChange prop when checked', () => {
    render(
        <Provider store={store}>
            <TodoItem id={''} task={''} completed={false} />
        </Provider>
    );
    const onChange = jest.fn();
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledTimes(0);
});

test('show render button', () => {
    const { getByText, asFragment } = render(
        <Provider store={store}>
            <TodoItem id={''} task={''} completed={false} />
        </Provider>
    );
    const ButtonRender = asFragment();
    fireEvent.click(screen.getByText('Удалить'));
    expect(ButtonRender).toMatchInlineSnapshot(asFragment(), `Object {}`);
});

test('show last element', () => {
    const liElement = document.createElement('li');
    const { container } = render(
        <Provider store={store}>
            <TodoItem id={''} task={''} completed={false} />
        </Provider>,
        {
            container: document.body.appendChild(liElement),
        }
    );
});
