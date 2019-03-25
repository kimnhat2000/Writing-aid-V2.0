import React from 'react'
import {
  Header,
  Icon,
  Container,
  Divider,
  Grid,
  Segment,
  TextArea,
  Dropdown
} from 'semantic-ui-react'

import MenuDropdown from './dropdown/menuDropdown'

const MainApp = () => (
  <Container>
    <Header as='h2' icon textAlign='center'>
      <Icon name='settings' />
      CS:GO TEAM
      <Header.Subheader>
        Thousands of candles can be lighted from a single candle, and the life
        of the candle will not be shortened. Happiness never decreases by being
        shared.
      </Header.Subheader>
    </Header>
    <Divider />

    <Container>
      <Grid columns='equal'>
        <Grid.Column>
          <Segment.Group column width={6}>

            <MenuDropdown/>
             <Segment>
                <TextArea />
             </Segment>


          </Segment.Group>
          <Segment>
            <TextArea/>
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

export default MainApp
