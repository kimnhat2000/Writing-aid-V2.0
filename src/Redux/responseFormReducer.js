
const formDefaultState = {
  cancelSubmitClick: false,
  openForm: false,
  showAlternative: false,
  newTitle: {
    title: '',
    possibleMatch: '',
    createdBy: '',
    icon: '',
    image: '',
    possibleAnswers: [],
    collapse: true,
  },
  newOption: {
    option: '',
    selected: false,
    copy: false,
    iconClicked: false
  }
}

export const responseFormReducer = (state = formDefaultState, action) => {
  switch (action.type) {
    case 'FORM_STATE_CONTROL':
      return { ...state, ...action }
    default:
      return state
  }
}
