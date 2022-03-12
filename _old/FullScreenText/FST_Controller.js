const FST_Controller = new Component({
  name: 'FST_Controller',

  methods: {
    hideFullScreenButton() {
      document.getElementById(this.getId('fullScreen')).classList.add('hide')

      document
        .getElementById(this.getId('exitFullScreen'))
        .classList.remove('hide')
    },

    displayFullScreenButton() {
      document
        .getElementById(this.getId('exitFullScreen'))
        .classList.add('hide')

      document.getElementById(this.getId('fullScreen')).classList.remove('hide')
    },

    openFullScreen() {
      HTML.requestFullscreen()
      this.hideFullScreenButton()
    },

    exitFullScreen() {
      document.exitFullscreen()
      this.displayFullScreenButton()
    },

    getId(id) {
      return 'FST_Controller' + id
    },
  },

  html: `
	<div>
		<span>List</span>
		<span>Input</span>
		<span>Display</span>
		<button id="fullScreen" onclick="$methods.openFullScreen()">Full Screen</button>
		<button id="exitFullScreen" class="hide" onclick="$methods.exitFullScreen()">Exit Screen</button>
	</div>
	`,
})

// console.log(FST_Controller)
