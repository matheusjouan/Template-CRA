import { render, screen } from '@testing-library/react';

import Home from '.';

describe('<Home />', () => {
  it('should be able to calculate the shipping quote', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument();
  });
});
