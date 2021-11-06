const { contextBridge, ipcRenderer } = require('electron');
const execa = require('execa');

contextBridge.exposeInMainWorld('transform', {
  change: (file) => {
    return execa.command(
      `sips -s format jpeg ${file.path} --out /Users/grahamnessler/Desktop/Local-Repos/heic-jpg-desktop/test.jpg`
    );
  },
});
