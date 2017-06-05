module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './${componentName}.css';

const ${componentName} = (props) => {
  return (
    <div styleName="${componentName}">${componentName}</div>
  );
};

${componentName}.propTypes = {
};

export default cssModules(${componentName}, styleCss, { allowMultiple: true });
`
};

