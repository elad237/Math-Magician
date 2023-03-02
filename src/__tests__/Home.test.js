import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Matches DOM Snapshot', () => {
    render(<Home />);
    const titleElement = screen.getByText(/Welcome to our page!/i);
    expect(titleElement).toBeInTheDocument();
  });
});
