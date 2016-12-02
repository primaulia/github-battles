import React from 'react'

import s from '../styles/index'

const Battle = ({header, isLoading, playerInfo}) => (
  <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={s.transparentBg}>
    { isLoading ? <h1>Loading...</h1> : <h1>{ header }</h1> }

    <ul>
      {
        playerInfo.map((info) => {
          return <li>{info.login}</li>
        })
      }
    </ul>
  </div>
)

Battle.propTypes = {
  // test: React.PropTypes.string.isRequired
  header: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  playerInfo: React.PropTypes.array.isRequired
}

export default Battle
