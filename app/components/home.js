import React from 'react'
import { Link } from 'react-router'

import s from '../styles/index'

export default () => {
  return (
    <div
      className='jumbotron col-sm-12 text-center'
      style={s.transparentBg}
    >
      <h1>Github Battle</h1>
      <p className='lead'>What even is jQuery</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>
          Get Started
        </button>
      </Link>
    </div>
  )
}
