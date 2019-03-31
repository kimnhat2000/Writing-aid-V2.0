import React from 'react'
import { Dropdown, Container } from 'semantic-ui-react'
import { menuDropdownItems, responsesDropdown } from '../tools.js'

import ResponseDropdown from './ResponseDropdown'

const MenuDropdown = ({ switchMenu, dropdownItem, openForm, responseFormState }) => {
  return (
    <Container className='pointer'>
      <Dropdown icon='list'>
        <Dropdown.Menu>
          <Dropdown.Header content='Writing add options' />
          {menuDropdownItems.map(item => (
            <Dropdown.Item
              key={item.key}
              {...item}
              onClick={() => switchMenu({ value: item.value, text: item.text })}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {dropdownItem.value === 1 && (
        <ResponseDropdown
          title={dropdownItem.text}
          dropdown={responsesDropdown}
          icon='send'
          openForm={openForm}
          responseFormState={responseFormState}
        />
      )}
    </Container>
  )
}

export default MenuDropdown
