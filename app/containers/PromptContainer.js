import React from 'react'

import Prompt from '../components/Prompt'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: ''
    }
  },

  handleChange (e) {
    this.setState({
      username: e.target.value
    })
  },

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
        query: {
          playerOne: this.prop.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push(`/playerTwo/${username}`)
    }
  },

  render () {
    return (
      <Prompt
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        username={this.state.username}
        header={this.props.route.header}
      />
    )
  }
})
