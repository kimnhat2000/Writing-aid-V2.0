import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

class AppHeader extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      number: Math.floor(Math.random() * this.props.quotes.length)
    }
  }
  render () {
    const { quotes } = this.props
    const randomNum = Math.floor(Math.random() * quotes.length)
    return (
      <Header
        as='h2'
        className='pointer'
        onClick={() => {
          this.setState({ number: randomNum })
        }}
      >
        <Icon name='cog' loading />
        <Header.Content>
          CS:GO TEAM
          <Header.Subheader>{quotes[this.state.number]}</Header.Subheader>
        </Header.Content>
      </Header>
    )
  }
}

export default AppHeader
