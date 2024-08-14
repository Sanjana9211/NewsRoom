import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  c='Sanj';
  render() {
    return (
      <div>
        Hello class based component from {this.c}
      </div>
    )
  }
}


