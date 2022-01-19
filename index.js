const HTML = document.querySelector('html')
const app = document.querySelector('#app')

function loadScript(module, file = 'script.js') {
  /**
   * This function takes folder title as module, loade the script.js or any
   * js file within the folder,  directly nested within the provided folder
   * name, and append it to html.
   */
  const script = document.createElement('script')
  script.setAttribute('src', `./${module}/${file}`)
  HTML.append(script)
}

loadScript('FullScreenText')
