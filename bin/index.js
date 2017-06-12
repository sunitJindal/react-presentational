#!/usr/bin/env node

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'flat', type: Boolean },
  { name: 'name', alias: 'n', type: String}
];

const argv = commandLineArgs(optionDefinitions, { partial: true });
console.dir(argv)

const presentationalCreator = require('../lib/presentationalCreator');
const componentName = argv.name;
const flat = argv.flat;
presentationalCreator(componentName, flat);


