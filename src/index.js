import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import store from './components/redux/configureStore';
import Search from './components/pages/Search';
import ErrorPage from './components/pages/ErrorPage';
import Details from './components/pages/Details/Details';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'search',
    element: <Search />,
  },
  {
    path: 'search/details',
    element: <Details />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
