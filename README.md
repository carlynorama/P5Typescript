
## Steps to Create

### Setup Typescript

```zsh
## cd into project directory
which npm
brew update
npm i typescript --save-dev
npx tsc --init
## make changes to config file
touch index.html
mkdir src
mkdir build
touch src/index.ts
touch .gitignore
## Add the contents to the files
npx tsc

```

### Contents of index.js
```js
export function updateMessage() {
  const messageText = document.createTextNode(" and another thing...");
  let node = document.getElementById("message")?.appendChild(messageText)
}
```

### Contents of index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello JS</title>
    <script src="build/index.js"></script>
  </head>
  
  <body>
    <H1>hello!</H1>
    <p id="message">no message yet</p>
    <button onclick="updateMessage()">Click me</button>
  </body>
</html>
```

### Contents of .gitignore

```
.DS_Store
.vscode/
node_modules/

**/*.js
**/*.js.map
!build/index.js
```

