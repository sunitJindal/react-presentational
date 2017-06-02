import template from './presentational.js';

describe('presentational template', () => {
  it('should return template string', () => {
  const expected = `import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './Name.css';

const Name = (props) => {
  return (
    <div styleName="sample">Name</div>
  );
};

Name.propTypes = {
};

export default cssModules(Name, styleCss, { allowMultiple: true });
`;

    expect(template('Name')).toBe(expected)
  })

  it('throws when template name is not passed', () => {
    expect(() => template()).toThrow();
  })
})