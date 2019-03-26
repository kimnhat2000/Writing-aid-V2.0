import React from 'react'
import { Segment, Container, Header, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Responses = ({ state }) => {
  return state.map((title, index) => (
    <Segment.Group className='pointer'>
      <Header
        attached='top'
        key={index}
        icon='pencil alternate'
        as='h4'
        content={`${title.title} ${index + 1} / ${state.length}`}
      />

      <Segment>
        {title.possibleAnswers.map((answer, index) => (
          <Container key={index} attached>
            {index + 1} - {answer.option}
            {title.possibleAnswers.length - 2 >= index && (
              <Divider horizontal>Or</Divider>
            )}
          </Container>
        ))}
      </Segment>
    </Segment.Group>
  ))
}

const stateToProps = ({ responsesReducer }) => ({
  state: responsesReducer
})

export default connect(
  stateToProps,
  null
)(Responses)
