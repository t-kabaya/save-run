#!/usr/bin/env node

const { watch } = require('chokidar')
const { execSync } = require('child_process')
const { throttle } = require('lodash')

const argument = process.argv.slice(2).join(' ')
const option = { stdio: 'inherit' }

const _run = () => execSync(argument, option)
const run = throttle(_run, 1000)

// run script
run()
watch('.').on('change', run)
