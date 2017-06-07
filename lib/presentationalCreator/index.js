
var fs = require('fs');
var presentationalIndexTemplate = require('../templates/presentationalIndex');
var presentationalTemplate = require('../templates/presentational');
var cssTemplate = require('../templates/css');
var presentationalTestTemplate = require('../templates/presentationalTest');

module.exports = function presentationalCreator(componentName, isFlat) {
  var flat = isFlat;

  if (!componentName) {
    throw new Error('Component name is required');
  }

  var dir = './';
  if (!flat) {
    dir = dir + componentName;
    fs.mkdirSync(dir);
  }

  var indexFileTemplate = presentationalIndexTemplate(componentName);

  var cssFileTemplate = cssTemplate(componentName);

  var componentFileTemplate = presentationalTemplate(componentName);

  var componentTestFileTemplate = presentationalTestTemplate(componentName);

  fs.writeFileSync(`${dir}/index.js`, indexFileTemplate);
  fs.writeFileSync(`${dir}/${componentName}.css`, cssFileTemplate);
  fs.writeFileSync(`${dir}/${componentName}.js`, componentFileTemplate);
  fs.writeFileSync(`${dir}/${componentName}.spec.js`, componentTestFileTemplate);
}


