import { render, screen } from '@testing-library/react';
import App from './App';

test('renders arboreum link', () => {
  render(<App />);
  const linkElement = screen.getByText(/arboreum/i);
  expect(linkElement).toBeInTheDocument();
});
