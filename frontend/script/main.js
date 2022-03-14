const app = () => document.getElementById('app')
const nav = () => document.getElementById('nav')

const init = () => {
  const container = document.createElement('div')
  container.setAttribute('id', 'nav')
  container.innerHTML = `
		<button onclick='loadFullScreenTextScript()'>
			Full Screen Text
		</button>
		<hr>
	`
  app().append(container)

  if (window.location.hash == '#/fullScreenText') {
    loadFullScreenTextScript()
  }
}

const loadFullScreenTextScript = () => {
  // Load script for fullScreenText
  const jsDoc = 'script/fullScreenText.js'
  window.location.hash = '/fullScreenText'
  const existingSxript = document.querySelector(`script[src="${jsDoc}"]`)

  if (!existingSxript) {
    // If script haven't been loaded
    const script = document.createElement('script')
    script.setAttribute('src', jsDoc)
    document.head.append(script)
  } else {
    // Fall back function, if script already exist
    initFullScreenTextList()
  }
}

init()
