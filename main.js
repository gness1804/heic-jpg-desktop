var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var createWindow = function () {
    var win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadFile('index.html');
};
app.whenReady().then(function () {
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        app.quit();
});
