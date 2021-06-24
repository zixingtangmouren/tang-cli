#!/usr/bin/env node
const program = require('commander')
const create = require('../lib/create')

program
  .version('2.2.0')
  .command('create <name>')
  .description('create a new project')
  .action((name) => {
    create(name)
  })

program.parse()
