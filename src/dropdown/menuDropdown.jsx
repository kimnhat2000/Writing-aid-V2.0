import React from 'react'
import { Dropdown, Header, Segment, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { menuDropdownItems } from './dropdownItems'

const MenuDropdown = ({ switchMenu, text }) => {
  return (
    <Container className='pointer'>
    <Dropdown
      icon='list'
    >
      <Dropdown.Menu>
        <Dropdown.Header content='Writing add options' />
        {menuDropdownItems.map(item => (
          <Dropdown.Item key={item.key} {...item} onClick={() => { switchMenu({value: item.value, text: item.text}) }} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
    {text}
    </Container>

  )
}

const disPatchToProps = (dispatch) => ({
  switchMenu: (menu) => dispatch({type: 'MENU_CHANGE', menu})
})

const stateToProps = ({ mainMenuDropdown }) => ({
  text: mainMenuDropdown.text
})

export default connect(stateToProps, disPatchToProps)(MenuDropdown)