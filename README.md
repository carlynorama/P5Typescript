
## Steps to Create

See other project


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

### Add scripts

Change `package.json` to have the following block

```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "tsc": "tsc",
        "tsc:w": "tsc --watch",
        "http-server": "npx http-server -o"
    },
```

These scripts facilitate testing, running typescript, launching a server, etc. 

```
npm run http-server
```

### Add p5js

Uses the NPM module for the types see examples:

https://www.npmjs.com/package/p5?activeTab=versions

(note there is also https://www.npmjs.com/package/p5-typescript?activeTab=readme)

```zsh
npm install -D p5 @types/p5
```

This will install the types into the dev dependencies. One can then add an explicit dependency to a copy of p5.js on a server for the sketch to use. 

To make it easy to copy/paste between the web editor and the local project, add a `global.d.ts` to the src folder or other location and add to included in the `tsconfig.json` 

```
// This file will add both p5 instanced and global intellisence
// https://github.com/Gaweph/p5-typescript-starter/blob/master/global.d.ts 
import * as p5Global from 'p5/global' 
import module = require('p5');
export = module;
export as namespace p5;
```

My src folder now looks like 

```
src
  |_ global
    |_ global.d.ts
  |_ scaffold
    |_ index.ts
  |_ scaffold
    |_ index.ts
  |_ sketch
    |_ sketch.ts
```

Where `sketch.ts` contains:

```js
function setup() {  
    createCanvas(400, 400);
    console.log("hello");
    
    stroke(0);
    noFill();
    colorMode(HSB);
  }
  
function draw() {
    background(0, 0, 80);
    ellipse(50, 50, 50, 50);
    noLoop();
}
```

`index.html` now looks like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello JS</title>
    <!-- as served in web editor 2025 Mar 11 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>
    <script src="build/scaffold/index.js"></script>
    <script src="build/sketch/sketch.js"></script>
  </head>
  
  <body>
    <H1>hello!</H1>
    <p id="message">no message yet</p>
    <button onclick="updateMessage()">Click me</button>
  </body>
</html>

```

Since I want to have archival version of these sketches, i went to the github repository and downloaded the release files. 

https://github.com/processing/p5.js/releases/tag/v1.11.3

and updated the html header to

```html
<script src="p5js/p5.min.js"></script>
```

### Clean up HTML

Split the sketch into a separate HTML. Current state of project with some css. 




