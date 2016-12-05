import React, {PropTypes} from 'react'

import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'

class ResultsContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      scores: []
    }
  }

  componentDidMount () {
    console.log(this.props)
    githubHelpers.battle(this.props.location.state.playerInfo)
  }

  render () {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playerInfo={this.props.location.state.playerInfo}
        header='Game over!'
      />
    )
  }
}

ResultsContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ResultsContainer
