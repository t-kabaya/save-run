#!/usr/bin/env node

import { watch }  from 'chokidar'
import  { execSync } from 'child_process'
import { throttle } from 'lodash'

const argument = process.argv.slice(2).join(' ')

// Initialize watcher.
const watcher = watch('.', {
  persistent: true
});

const _run = (arg: string) => {
  if (!arg) {
    console.log('Please provide a path as an argument.')
    console.log('eg: npx save-run yarn run test')

    watcher.close()
    return
  }

  try {
    execSync(arg, { stdio: 'inherit' })
  } catch (e) {
    console.log('ERROR: restarting...')
    _run(arg)
  }
} 

const run = throttle(_run, 1000)

// run script
watcher.on('change', () => run(argument))
// .onはファイルを保存しないと実行されないので、初回実行のためにrunを実行
run(argument)

