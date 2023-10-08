#!/usr/bin/env node

import { watch }  from 'chokidar'
import  { execSync } from 'child_process'
import { throttle } from 'lodash'

const argument = process.argv.slice(2).join(' ')

const _run = () => execSync(argument, { stdio: 'inherit' })
const run = throttle(_run, 1000)

// run script
run()
watch('.').on('change', run)
