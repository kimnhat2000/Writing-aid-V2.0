import React from "react";
import copy from "copy-to-clipboard";
import {
  Segment,
  Container,
  Header,
  Divider,
  Button,
  Popup,
  Dropdown,
} from "semantic-ui-react";

import { titleDropdown } from "../tools";

const Responses = ({
  responsesState,
  selectedTitle,
  selectedOption,
  copyOption,
}) => {
  const copyClick = (content, titleId, answerId) => {
    copyOption({
      selectedTitleId: titleId,
      SelectedOptionId: answerId,
    });
    copy(content);
  };
  return responsesState.responsesData.map((title, index) => (
    <Segment.Group className="pointer" key={index}>
      <Segment>
        <Header as="h4">

          <Dropdown icon="pencil alternate">
            <Dropdown.Menu>
              <Dropdown.Header icon="key" content="Title option" />
              <Dropdown.Divider />
              {titleDropdown.map(item=>(
              <Dropdown.Item
                key={item.key}
                {...item}
                onClick={()=>console.log(item.text)}
              />
              ))}
            </Dropdown.Menu>
          </Dropdown>   
                
          <span onClick={() => selectedTitle(title.id)}>
            {title.title} {index + 1} / {responsesState.responsesData.length}
          </span>

        </Header>
      </Segment>
      {!title.collapse &&
            <Segment>
            {title.possibleAnswers.map((answer, index) => (
              <Container key={index}>
                <div
                  onClick={() =>
                    selectedOption({
                      selectedTitleId: title.id,
                      SelectedOptionId: answer.id,
                    })
                  }
                >
                  {index + 1} - {answer.option}
                </div>
                {answer.selected && (
                  <div>
                    <Button.Group basic size="mini">
                      <Popup
                        trigger={
                          <Button
                            icon={answer.copy ? "check" : "copy outline"}
                            onClick={() =>
                              copyClick(answer.option, title.id, answer.id)
                            }
                          />
                        }
                        content={answer.copy ? "Copied" : "Click to Copy"}
                      />
                      <Popup
                        trigger={<Button icon="edit outline" />}
                        content="Edit"
                      />
                      <Popup trigger={<Button icon="remove" />} content="Delete" />
                    </Button.Group>
                  </div>
                )}
                {title.possibleAnswers.length - 2 >= index && (
                  <Divider horizontal>Or</Divider>
                )}
              </Container>
            ))}
          </Segment>
      }

    </Segment.Group>
  ));
};

export default Responses;
