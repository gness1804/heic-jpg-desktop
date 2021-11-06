var _a = require('electron'), contextBridge = _a.contextBridge, ipcRenderer = _a.ipcRenderer;
var execa = require('execa');
contextBridge.exposeInMainWorld('transform', {
    change: function (_a) {
        var path = _a.path;
        try {
            if (path.match(/(.)\.HEIC$/i)) {
                var outFilePath = path.replace(/.HEIC$/i, '.jpg');
                return execa.command("sips -s format jpeg " + path + " --out " + outFilePath);
            }
            else {
                alert('File path must be of type .HEIC.');
            }
        }
        catch (error) {
            alert('There was a problem converting your file. Please try again.');
            console.error(error);
        }
    }
});
