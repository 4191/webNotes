import React from 'react';
import { render } from '@testing-library/react';
import AppRouter from './app_router';

test('renders Ant Design', () => {
    const { getByText } = render(<AppRouter />);
    const element = getByText(/Ant Design/i);
    expect(element).toBeInTheDocument();
});
