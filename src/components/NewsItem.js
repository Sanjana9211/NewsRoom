import React, { Component } from 'react';

export class NewsItem extends Component {
    
  render() {

    let {title,description,imageUrl,newsUrl,author,date}=this.props;

    return (
      <div className='my-3'>
        <div className="card" >
            <img src={imageUrl?imageUrl:"https://media.newyorker.com/photos/66c8e7d85cd1c54b30ada0a1/16:9/w_1280,c_limit/r44760illu_rdweb-site.png"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
