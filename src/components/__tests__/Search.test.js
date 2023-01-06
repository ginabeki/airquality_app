import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/configureStore';
import Search from '../pages/Search';

afterEach(cleanup);
test('Check if search page is rendering correctly', () => {
  const searchPage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="search" element={<Search />} />
          </Routes>
          ,
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(searchPage).toMatchSnapshot();
});
