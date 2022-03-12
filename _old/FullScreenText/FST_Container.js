const FST_Container = new Component({
  name: 'FST_Container',

  mounted() {
    document.getElementById(this.methods.getId('controller')).innerHTML =
      FST_Controller.html()
    document.getElementById(this.methods.getId('list')).innerHTML =
      fullScreenText.html()
  },

  methods: {
    getId(id) {
      return 'FST_Container' + id
    },
  },

  html: `
	<div id="controller">
	</div>
	<div id="list">
	</div>
	<div id="input">
	</div>
	<div id='display'>
	</div>
	`,
})
