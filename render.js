const testDomTree = {
  id: '', // HTML Tag id
  element: 'div', // HTML Tag
  class: '',
  style: '',
  /**
   * This will not appear together with HTML tag,
   * rendered component of other dom tree
   *  */
  // component: new DomTree(testDomTree, app).component,
  // Array of same dom tree strucutre as parent
  children: [
    { id: '', element: 'input' },
    { id: '', element: 'button', innerText: 'Test Button' },
  ],
}

// function createReference(elem, reference, k) {
//   console.log(elem, reference, k)
//   elem = new Proxy(elem, {
//     get: (target, prop, receiver) => {
//       console.log(target, prop, receiver)
//     },
//   })
//   console.log(state)
// }

class Component {
  allDomElem = {}
  component

  constructor(tree) {
    this.tree = tree // JSON strucutred HTML element
    this.component = this.renderDomTree()
    // this.state = new Proxy(state, {
    //   set: () => {},
    // })
  }

  renderDomTree(tree = this.tree, parentTag = '') {
    /**
     * This function takes a json structure as input  and
     * render out dom tree element. Will return an object
     * with all the dom element identified by ID
     */
    let node, queryTag
    if (tree.component) {
      node = tree.component
    }

    if (tree.element) {
      node = document.createElement(tree.element)
      node.innerText = tree.innerText || ''
      // node.innerText = this.assignInnerText(tree.innerText)
      // tree.methods ? this.assignMethods(node, tree.methods) : null
      console.log(tree.innerText)
    }

    if (tree.props) {
    }

    tree.class ? (node.classList = tree.class) : null

    // for query HTML element function
    queryTag = parentTag + ' ' + tree.element
    queryTag = queryTag.trim()
    this.saveNodeToAllDomElem(node, queryTag, tree.id)

    if (tree.children) {
      tree.children.forEach((childNode) => {
        node.append(this.renderDomTree(childNode, queryTag))
      })
    }

    return node
  }

  assignInnerText(innerText = '') {
    if (innerText.slice(0, 6) == '$state') {
      let text = this
      innerText.split(/[\.\[\]]/).forEach((v) => {
        // k = this.assignInnerText(v)
        let k = v
        console.log(k.replace(/\'\"/g, ''), text[k.replace(/\'\"/g, '')])
        k !== '' ? (text = text[k.replace(/\'/g, '')]) : null
      })
      // return this.state
      return text
    }
    return innerText
  }

  assignMethods(node, methods) {
    console.log(node, methods)
    Object.keys(methods).forEach((method) => {
      node.addEventListener(method, methods[method])
    })
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

// loadScript('fullScreenText.js')
loadScript('input.js')
