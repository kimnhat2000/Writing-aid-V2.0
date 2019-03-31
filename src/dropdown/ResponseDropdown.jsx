import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const ResponseDropdown = ({ title, dropdown, icon, openForm, responseFormState }) => {

  const itemClick = (item) => {
    if(item.value===1){
      openForm({openForm: !responseFormState.openForm})
    }else if(item.value===2){
      console.log(item.value)
    }else{
      console.log(item.value)
    }
  }

  return(
  <Dropdown text={title} icon={icon} floating labeled button className='icon'>
    <Dropdown.Menu>
      <Input icon='search' iconPosition='left' className='search' />
      <Dropdown.Divider />
      {dropdown.map(item => (
        <Dropdown.Item key={item.key} {...item} onClick={()=>itemClick(item)}/>
      ))}
    </Dropdown.Menu>
  </Dropdown>
)}

export default ResponseDropdown
