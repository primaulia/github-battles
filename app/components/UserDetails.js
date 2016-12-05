import React, {PropTypes} from 'react'

const UserDetails = ({info}) => (
  <div>
    <h2>User score</h2>
    <li className='list-group-item'>
      <img src={info.avatar_url} className='img-rounded img-responsive' />
    </li>
    { info.name &&
      <li className='list-group-item'>
        Name: {info.name}
      </li>
    }
    <li className='list-group-item'>
      Handle: {info.login}
    </li>
    { info.location && <li className='list-group-item'>
      Location: {info.location}
    </li>}
    <li className='list-group-item'>
      Followers: {info.followers}
    </li>
    <li className='list-group-item'>
      Following: {info.following}
    </li>
    <li className='list-group-item'>
      Public Repos: {info.public_repos}
    </li>
    { info.company && <li className='list-group-item'>
      Company: {info.company}
    </li>}
    { info.blog && (
      <li className='list-group-item'>
        Blog: <a href={info.blog} target='_blank'>{info.blog}</a>
      </li>
    )}
  </div>
)

UserDetails.propTypes = {
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    company: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    blog: PropTypes.string
  })
}

export default UserDetails
