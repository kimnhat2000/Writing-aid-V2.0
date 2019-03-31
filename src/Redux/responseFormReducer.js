const formDefaultState = {
  cancelSubmitClick: false,
  openForm: false,
  showAlternative: false,
  title: '',
  alternative: '',
  content: ''
}

export const responseFormReducer = (state = formDefaultState, action) => {
  switch (action.type) {
    case 'FORM_STATE_CONTROL':
      return { ...state, ...action }
    default:
      return state
  }
}
