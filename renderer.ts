const fileInput = document.querySelector('#file-uploader');

fileInput.addEventListener('change', async (event: Event) => {
  const file = (event.target as HTMLInputElement).files[0];
  const filePath = await (window as any).transform.change(file);
  if (filePath) {
    // create and activate download link
    const link = document.createElement('a');
    link.download = file.name.replace(/.HEIC$/i, '.jpg')
    link.href = filePath;
    link.click();
    // add file name to app display
    const { name: fileName } = file;
    document.querySelector('.file-name').textContent = `Your file: ${fileName}`;
  }
})