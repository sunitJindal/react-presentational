#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const presentationalCreator = require('../lib/presentationalCreator');
const componentName = argv._[0];
const flat = argv.flat;

presentationalCreator(componentName, flat);


