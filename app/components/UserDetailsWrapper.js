import React, { PropTypes } from 'react'

const UserDetailsWrapper = ({header, children}) => (
  <div className='col-sm-6 text-center'>
    <p className='lead'>{header}</p>
    { children }
  </div>
)

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}

export default UserDetailsWrapper
