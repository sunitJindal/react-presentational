
var fs = require('fs');
var presentationalIndexTemplate = require('../templates/presentationalIndex');
var presentationalTemplate = require('../templates/presentational');
var cssTemplate = require('../templates/css');
var presentationalTestTemplate = require('../templates/presentationalTest');

module.exports = function presentationalCreator(componentName, isFlat, customDirectory) {
  var flat = isFlat;

  if (!componentName) {
    throw new Error('Component name is required');
  }

  var dir = './';
  if (customDirectory) {
    dir = customDirectory;
  } else if (!flat) {
    dir = dir + componentName;
    fs.mkdirSync(dir);
  }

  var indexFileContent = presentationalIndexTemplate(componentName);

  var cssFileContent = cssTemplate(componentName);

  var componentFileContent = presentationalTemplate(componentName);

  var componentTestFileContent = presentationalTestTemplate(componentName);

  fs.writeFileSync(`${dir}/index.js`, indexFileContent);
  fs.writeFileSync(`${dir}/${componentName}.css`, cssFileContent);
  fs.writeFileSync(`${dir}/${componentName}.js`, componentFileContent);
  fs.writeFileSync(`${dir}/${componentName}.spec.js`, componentTestFileContent);
}


