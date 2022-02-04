class Component {
  constructor(options) {
    /**
     *  Name of the component, used for refer to the component object itself
     */
    this.component = options.name

    /**
     * Methods contains all the functions, will be fully exposed for dom to use
     * Since this will be a light weight framework, will not consider private
     * methods
     */
    this.methods = options.methods

    /**
     * First replace to create name space IDs
     * Second replace to call the methods within this class
     */
    this.domElement = options.element
      .replace(/id\=\"/g, `id="${options.name}`)
      .replace(/\$methods/g, `${this.component}.methods`)

    /**
     * Currently this function have to be called manually, after the
     * element beend injected to html dom
     */
    this.mounted = options.mounted
  }

  /**
   * Expose all the methods for dom to call
   * all the methods in options constructure object
   * will be exposed to dom
   */
  methods() {
    return this.methods
  }

  /**
   * Returns html dom element
   */
  html() {
    return this.domElement
  }
}

const fullScreenText = new Component({
  /**
   * Required, name have to be same as the name of class instance,
   * this name will be used to call the functions with in the class
   * instance
   */
  name: 'fullScreenText',

  /**
   * All functions will be sotred here
   */
  methods: {
    data: {
      // Data can be accessed via this
      longTextKey: 'longTextKey',
    },

    input() {
      const text = document.getElementById(this.getId('input'))
      if (text.value) this.saveToLocalStorage(text.value)
      text.value = '' // Reset input value
    },

    saveToLocalStorage(content) {
      const originalContent = this.getLocalStorageItem()
      const newContent = originalContent
      newContent.push(content)
      console.log(newContent)
      this.setLocalStorageItem(newContent)
      this.loadTextFromLocalStorage()
    },

    getId(id) {
      return 'fullScreenText' + id
    },

    getLocalStorageItem() {
      const item = window.localStorage.getItem(this.data.longTextKey)
      if (!item) {
        return []
      }
      try {
        return JSON.parse(item)
      } catch (e) {
        return [item]
      }
    },

    setLocalStorageItem(item) {
      const localStorage = window.localStorage
      const strItem = JSON.stringify(item)
      localStorage.setItem(this.data.longTextKey, strItem)
    },

    clearLocalStorage() {
      window.localStorage.removeItem(this.data.longTextKey)
      this.loadTextFromLocalStorage()
    },

    loadTextFromLocalStorage() {
      const container = document.getElementById(this.getId('textList'))
      const textList = this.getLocalStorageItem()
      container.innerHTML = ''
      textList.forEach((text) => {
        const li = document.createElement('li')
        li.innerText = text
        li.addEventListener('click', () => {
          document.getElementById('app').innerHTML = `<h1>${text}</h1>`
        })
        container.appendChild(li)
      })
    },
  },

  mounted() {
    const inputSubmit = document.getElementById(this.methods.getId('inputForm'))
    inputSubmit.addEventListener('submit', (e) => {
      e.preventDefault()
    })
    this.methods.loadTextFromLocalStorage()
  },

  element: `
		<div>
			<div id="inputContainer">
				<form id="inputForm">
				<input type="text" id="input"/>
				<button onclick="$methods.input()">
					<span class="material-icon">control_point</span>
				</button>
				</form>

				<button onclick="$methods.clearLocalStorage()">Clear</button>

				<ul id="textList"></ul>
			</div>
			<div id="display"></div>
		</div>
		`,
})

document.getElementById('app').innerHTML = fullScreenText.html()
fullScreenText.mounted() // Manually call the moutned functions
