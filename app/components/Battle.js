import React, {PropTypes} from 'react'
import { Link } from 'react-router'

import s from '../styles/index'
import UserDetailsWrapper from './UserDetailsWrapper'
import UserDetails from './UserDetails'

const Battle = ({header, isLoading, playerInfo, onInitiateBattle}) => (
  <div className='jumbotron col-sm-12 text-center' style={s.transparentBg}>
    { isLoading ? <h1>Loading...</h1> : (
      <div>
        <h1>{ header }</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          {
            playerInfo.map((player, index) => {
              return (
                <UserDetailsWrapper key={index} header={`Player ${index + 1}`} >
                  <UserDetails info={player} />
                </UserDetailsWrapper>
              )
            })
          }
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={s.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={onInitiateBattle}>
              Initiate Battle
            </button>
          </div>
          <div className='col-sm-12' style={s.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-info'>
                Restart Battle
              </button>
            </Link>
          </div>
        </div>
      </div>
    )}
  </div>
)

Battle.propTypes = {
  // test: React.PropTypes.string.isRequired
  header: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

export default Battle
