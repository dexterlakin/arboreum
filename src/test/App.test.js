import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from "react-router-dom";


test('renders connect your wallet button', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const btnElement = screen.getByText(/connect your wallet/i);
  expect(btnElement).toBeInTheDocument();
});
