
const world = 'world';

function hello(who: string = world): string {
  return `Hello ${who}! `;
}

function updateMessage() {
  const messageText = document.createTextNode(" and another thing...");
  let node = document.getElementById("message")?.appendChild(messageText)
}

