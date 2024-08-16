import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsRoom - Top headlines</h2>
        <div className="row my-4">
            <div className="col-md-4">
                <NewsItem title='myTitle' description='myDesc'/>
            </div>
            <div className="col-md-4">
                <NewsItem title='myTitle' description='myDesc'/>
            </div>
            <div className="col-md-4">
                <NewsItem title='myTitle' description='myDesc'/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
