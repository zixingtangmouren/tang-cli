#!/usr/bin/env node
const program = require('commander')
const create = require('../lib/create')

program
  .version('2.0.1')
  .command('create <name>')
  .description('create a new project')
  .action((name) => {
    create(name)
  })

program.parse()
