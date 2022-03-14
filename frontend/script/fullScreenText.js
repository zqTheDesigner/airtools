console.log('fullScreenText.js Loaded')

const fullScreenTextInputElem = () =>
  document.getElementById('fullScreenTextInput')
const fullScreenTextElem = () => document.getElementById('fullScreenText')

const FST_LOCAL_STORAGE = 'fullScreenTextList'

const initFullScreenTextElem = () => {
  const container = document.createElement('div')
  container.setAttribute('id', 'fullScreenText')
  app().append(container)
}

const initFullScreenTextList = () => {
  // Empty parent element
  fullScreenTextElem().innerHTML = ''
  // Create container
  const container = document.createElement('div')
  // Create html element with required ids
  container.innerHTML = `
	<input id='fullScreenTextInput'>
	<button onclick='appendToFullScreenTextList()'>Add</button>
  <button onclick='cleanFullScreenTextList()'>Clean List</button>
	<div id="fullScreenTextList">
	</div>
	`
  // Append container
  fullScreenTextElem().append(container)
  // Call function to insert content
  updateFullScreenTextList()
}

const updateFullScreenTextList = () => {
  const fullScreenTextListElem = document.getElementById('fullScreenTextList')
  fullScreenTextListElem.innerHTML = ''
  const fullScreenTextList = renderFullScreenTextList()
  fullScreenTextListElem.append(fullScreenTextList)
}

const renderFullScreenTextList = () => {
  // Render full screen text to HTML list elements
  const container = document.createElement('ul')
  const fullScreenTextList = fetchFullScreenTextList()
  fullScreenTextList.forEach((textItem) => {
    const textItemElem = document.createElement('li')
    const text = textItem.text
    textItemElem.setAttribute('onclick', `renderFullScreenTextItem('${text}')`)
    textItemElem.innerHTML = `
    <b>${text}</b>
    <p>${textItem.practiced}</p>
    `
    container.append(textItemElem)
  })
  console.log(container)
  return container
}

const fetchFullScreenTextList = () => {
  // Get full screen text from local storage
  const localStorage = window.localStorage
  const fullScreenTextList = localStorage.getItem(FST_LOCAL_STORAGE)
  if (fullScreenTextList == null) {
    return []
  }
  return JSON.parse(fullScreenTextList)
}

const appendToFullScreenTextList = () => {
  // Save user input to local storage
  const localStorage = window.localStorage
  const fullScreenTextList = fetchFullScreenTextList()

  // Get user input and form local storage list item
  const userInput = fullScreenTextInputElem().value
  const fullScreenTextItem = {
    text: userInput,
    practiced: 0,
  }

  // Save fullScreenTextList to local storage as a string
  fullScreenTextList.push(fullScreenTextItem)
  const fullScreenTextListStr = JSON.stringify(fullScreenTextList)
  localStorage.setItem(FST_LOCAL_STORAGE, fullScreenTextListStr)
  updateFullScreenTextList()
}

const cleanFullScreenTextList = () => {
  const localStorage = window.localStorage
  localStorage.removeItem(FST_LOCAL_STORAGE)
  updateFullScreenTextList()
}

const renderFullScreenTextItem = (text) => {
  const container = document.createElement('div')
  fullScreenTextElem().innerHTML = ''
  container.innerHTML = `
  <h1>${text}</h1>
  <button onclick='initFullScreenTextList()'>Back</button>
  `
  fullScreenTextElem().append(container)
}

initFullScreenTextElem()
initFullScreenTextList()
