// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

console.log("preload.ts file loaded");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("preloadedTs", {
  system: () => process.getSystemVersion(),
  // ping: () => ipcRenderer.send("ping"),
  data: {
    myFlags: ["a", "b", "c"],
    bootTime: 1234,
  },
});


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded from preload.ts");
});

// const { ipcRenderer } = require('electron')

// // prints "pong"
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping'))

// // prints "pong"
// ipcRenderer.on('asynchronous-reply', (_, ...args) => console.log(...args))

// ipcRenderer.send('asynchronous-message', 'ping')

// ipcRenderer
//   .invoke('invoke-handle-message', 'ping')
//   .then((reply) => console.log(reply))
