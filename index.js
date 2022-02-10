// const HTML = document.querySelector('html')
// const app = document.querySelector('#app')

function loadScript(file = 'script.js') {
  /**
   * This function takes folder title as module, loade the script.js or any
   * js file within the folder,  directly nested within the provided folder
   * name, and append it to html.
   */
  // const script = `<script src=${file} async></script>`
  const script = document.createElement('script')
  script.setAttribute('src', `${file}`)
  script.setAttribute('defer', false)
  HTML.append(script)
}
