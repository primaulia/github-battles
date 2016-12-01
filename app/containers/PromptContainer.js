import React from 'react'
import transparentBg from '../styles/index'

export default React.createClass({
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
    console.log(this.state)

    var username = this.state.username

    this.setState({
      username: ''
    })
  },

  render () {
    return (
      <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
        <h1>
          { this.props.route.header }
        </h1>
        <div className='col-sm-12'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <input
                className='form-control'
                placeholder='Github Username'
                type='text'
                onChange={this.handleChange}
                value={this.state.username}
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
})
