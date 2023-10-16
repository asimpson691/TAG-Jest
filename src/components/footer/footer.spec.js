import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { FooterContainer } from './footer';
import { createStore } from '../../store/index';
import { onCreate } from '../../store/actions/todo';

describe("footer", () => {
    test("should render correctly with one active todo", () => {
        const store = createStore();
        store.dispatch(onCreate('todo item'));
    
        const component = render(
            <Provider store={store}>
              <FooterContainer />
            </Provider>
          );
    
        expect(component).toMatchSnapshot()
    })
})


