const fileInput = document.querySelector('#file-uploader');

fileInput.addEventListener('change', async (event: Event) => {
  let file = (event.target as HTMLInputElement).files[0];
  //@ts-ignore
  await window.transform.change(file);
})