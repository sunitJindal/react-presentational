#!/usr/bin/env node

var presentationalCreator = require('../lib/presentationalCreator');
var componentName = process.argv[2];
var flat = (process.argv.indexOf('--flat') > -1);

presentationalCreator(componentName, flat);


