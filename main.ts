const { app, BrowserWindow } = require('electron');
const path = require('path');

if (process.platform !== 'darwin') {
  alert('This application can only run on a Mac.');
  app.quit();
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
