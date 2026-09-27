import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.jsx';

describe('Student Settings Form', () => {
  test('shows required-field validation messages', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: '' }
    });

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: '' }
    });

    fireEvent.change(screen.getByLabelText(/Daily Study Hours/i), {
      target: { value: '' }
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Save Settings/i })
    );

    expect(
      screen.getByText(/Full Name is required/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Email is required/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Daily study hours is required/)
    ).toBeInTheDocument();
  });

  test('shows an error for an invalid email', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'abc' }
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Save Settings/i })
    );

    expect(
      screen.getByText(/Please enter a valid email address/)
    ).toBeInTheDocument();
  });

  test('rejects study hours outside the 1 to 12 range', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Daily Study Hours/i), {
      target: { value: '15' }
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Save Settings/i })
    );

    expect(
      screen.getByText(/Study hours must be between 1 and 12/)
    ).toBeInTheDocument();
  });

  test('shows success message after valid submission', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'Alex Johnson' }
    });

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'alex@example.com' }
    });

    fireEvent.change(screen.getByLabelText(/Daily Study Hours/i), {
      target: { value: '6' }
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Save Settings/i })
    );

    expect(
      screen.getByText('Settings saved successfully!')
    ).toBeInTheDocument();
  });
});