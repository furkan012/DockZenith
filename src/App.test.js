// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DockZenith title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DockZenith/i);
    expect(titleElement).toBeInTheDocument();
});
