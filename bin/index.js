#!/usr/bin/env node

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'flat', type: Boolean }
];

const argv = commandLineArgs(optionDefinitions);
const presentationalCreator = require('../lib/presentationalCreator');
const componentName = argv.files[0];
const flat = argv.flat;
console.dir(argv)
presentationalCreator(componentName, flat);


