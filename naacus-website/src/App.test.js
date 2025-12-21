import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import './i18nForTests'; // Import mock i18n configuration for tests

test('renders NAACUS website', async () => {
  render(<App />);
  
  // Wait for translations to load
  await waitFor(() => {
    const headingElements = screen.getAllByText(/Uniting African Catholic Communities Across the United States/i);
    expect(headingElements.length).toBeGreaterThan(0);
    expect(headingElements[0]).toBeInTheDocument();
  });
});

test('renders website title', async () => {
  render(<App />);
  
  await waitFor(() => {
    const titleElements = screen.getAllByText('NAACUS');
    expect(titleElements.length).toBeGreaterThan(0);
    expect(titleElements[0]).toBeInTheDocument();
  });
});
