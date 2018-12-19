import React from 'react';
import App from '../components/App';
import renderer from 'react-test-renderer';

describe('App Component', () => {
  it('renders App coponent correctly', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});