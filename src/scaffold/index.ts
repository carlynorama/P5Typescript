// removed export from original example to keep the index.html working
// with es2020 mode. 

const world = 'world';

function hello(who: string = world): string {
  return `Hello ${who}! `;
}

function updateMessage() {
  const messageText = document.createTextNode(" and another thing...");
  let node = document.getElementById("message")?.appendChild(messageText)
}

