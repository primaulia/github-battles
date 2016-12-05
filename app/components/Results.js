import React, {PropTypes} from 'react'

import s from '../styles/index'
import UserDetailsWrapper from '../components/UserDetailsWrapper'
import UserDetails from '../components/UserDetails'

const Results = ({isLoading, scores, playerInfo, header}) => (
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

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playerInfo: PropTypes.array
}

export default Results
