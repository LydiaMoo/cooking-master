import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StarButton from '../StarButton';

describe('<StarButton />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StarButton />, div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StarButton starred={false} />, div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StarButton starred={true} />, div);
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(
      <StarButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match default snapshot', () => {
    const tree = renderer.create(
      <StarButton starred={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('should match default snapshot', () => {
    const tree = renderer.create(
      <StarButton starred={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
