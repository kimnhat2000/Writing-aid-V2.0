import React from 'react'
import {Dropdown} from 'semantic-ui-react'

import { menuDropdownItems } from '../dropdownItems'

const MenuDropdown = () => {

  return(
      <Dropdown
        text='Add user'
        icon='add user'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Header content='People You Might Know' />
          {menuDropdownItems(item => (
            <Dropdown.Item key={item.value} {...item} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
  )
}

export default MenuDropdown