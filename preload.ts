const { contextBridge, ipcRenderer } = require('electron');
const  { promises } = require('fs');
const convert = require('heic-convert');

contextBridge.exposeInMainWorld('transform', {
  change: async ({ path }): Promise<string | undefined> => {
    try {
      if (path.match(/(.)\.HEIC$/i)) {
        const outFilePath = path.replace(/.HEIC$/i, '.jpg');
        const inputBuffer = await promises.readFile(path);
        const outputBuffer = await convert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 1
        });
        await promises.writeFile(outFilePath, outputBuffer);
        return outFilePath;
      } else {
        // TODO: convert to toast
        alert('File path must be of type .HEIC.');
      }
    } catch (error) {
      alert('There was a problem converting your file. Please try again.');
      console.error(error);
    }
  },
});
