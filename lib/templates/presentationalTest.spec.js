import template from './presentationalTest';

describe('test case template for presentational', () => {
  it('should render the component', () => {
    const expected = `import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Name from './Name';

describe('Name test', () => {
  it('should render component', () => {
    const wrapper = shallow(<Name />);
    expect(wrapper.find('.Name').length).toBe(1);
  });
});
`;
    expect(template('Name')).toBe(expected);
  })
})