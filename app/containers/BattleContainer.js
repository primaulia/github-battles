import React from 'react'

import Battle from '../components/Battle'
import githubHelpers from '../utils/githubHelpers'

class BattleContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      playerInfo: []
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
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
                 .then((players) => {
                   this.setState({
                     isLoading: false,
                     playerInfo: players
                   })
                 })
  }

  handleInitiateBattle () {
    this.context.router.push({
      pathname: '/results',
      header: 'Fight!',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  }

  render () {
    return (
      <Battle
        header={this.props.route.header}
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
        onInitiateBattle={this.handleInitiateBattle.bind(this)}
      />
    )
  }
}

BattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default BattleContainer
