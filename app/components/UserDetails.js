import React, {PropTypes} from 'react'

const UserDetails = ({info}) => (
  <div>
    <h2>User score</h2>
    <li className='list-group-item'>
      <img src={info.avatar_url} className='img-rounded img-responsive' />
    </li>
    <li className='list-group-item'>
      Username: {info.login}
    </li>
    <li className='list-group-item'>
      Followers: {info.followers}
    </li>
    <li className='list-group-item'>
      Following: {info.following}
    </li>
    {/* <li className='list-group-item'>
      Public Repos: {info.public_repos}
    </li> */}
  </div>
)

UserDetails.propTypes = {
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
    // public_repos: PropTypes.string.isRequired
  })
}

export default UserDetails
