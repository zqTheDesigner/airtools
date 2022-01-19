class FullScreenText {
  state = {
    isEditing: true,
    displayText: 'Default Text',
  }

  icons = {
    editing: 'drive_file_rename_outline',
    display: 'speaker_notes',
  }

  constructor(elem) {
    // The HTML element to hold everything
    this.elem = elem

    this.init()
  }

  init() {
    const switchBtn = document.createElement('span')
    switchBtn.setAttribute('class', 'icon cursor-pointer')
    switchBtn.innerText = this.icons.editing
    switchBtn.addEventListener('click', this.toggleDisplayState.bind(this))
    this.elem.append(switchBtn)
    this.switchBtn = switchBtn

    const content = document.createElement('div')
    this.elem.append(content)

    const inputElem = document.createElement('input')
    inputElem.addEventListener('change', this.updateDisplayText.bind(this))
    content.append(inputElem)
    this.inputElem = inputElem

    const displayElem = document.createElement('h1')
    displayElem.style = 'font-size: 100px'
    content.append(displayElem)
    this.displayElem = displayElem

    this.updateDisplayText()
    this.showInput()
  }

  toggleDisplayState() {
    /**
     * This methods will switch between input and text display
     */
    this.isEditing = !this.isEditing
    if (this.isEditing) {
      this.switchBtn.innerText = this.icons.editing
      this.showInput()
    } else {
      this.switchBtn.innerText = this.icons.display
      this.showContent()
    }
  }

  updateDisplayText() {
    const text = this.inputElem.value || 'Input Text'
    this.state.displayText = text
    this.displayElem.innerText = this.state.displayText
  }

  showInput() {
    this.displayElem.classList.add('hide')
    this.inputElem.classList.remove('hide')
  }

  showContent() {
    this.inputElem.classList.add('hide')
    this.displayElem.classList.remove('hide')
  }
}

const fullScreenTextApp = new FullScreenText(app)
