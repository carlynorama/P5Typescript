"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
exports.updateMessage = updateMessage;
const world = 'world';
function hello(who = world) {
    return `Hello ${who}! `;
}
function updateMessage() {
    const messageText = document.createTextNode(" and another thing...");
    let node = document.getElementById("message")?.appendChild(messageText);
}
