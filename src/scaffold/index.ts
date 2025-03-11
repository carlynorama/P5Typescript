
const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

export function updateMessage() {
  const messageText = document.createTextNode(" and another thing...");
  let node = document.getElementById("message")?.appendChild(messageText)
}

