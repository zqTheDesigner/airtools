const storage = window.localStorage
//

// var b = undefined
let b = { value: 'b' }

// let a = 'a'
b = 'c'

console.log(b)
//
readLocalStorageText()

function createTextListItem(text) {
  const textListItem = document.createElement('li')
  textListItem.innerText = text
  return textListItem
}

function readLocalStorageText() {
  const textListElem = document.getElementById('textList')
  textListElem.innerHTML = ''

  const textArr = storage.getItem('text')
  if (!textArr) return

  textArr
    .split('/n') // Test string splitted by '/n'
    .slice(1) // Remove the first element, which will always be empty
    .forEach((text) => {
      const textListItem = createTextListItem(text)
      textListElem.append(textListItem)
    })
}

function cleanLocalStorage(item) {
  storage.removeItem(item)
  readLocalStorageText()
}

function saveInput(elemId) {
  const input = document.getElementById(elemId)
  const storageTextItem = storage.getItem('text')
  const textArr = storageTextItem ? storageTextItem : ''

  storage.setItem('text', textArr + '/n' + input.value)
  readLocalStorageText()
  input.value = ''
}
