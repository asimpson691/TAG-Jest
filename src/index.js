import { createRoot } from 'react-dom/client';
import 'todomvc-app-css/index.css';
import { Provider } from 'react-redux';
import { createStore } from './store/index';
import { AppContainer } from './components/app/app';

const container = document.querySelector('app-root');
const root = createRoot(container);
root.render(
  <Provider store={createStore()}>
    <AppContainer />
  </Provider>
);
