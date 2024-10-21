import { render, screen } from '@testing-library/react';
import Button from '../Button.tsx';

describe('My Button component', () => {
  it('renders a heading', () => {
    render(<Button>kiri</Button>);

    const headingElement = screen.getByText(/kiri/i);

    expect(headingElement).toBeInTheDocument();
  });
});
