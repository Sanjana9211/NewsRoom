import React, { Component } from 'react'
import loading from './126.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading spin" />
      </div>
    )
  }
}

export default Spinner
