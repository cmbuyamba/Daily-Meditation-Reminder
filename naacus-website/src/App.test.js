import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NACCUS website', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to NACCUS/i);
  expect(headingElement).toBeInTheDocument();
});
