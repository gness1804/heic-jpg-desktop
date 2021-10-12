window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  const deps: string[] = ['chrome', 'node', 'electron']
  for (const dependency of deps) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})