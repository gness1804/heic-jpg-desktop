var _a = require('electron'), contextBridge = _a.contextBridge, ipcRenderer = _a.ipcRenderer;
var execa = require('execa');
contextBridge.exposeInMainWorld('transform', {
    change: function (file) {
        return execa.command("sips -s format jpeg " + file.path + " --out /Users/grahamnessler/Desktop/Local-Repos/heic-jpg-desktop/test.jpg");
    }
});
