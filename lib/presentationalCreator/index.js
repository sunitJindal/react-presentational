
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
    dir =+ componentName;
    fs.mkdirSync(dir);
  }

  var indexTemplate = presentationalIndexTemplate(componentName);

  var cssTemplate = cssTemplate(componentName);

  var componentTemplate = presentationalTemplate(componentName);

  var componentTestTemplate = presentationalTestTemplate(componentName);

  fs.writeFileSync(`${dir}/index.js`, indexTemplate);
  fs.writeFileSync(`${dir}/${componentName}.css`, cssTemplate);
  fs.writeFileSync(`${dir}/${componentName}.js`, componentTemplate);
  fs.writeFileSync(`${dir}/${componentName}.spec.js`, componentTestTemplate);
}


