import React, { PropTypes } from 'react'

import s from '../styles/index'

const Prompt = ({header, onSubmit, onChange, username}) => {
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={s.transparentBg}>
      <h1>
        {header}
      </h1>
      <div className='col-sm-12'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Github Username'
              type='text'
              onChange={onChange}
              value={username}
            />
          </div>
          <div className='form-group col-sm-4 col-sm-offset-4'>
            <button
              className='btn btn-block btn-success'
              type='submit'
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default Prompt
