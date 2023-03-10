import React from 'react';
import { render } from '@testing-library/react';
import MapChart from '../components/map';

test('renders map chart component', () => {
  const { container } = render(<MapChart />);
  expect(container).toMatchSnapshot();
});
