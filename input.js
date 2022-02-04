const inputComponentStateRef = {
  text: 'Test',
  number: '123',
}

const inputComponentElem = {
  element: 'div',
  children: [
    {
      element: 'h1',
      innerText: inputComponentStateRef.text,
      id: 'display',
    },
    { element: 'input', id: 'input' },
    { element: 'input', id: 'number' },
  ],
}

const inputComponent = new Component(inputComponentElem)

app.append(inputComponent.component)

const inputComponentState = new Proxy(inputComponentStateRef, {
  set: (target, props, value, receiver) => {
    target[props] = value
    inputComponent.getElemById('display').innerText = target['text']
    console.log(target, props, value, receiver)
  },
})

inputComponent.getElemById('input').addEventListener('input', (event) => {
  inputComponentState.text = inputComponent.getElemById('input').value
})

inputComponent.getElemById('number').addEventListener('input', (event) => {
  inputComponentState.number = inputComponent.getElemById('number').value
})

// inputComponent.getElemById('display'){
// 	inputComponentState.text =
// }
