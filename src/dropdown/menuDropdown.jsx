import React from "react";
import { Dropdown, Container } from "semantic-ui-react";
import {menuDropdownItems} from '../tools.js'

const MenuDropdown = ({ switchMenu, text }) => {
  return (
    <Container className="pointer">
      <Dropdown icon="list">
        <Dropdown.Menu>
          <Dropdown.Header content="Writing add options" />
          {menuDropdownItems.map(item => (
            <Dropdown.Item
              key={item.key}
              {...item}
              onClick={() => switchMenu({ value: item.value, text: item.text })}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {text}
    </Container>
  );
};

export default MenuDropdown;
