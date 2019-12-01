# save-run

save-run is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

save-run does not require any additional changes to your code or method of development.

## Installation
Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```bash
npm install -g nodemon
```

And save-run will be installed globally to your system path.

You can also install save-run as a development dependency:

```bash
npm install --save-dev nodemon
```

With a local installation, save-run will not be available in your system path. Instead, the local installation of save-run can be run by calling it from within an npm script (such as `npm start`) or using `npx save-run`.

# Usage

You can pass all the cli commands you would normally pass to your app:

save-run [bash command]
nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

```
// On every change restart server.
save-run node ./server.js 

// On every change run `npm test`.
saveRun npm test

// On every change run git add .
saveRun git add .
```

Any output from this script is prefixed with [save-run], otherwise all output from your application, errors included, will be echoed out as expected.
