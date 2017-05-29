#!/usr/bin/env node

var fs = require('fs');

var componentName = process.argv[2];

if (!componentName) {
  throw new Error('Component name is required');
}

var dir = './' + componentName;
fs.mkdirSync(dir);

var indexTemplate = `import ${componentName} from './${componentName}';

export default ${componentName};
`;

var cssTemplate = '.sample {}';

var componentTemplate = `import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './${componentName}.css';

const ${componentName} = (props) => {
  return (
    <div styleName="sample">${componentName}</div>
  );
};

${componentName}.propTypes = {
};

export default cssModules(${componentName}, styleCss, { allowMultiple: true });
`

fs.writeFileSync(`${dir}/index.js`, indexTemplate);
fs.writeFileSync(`${dir}/${componentName}.css`, cssTemplate);
fs.writeFileSync(`${dir}/${componentName}.js`, componentTemplate);



