import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from '../../store/index';
import { onCreate } from '../../store/actions/todo';
import { AppContainer } from './app';

let store;

beforeEach(() => {
  store = createStore();
});

test('renders correctly with active todos', async () => {
  store.dispatch(onCreate('first todo item'));
  store.dispatch(onCreate('second todo item'));
  const app = render(
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );

  expect(app).toMatchSnapshot();
});
