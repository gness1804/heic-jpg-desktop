const { contextBridge, ipcRenderer } = require('electron');
const execa = require('execa');

contextBridge.exposeInMainWorld('transform', {
  change: async ({ path }): Promise<string | undefined> => {
    try {
      if (path.match(/(.)\.HEIC$/i)) {
        const outFilePath = path.replace(/.HEIC$/i, '.jpg');
        await execa.command(
          `sips -s format jpeg ${path} --out ${outFilePath}`
        );
        return outFilePath;
      } else {
        alert('File path must be of type .HEIC.');
      }
    } catch (error) {
      alert('There was a problem converting your file. Please try again.');
      console.error(error);
    }
  },
});
