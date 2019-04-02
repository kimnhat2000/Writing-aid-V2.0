import React from 'react'
import uuid from 'uuid'

import { Form, Input, Button, Container, Icon } from 'semantic-ui-react'

class ResponseForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      possibleMatch: '',
      option: '',
      warning: '',
      showField: false
    }
  }

  onFormChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onFormsubmit = e => {
    const {
      cancelSubmitClick,
      newOption,
      newTitle
    } = this.props.responseFormState
    const { selectedTitleId, SelectedOptionId } = this.props.responsesState
    const { formControl, addTitle, responsesState } = this.props
    const { title, possibleMatch, option } = this.state
    e.preventDefault()
    if (cancelSubmitClick) {
      formControl({ openForm: false, cancelSubmitClick: false })
    } else if (!SelectedOptionId) {
      const titleToAdd = {
        ...newTitle,
        title,
        id: uuid(),
        possibleMatch,
        possibleAnswers: [
          { ...newOption, option, id: uuid()},
          ...newTitle.possibleAnswers
        ]
      }
      const checkDuplicate = responsesState.responsesData.map(
        item => item.title.toLowerCase()
      )
      if (checkDuplicate.includes(title.toLocaleLowerCase())) {
        this.setState({ warning: 'This title is already existed' })
        return;
      }
      addTitle(titleToAdd)
      this.setState({ title: '', option: '', possibleMatch: '', warning: '' })
    }
  }

  render () {
    const { formControl } = this.props
    const { title, possibleMatch, option, showField, warning } = this.state
    return (
      <Container>
        <Form onSubmit={this.onFormsubmit}>
      {warning && warning}
          <Form.Field
            label='Title'
            placeholder='Title...'
            name='title'
            control={Input}
            value={title}
            onChange={e => this.onFormChange(e)}
          />
          {showField ? (
            <Container>
              <Icon
                name='minus'
                onClick={() => this.setState({ showField: !showField })}
              />
              <Form.TextArea
                label='Alternative search terms'
                placeholder='Search terms...'
                style={{ height: 50, overflowY: 'auto' }}
                name='possibleMatch'
                value={possibleMatch}
                onChange={e => this.onFormChange(e)}
              />
            </Container>
          ) : (
            <Icon
              name='plus'
              onClick={() => this.setState({ showField: !showField })}
            />
          )}
          <Form.TextArea
            label='Response'
            placeholder='One way to answer...'
            style={{ height: 300, overflowY: 'auto' }}
            name='option'
            value={option}
            onChange={e => this.onFormChange(e)}
          />

          <Button.Group size='mini'>
            {title && option ? (
              <Button positive>Submit</Button>
            ) : (
              <Button disabled>Submit</Button>
            )}

            <Button.Or />

            <Button onClick={() => formControl({ cancelSubmitClick: true })}>
              Cancel
            </Button>
          </Button.Group>
        </Form>
      </Container>
    )
  }
}

export default ResponseForm
