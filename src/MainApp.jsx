import React from 'react'
import {
  Header,
  Container,
  Divider,
  Grid,
  Segment,
  TextArea
} from 'semantic-ui-react'
import { connect } from 'react-redux'

import AppHeader from './appHeader/AppHeader'
import MenuDropdown from './dropdown/menuDropdown'
import Responses from './responses/Responses'
import Drafts from './drafts/Drafts'
import SentResponses from './sentResponses/SentResponses'
import Statistic from './statistics/Statistics'

import ResponseForm from './forms/ResponseForm'

import { quotes } from './tools'

const MainApp = ({
  mainMenuDropdown,
  // responses component props
  responsesState,
  selectedTitle,
  selectedOption,
  switchMenu,
  copyOption,
  addTitle,
  // response form props
  responseFormControl,
  responseFormState
}) => {
  const { value } = mainMenuDropdown
  const style = { height: 300, overflowY: 'auto' }
  return (
    <Container>
      <AppHeader quotes={quotes} />
      <Divider />

      <Container>
        <Grid columns='equal'>
          <Grid.Column>
            <Container width={6}>
              <Header as='h3' attached='top'>
                <MenuDropdown
                  dropdownItem={mainMenuDropdown}
                  switchMenu={switchMenu}
                  openForm={status => responseFormControl(status)}
                  responseFormState={responseFormState}
                />
              </Header>
              <Container style={style}>
                {value === 1 && (
                  <Responses
                    responsesState={responsesState}
                    selectedTitle={selectedTitle}
                    selectedOption={selectedOption}
                    copyOption={copyOption}
                  />
                )}

                {value === 2 && <Drafts />}
                {value === 3 && <SentResponses />}
                {value === 4 && <Statistic />}
              </Container>
            </Container>

            <Segment>
              <TextArea />
            </Segment>
          </Grid.Column>

          <Grid.Column width={10}>
            <Segment>
              {responseFormState.openForm ? (
                <ResponseForm
                  responseFormState={responseFormState}
                  formControl={status => responseFormControl(status)}
                  responsesState={responsesState}
                  addTitle={title => addTitle(title)}
                />
              ) : (
                <textarea />
              )}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  )
}

const stateToProps = ({
  mainMenuDropdown,
  responsesReducer,
  responseFormReducer
}) => ({
  mainMenuDropdown,
  responsesState: responsesReducer,
  responseFormState: responseFormReducer
})

const dispatchToProps = dispatch => ({
  switchMenu: menu => dispatch({ type: 'MENU_CHANGE', menu }),
  // responses
  selectedTitle: titleId => dispatch({ type: 'SELECTED_TITLE', titleId }),
  selectedOption: action => dispatch({ type: 'SELECTED_OPTION', ...action }),
  copyOption: action => dispatch({ type: 'COPY_OPTION', ...action }),
  // response form control
  responseFormControl: action =>
    dispatch({ type: 'FORM_STATE_CONTROL', ...action }),
  addTitle: newTitle => dispatch({ type: 'ADD_TITLE', newTitle })
})

export default connect(
  stateToProps,
  dispatchToProps
)(MainApp)
