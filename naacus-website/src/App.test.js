import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NAACUS website', () => {
  render(<App />);
  const headingElement = screen.getByText(/Uniting African Catholic Communities Across the United States/i);
  expect(headingElement).toBeInTheDocument();
});
