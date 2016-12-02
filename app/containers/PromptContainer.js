import React from 'react'

import Prompt from '../components/Prompt'

class PromptContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }

  handleChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    var username = this.state.username

    this.setState({
      username: ''
    })

    if (this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        header: 'Battle Ground',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push(`/playerTwo/${username}`)
    }
  }

  render () {
    return (
      <Prompt
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}
        username={this.state.username}
        header={this.props.route.header}
      />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
