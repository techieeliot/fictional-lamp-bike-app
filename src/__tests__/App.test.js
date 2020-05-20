import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import LocalForecast from '../components/LocalForecast'

test('weather bit api loads items eventually', () => {
  const { getByText, findByText } = render(<LocalForecast />)
  const weatherElement = getByText(/Weather TBD/i);
  expect(weatherElement.textContent).toBe('Broken clouds')
});
