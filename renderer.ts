const fileInput = document.querySelector('#file-uploader');

fileInput.addEventListener('change', async (event: Event) => {
  let file = (event.target as HTMLInputElement).files[0];
  //@ts-ignore
  const filePath = await window.transform.change(file);
  if (filePath) {
    console.log('filePath:', filePath);
    const link = document.createElement('a');
    link.download = file.name.replace(/.HEIC$/i, '.jpg')
    link.href = filePath;
    link.click();
  }
})