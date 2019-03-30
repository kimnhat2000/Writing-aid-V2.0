import React from "react";
import {
  Header,
  Icon,
  Container,
  Divider,
  Grid,
  Segment,
  TextArea,
} from "semantic-ui-react";
import { connect } from "react-redux";

import MenuDropdown from "./dropdown/menuDropdown";
import Responses from "./responses/Responses";
import Drafts from "./drafts/Drafts";
import SentResponses from "./sentResponses/SentResponses";
import Statistic from "./statistics/Statistics";

const MainApp = ({
  mainMenuDropdown,
  // responses component props
  responsesState,
  selectedTitle,
  selectedOption,
  switchMenu,
  copyOption
}) => {
  const { value } = mainMenuDropdown;
  const style = { height: 300, overflowY: "scroll" };
  return (
    <Container>
      <Header as="h4" icon textAlign="center">
        <Icon name="settings" />
        CS:GO TEAM
        <Header.Subheader>
          Thousands of candles can be lighted from a single candle, and the life
          of the candle will not be shortened. Happiness never decreases by
          being shared.
        </Header.Subheader>
      </Header>
      <Divider />

      <Container>
        <Grid columns="equal">
          <Grid.Column>
            <Container width={6}>
              <Header as="h3" attached="top">
                <MenuDropdown
                  text={mainMenuDropdown.text}
                  switchMenu={switchMenu}
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
              <TextArea />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  );
};

const stateToProps = ({ mainMenuDropdown, responsesReducer }) => ({
  mainMenuDropdown,
  responsesState: responsesReducer,
});

const dispatchToProps = dispatch => ({
  switchMenu: menu => dispatch({ type: "MENU_CHANGE", menu }),
  selectedTitle: titleId => dispatch({ type: "SELECTED_TITLE", titleId }),
  selectedOption: action => dispatch({ type: "SELECTED_OPTION", ...action }),
  copyOption: action => dispatch({type:'COPY_OPTION', ...action})
});

export default connect(
  stateToProps,
  dispatchToProps
)(MainApp);
