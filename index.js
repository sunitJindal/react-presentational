#!/usr/bin/env node

var fs = require('fs');
var presentationalIndexTemplate = require('./lib/templates/presentationalIndex');
var presentationalTemplate = require('./lib/templates/presentational');
var cssTemplate = require('./lib/templates/css');

var componentName = process.argv[2];

if (!componentName) {
  throw new Error('Component name is required');
}

var dir = './' + componentName;
fs.mkdirSync(dir);

var indexTemplate = presentationalIndexTemplate(componentName);

var cssTemplate = cssTemplate(componentName);

var componentTemplate = presentationalTemplate(componentName);

fs.writeFileSync(`${dir}/index.js`, indexTemplate);
fs.writeFileSync(`${dir}/${componentName}.css`, cssTemplate);
fs.writeFileSync(`${dir}/${componentName}.js`, componentTemplate);



