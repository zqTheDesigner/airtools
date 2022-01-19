const testDomTree = {
  id: '', // HTML Tag id
  tag: 'div', // HTML Tag
  class: '',
  style: '',
  /**
   * This will not appear together with HTML tag,
   * rendered component of other dom tree
   *  */
  // component: new DomTree(testDomTree, app).component,
  // Array of same dom tree strucutre as parent
  children: [
    { id: '', tag: 'input' },
    { id: '', tag: 'button', innerText: 'Test Button' },
  ],
}

class DomTree {
  allDomElem = {}
  component

  constructor(tree) {
    this.tree = tree // JSON strucutred HTML element
    // this.parentNode = parentNode // HTML element

    // parentNode.append(this.renderDomTree())
    this.component = this.renderDomTree()
  }

  renderDomTree(tree = this.tree, parentTag = '') {
    /**
     * This function takes a json structure as input  and
     * render out dom tree element. Will return an object
     * with all the dom element identified by ID
     */
    const node = document.createElement(tree.tag)
    node.innerText = tree.innerText || ''

    // for query HTML element function
    let queryTag = parentTag + ' ' + tree.tag
    queryTag = queryTag.trim()
    this.saveNodeToAllDomElem(node, queryTag, tree.id)

    if (tree.children) {
      tree.children.forEach((childNode) => {
        node.append(this.renderDomTree(childNode, queryTag))
      })
    }
    return node
  }

  saveNodeToAllDomElem(node, queryTag, id = '') {
    if (id !== '') {
      this.allDomElem[id] = node
    }
    this.allDomElem[queryTag] = node
  }

  getElemById(id) {
    return this.allDomElem[id]
  }

  getElemByTag(tag) {
    console.log(this.allDomElem)
    return this.allDomElem[tag]
  }
}

const inputComponent = new DomTree(testDomTree)
app.append(inputComponent.component)

inputComponent.getElemByTag('div button').innerText = 'test'
