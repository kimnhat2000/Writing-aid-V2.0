import React from 'react'
import copy from 'copy-to-clipboard'
import {
  Segment,
  Container,
  Header,
  Divider,
  Button,
  Popup,
  Dropdown,
} from 'semantic-ui-react'

import { titleDropdown } from '../tools'

const Responses = ({
  responsesState,
  selectedTitle,
  selectedOption,
  copyOption,
  deleteTitle,
  deleteAnswer,
  confirmControl
}) => {
  const copyClick = (content, titleId, answerId) => {
    copyOption({
      selectedTitleId: titleId,
      SelectedOptionId: answerId
    })
    copy(content)
  }

  const titleDropdownItemClick = value => {
    if (value === 1) {
      console.log('addoption')
    } else if (value === 2) {
      console.log(responsesState.selectedTitleId, 'nothing')
      confirmControl({
        deleteTitleconfirmClick: !responsesState.deleteTitleconfirmClick
      })
    }
  }
  return responsesState.responsesData.map((title, index) => (
    <Segment.Group className='pointer' key={index}>
      <Segment>
        <Header as='h4'>
          <Dropdown
            icon='pencil alternate'
            onClick={() => {
              confirmControl({selectedTitleId: title.id})
            }}
          >
            <Dropdown.Menu>
              <Dropdown.Header icon='key' content='Title option' />
              <Dropdown.Divider />
              {titleDropdown.map(item => (
                <Dropdown.Item
                  key={item.key}
                  {...item}
                  onClick={event => {
                    titleDropdownItemClick(item.value)
                    event.stopPropagation()
                  }}
                />
              ))}
              {responsesState.deleteTitleconfirmClick && (
                <Dropdown.Item>
                  <Button.Group>
                    <Button onClick={() => deleteTitle()}>Okay</Button>
                    <Button.Or text='ou' />
                    <Button
                      positive
                      onClick={() =>
                        confirmControl({ deleteAnswerconfirmClick: false })
                      }
                    >
                      Nahhh
                    </Button>
                  </Button.Group>
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <span
            onClick={() => {
              selectedTitle(title.id)
            }}
          >
            {title.title} {index + 1} / {responsesState.responsesData.length}
          </span>
        </Header>
      </Segment>
      {!title.collapse && (

        <Segment>
          {title.possibleAnswers.map((answer, index) => (
            <Container key={index}>
              <div
                onClick={() =>
                  {selectedOption({
                    selectedTitleId: title.id,
                    SelectedOptionId: answer.id
                  })
                  confirmControl({deleteAnswerconfirmClick: false})}
                }
              >
                {index + 1} - {answer.option}
              </div>
              {answer.selected && (
                
                <div>
                  <Button.Group basic size='mini'>
                    <Popup
                      trigger={
                        <Button
                          icon={answer.copy ? 'check' : 'copy outline'}
                          onClick={() =>
                            copyClick(answer.option, title.id, answer.id)
                          }
                        />
                      }
                      content={answer.copy ? 'Copied' : 'Click to Copy'}
                    />
                    <Popup
                      trigger={<Button icon='edit outline' />}
                      content='Edit'
                    />
                    <Popup
                      trigger={
                        <Button
                          icon='remove'
                          onClick={() =>
                            confirmControl({
                              deleteAnswerconfirmClick: !responsesState.deleteAnswerconfirmClick
                            })
                          }
                        />
                      }
                      content='Delete'
                    />
                  </Button.Group>

                  <div>
                  {responsesState.deleteAnswerconfirmClick && (
                    <Button.Group>
                      <Button onClick={() => deleteAnswer()}>Okay</Button>
                      <Button.Or text='ou' />
                      <Button
                        positive
                        onClick={() =>
                          confirmControl({ deleteAnswerconfirmClick: false })
                        }
                      >
                        Nahhh
                      </Button>
                    </Button.Group>
                  )}
                  </div>
                </div>
              )}

              {title.possibleAnswers.length - 2 >= index && (
                <Divider horizontal>Or</Divider>
              )}
            </Container>
          ))}
        </Segment>
      )}
    </Segment.Group>
  ))
}

export default Responses
