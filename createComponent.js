class Component {
  constructor(options) {
    /**
     *  Name of the component, used for refer to the component object itself
     */
    this.name = options.name

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
    this.domHTML = options.html
      .replace(/id\=\"/g, `id="${options.name}`)
      .replace(/\$methods/g, `${this.name}.methods`)

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
    return this.domHTML
  }

  getElementById(id) {
    return document.getElementById(this.name + id)
  }
}
