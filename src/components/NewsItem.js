import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {

    let {title,description,imageUrl,newsUrl}=this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageUrl?imageUrl:"https://media.newyorker.com/photos/66c8e7d85cd1c54b30ada0a1/16:9/w_1280,c_limit/r44760illu_rdweb-site.png"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
