const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Hide default menu bar
  window.setMenuBarVisibility(false);

  // Load the React website
  const startURL = `file://${path.join(__dirname, "../website/index.html")}`;

  window.loadURL(startURL);
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
