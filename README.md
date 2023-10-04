# save-run
Automatically run shell command when file changes in the directory are detected.

# Usage

```bash
npx save-run [bash command]
```

You can pass all the cli commands you would normally pass to your app:

save-run [bash command]

```
// On every change restart server.
npx save-run node ./server.js 

// On every change run `npm test`.
npx saveRun npm test

// On every change run git add .
npx saveRun git add .
```

Any output from this script is prefixed with [save-run], otherwise all output from your application, errors included, will be echoed out as expected.
