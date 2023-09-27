const { app, BrowserWindow, ipcMain, screen } = require("electron");
const path = require("path");
const electronReload = require("electron-reload");

electronReload(__dirname);

let win;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    maxWidth: width,
    maxHeight: height,
    width: 800,
    height: 600,
    frame: true, // change to false
    webPreferences: {
      // Expose only a few Node API functionabilities
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.on("minimize", () => {
    win.minimize();
  });

  ipcMain.on("maximize", () => {
    if (win.isMaximized()) win.unmaximize();
    else win.maximize();
  });

  ipcMain.on("close", () => {
    win.close();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
});
