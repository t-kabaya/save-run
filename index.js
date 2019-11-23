#!/usr/bin/env node

const { watch } = require('chokidar')
const { execSync } = require('child_process')

watch('.').on('change', () => execSync(process.argv.slice(2).join(' '), { stdio: 'inherit' }))
