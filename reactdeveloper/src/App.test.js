import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('toggles message between Hello, World! and Hello, React!', () => {
  render(<App />);

  // Verify initial message
  const messageElement = screen.getByText(/Hello, World!/i);
  expect(messageElement).toBeInTheDocument();

  const buttonElement = screen.getByRole('button', { name: /Change Message/i });

  // Click to change message to "Hello, React!"
  fireEvent.click(buttonElement);
  const updatedMessage = screen.getByText(/Hello, React!/i);
  expect(updatedMessage).toBeInTheDocument();

  // Click again to change message back to "Hello, World!"
  fireEvent.click(buttonElement);
  const toggledBackMessage = screen.getByText(/Hello, World!/i);
  expect(toggledBackMessage).toBeInTheDocument();
});
