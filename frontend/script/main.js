const app = () => document.getElementById('app')
const nav = () => document.getElementById('nav')
// test
const init = () => {
  const container = document.createElement('div')
  container.setAttribute('id', 'nav')
  container.innerHTML = `
		<button onclick='toFullScreenTextScript()'>
			Full Screen Text
		</button>
		<hr>
	`
  app().append(container)

  if (window.location.hash == '#/fullScreenText') {
    toFullScreenTextScript()
  }
}

/**
 * Load script for fullScreenText component
 */
function toFullScreenTextScript() {
  const scriptPath = 'script/fullScreenText.js'
  window.location.hash = '/fullScreenText'
  const existingSxript = document.querySelector(`script[src="${scriptPath}"]`)

  if (!existingSxript) {
    // If script haven't been loaded
    loadScript(scriptPath)
  } else {
    // Fall back function, if script already exist
    fullScreenText.init()
  }
}

/**
 * Append a script element to document head
 * @param {string} scriptPath - Abs path to script file
 */
function loadScript(scriptPath) {
  const script = document.createElement('script')
  script.setAttribute('src', scriptPath)
  document.head.append(script)
}

init()
