import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing and find PDF Viewer', () => {
  render(<App />);
  const headerText = screen.getByText(/PDF Viewer/i);
  expect(headerText).toBeInTheDocument();
});
