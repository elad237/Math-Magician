import React from 'react';
import renderer from 'react-test-renderer';
import ButtonsBox from '../components/Home';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const tree = renderer.create(<ButtonsBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Matches DOM Snapshot', () => {
    const tree = renderer.create(<ButtonsBox handleClick="handleClick" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
