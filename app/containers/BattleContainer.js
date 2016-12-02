import React from 'react'
import Battle from '../components/Battle'

class BattleContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      playerInfo: [ 'prima', 'glen' ]
    }

    console.log('getInitialState thru constructor')
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
  }

  componentDidMount () {
    console.log('componentDidMount')
    let query = this.props.location.query
    console.log(query)
    // fetch to github
  }

  render () {
    return (
      <Battle
        header={this.props.route.header}
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
      />
    )
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
}

BattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default BattleContainer
