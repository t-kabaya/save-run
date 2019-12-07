#!/usr/bin/env node

const { watch } = require('chokidar')
const { execSync } = require('child_process')
const { throttle } = require('lodash')

const saveRun = () => execSync(process.argv.slice(2).join(' '), { stdio: 'inherit' })

const throttle_saveRun = throttle(saveRun, 1000)

watch('.').on('change', saveRun)
