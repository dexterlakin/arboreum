import { render, screen } from '@testing-library/react';
import App from './App';

test('renders connect your wallet button', () => {
  render(<App />);
  const btnElement = screen.getByText(/connect your wallet/i);
  expect(btnElement).toBeInTheDocument();
});
