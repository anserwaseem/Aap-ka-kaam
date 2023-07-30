// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
// import { getNames } from "../db/testmgr";
// import { getNames } from "../db/sqlite3";

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
// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("../db.db");
// contextBridge.exposeInMainWorld("TestTableNames", {
//   getTestTableNames: () => ipcRenderer.invoke("getTestTableNamesChannel"),
// });

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded from preload.ts");
});

// prints "pong sync"
console.log(ipcRenderer.sendSync("synchronous-message", "ping sync"));

// prints "pong async"
ipcRenderer.on("asynchronous-reply", (_, ...args) => console.log(...args));

ipcRenderer.send("asynchronous-message", "ping async");

ipcRenderer
  .invoke("invoke-handle-message", "ping")
  .then((reply) => console.log(reply));

// ipcRenderer
//   .invoke("getTestTableNamesChannel")
//   .then((reply) => console.log(reply));

// contextBridge.exposeInMainWorld("api", {
//   query: function (query: any) {
//     ipcRenderer.send("RequestFromView", {
//       query,
//     });
//   },
//   doneWithQuery: function (callback: (arg0: any) => void) {
//     ipcRenderer.on("DoneWithQuery", (event, args) => {
//       callback(args);
//     });
//   },
// });
