import React from 'react'
import {
  Header,
  Icon,
  Container,
  Divider,
  Grid,
  Segment,
  TextArea
} from 'semantic-ui-react'
import { connect } from 'react-redux'

import MenuDropdown from './dropdown/menuDropdown'
import Responses from './responses/Responses'
import Drafts from './drafts/Drafts'
import SentResponses from './sentResponses/SentResponses'
import Statistic from './statistics/Statistics'

const MainApp = ({ mainMenuDropdown }) => {
  const style = { height: 300, overflowY: 'scroll' }
  return (
    <Container>
      <Header as='h4' icon textAlign='center'>
        <Icon name='settings' />
        CS:GO TEAM
        <Header.Subheader>
          Thousands of candles can be lighted from a single candle, and the life
          of the candle will not be shortened. Happiness never decreases by
          being shared.
        </Header.Subheader>
      </Header>
      <Divider />

      <Container>
        <Grid columns='equal'>
          <Grid.Column>
            <Container width={6}>
              <Header as='h3' attached='top'>
                <MenuDropdown />
              </Header>
              <Container style={style}>
                {mainMenuDropdown === 1 && <Responses />}
                {mainMenuDropdown === 2 && <Drafts />}
                {mainMenuDropdown === 3 && <SentResponses />}
                {mainMenuDropdown === 4 && <Statistic />}
              </Container>
            </Container>

            <Segment>
              <TextArea />
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment>
              <TextArea />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  )
}

const stateToProps = ({ mainMenuDropdown }) => ({
  mainMenuDropdown: mainMenuDropdown.value
})

export default connect(
  stateToProps,
  null
)(MainApp)
