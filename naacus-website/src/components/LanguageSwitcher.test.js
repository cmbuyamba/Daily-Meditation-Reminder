import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18nForTests';
import LanguageSwitcher from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    // Reset language to English before each test
    i18n.changeLanguage('en');
  });

  test('renders language switcher with current language', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('English')).toBeInTheDocument();
    });
  });

  test('displays language options when clicked', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    // Wait for initial render
    await waitFor(() => {
      expect(screen.getByText('English')).toBeInTheDocument();
    });

    // Click on the language switcher button
    const button = screen.getByText('English');
    fireEvent.click(button);

    // Check that Français option appears
    await waitFor(() => {
      const frenchOption = screen.getByText('Français');
      expect(frenchOption).toBeInTheDocument();
    });
  });
});
