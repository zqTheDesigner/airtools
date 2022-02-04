// const switchMode = function () {
//   state.fullScreenText.mode = 'dispaly'
//   console.log(state.fullScreenText.mode)
// }
const fullScreenTextState = {
  icon: { edit: 'drive_file_rename_outline', display: 'speaker_notes' },
  mode: 'edit',
}

const inputComponent = new Component({
  element: 'div',
  children: [{ element: 'input' }, { element: 'button', innerText: 'Add' }],
})

const displayComponent = new Component({
  element: 'div',
  children: [{ element: 'h1', innerText: 'Test Header' }],
})

// const fullScreenText = new Component({
//   element: 'div',
//   children: [
//     {
//       element: 'div',
//       children: [
//         {
//           element: 'span',
//           class: 'icon',
//           innerText: 'drive_file_rename_outline',
//           id: 'toggleIcon',
//         },
//         { component: inputComponent.component, id: 'input', class: 'hide' },
//         { component: displayComponent.component, id: 'display' },
//       ],
//     },
//   ],
// })

app.append(fullScreenText.component)

const toggleIcon = fullScreenText.getElemById('toggleIcon')
toggleIcon.addEventListener('click', switchMode)

// createReference(
//   state.fullScreenText,
//   fullScreenText.getElemById('toggleIcon').innerText,
//   'mode'
// )

state.fullScreenText = new Proxy(fullScreenTextState, {
  get: function (target, prop, receiver) {
    console.log(fullScreenTextState[prop])
    toggleIcon.innerText = fullScreenTextState.icon[fullScreenTextState.mode]
    fullScreenText.getElemById('input').classList.remove('hide')
    fullScreenText.getElemById('display').classList.remove('hide')
    if (fullScreenTextState.mode === 'edit') {
      fullScreenText.getElemById('display').classList.add('hide')
    } else {
      fullScreenText.getElemById('input').classList.add('hide')
    }
    return fullScreenTextState[prop]
  },
})

function switchMode() {
  // console.log(state.fullScreenText)
  if (state.fullScreenText.mode === 'edit') {
    state.fullScreenText.mode = 'display'
  } else {
    state.fullScreenText.mode = 'edit'
  }
  // toggleIcon.innerText = state.fullScreenText.icon[state.fullScreenText.mode]
}
