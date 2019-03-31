import React from 'react'
import uuid from 'uuid'

import { Form, Input, Button } from 'semantic-ui-react'

const ResponseForm = ({ formControl, responseFormState, responsesState, addTitle }) => {
  const { SelectedOptionId } = responsesState
  const {title, content, alternative} = responseFormState

  const onFormSubmit = e => {
    e.preventDefault()
    if (responseFormState.cancelSubmitClick) {
      formControl({ openForm: false, cancelSubmitClick: false })
    } else if (!SelectedOptionId) {
      const answer = {...option, option: content}
      const newTitle = {...emptyTitle, title, possibleMatch: alternative, possibleAnswers: [...emptyTitle.possibleAnswers, answer]}
      addTitle(newTitle)
    } 
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Field
        label='Title'
        placeholder='Title...'
        control={Input}
        value={title}
        onChange={e => formControl({ title: e.target.value })}
      />

      <Form.TextArea
        label='Alternative search terms'
        placeholder='Search terms...'
        style={{ height: 50, overflowY: 'auto' }}
        value={alternative}
        onChange={e => formControl({ alternative: e.target.value })}
      />

      <Form.TextArea
        label='Response'
        placeholder='One way to answer...'
        style={{ height: 300, overflowY: 'auto' }}
        value={content}
        onChange={e => formControl({ content: e.target.value })}
      />

      <Button.Group size='mini'>
        {title && content ? (
          <Button positive>Submit</Button>
        ) : (
          <Button disabled>Submit</Button>
        )}
        <Button.Or />
        <Button
          onClick={() =>
            formControl({
              cancelSubmitClick: !responseFormState.cancelSubmitClick
            })
          }
        >
          Cancel
        </Button>
      </Button.Group>
    </Form>
  )
}

export default ResponseForm

const emptyTitle = {
  title: '',
  possibleMatch: '',
  createdBy: '',
  icon: '',
  image: '',
  possibleAnswers: [
    
  ],
  collapse: false,
  id: uuid()
}
const option = {
  option: '',
  id: uuid(),
  selected: false,
  copy: false,
  iconClicked: false
}