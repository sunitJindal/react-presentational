module.exports = function(componentName) {
  return `import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ${componentName} from './${componentName}';

describe('${componentName} test', () => {
  it('should render component', () => {
    const wrapper = shallow(<${componentName} />);
    expect(wrapper.find('.${componentName}').length).toBe(1);
  });
});
`
}