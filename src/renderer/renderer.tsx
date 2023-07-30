/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

// import { ipcRenderer } from "electron";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOMContentLoaded");
// });

createRoot(document.getElementById("root")).render(<App />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// React.createElement(App, document.getElementById("root"));

// window.onload = () => {};

// require("electron").ipcRenderer.on("getNames", (event, args) => {
//   console.log("renderer getNames");
//   console.log(args);
// });

const TestTableNames = (window as any).TestTableNames;
// const TestTableNamesData = async () => {
//   var data = await TestTableNames?.getTestTableNames();
//   console.log(data);
// };
// TestTableNamesData();
// console.log(TestTableNames?.getTestTableNames());
const preloadedContext = (window as any).preloadedTs;
const data = preloadedContext?.data;
const information = document.getElementById("info");
information.innerText = `The system version is ${preloadedContext?.system()} and the data is ${
  data?.myFlags
} \n Sqlite test table names are:\n ${TestTableNames?.getTestTableNames()}.`;
// This is the renderer process. The main process is responsible for creating the window and managing the application lifecycle.
// The renderer process is responsible for displaying the window and managing the user interface.
// The renderer process is also responsible for managing the lifecycle of the web page, including the loading of resources and
// the execution of JavaScript code. The renderer process is sandboxed, meaning it has limited access to the system.
// The renderer process can only communicate with the main process via asynchronous inter-process communication (IPC).
// The renderer process runs in a separate process from the main process.
// This means that the renderer process can be terminated without affecting the main process.
// The renderer process can also be terminated by the user, for example, by closing the window.
// The main process can create multiple renderer processes. Each renderer process has its own process object,
// but all renderer processes in the same application share the same BrowserWindow object.
// The renderer process can communicate with other renderer processes in the same application using the BrowserWindow object.
// The renderer process can communicate with the main process using the ipcRenderer module.
// The main process can communicate with the renderer process using the ipcMain module.
