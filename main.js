const { app, BrowserWindow } = require("electron");

const electronReload = require("electron-reload");

electronReload(__dirname);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 800,
    minWidth: 700,
    frame: false,
  });

  win.loadFile("index.html");

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
