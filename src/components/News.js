import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
      super();
      console.log("Hello I am a constructor from News component");
      this.state={
          articles : [],
          loading : false,
          page : 1
      }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=7e85262cf67448c695a81bdc0ca1e072&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalResults : parsedData.totalResults,loading: false})
  }

   handlePrevClick=async ()=>{
    console.log("prevclick");

    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=7e85262cf67448c695a81bdc0ca1e072&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      page : this.state.page-1,
      articles:parsedData.articles,
      loading: false
    })
    
  }

   handleNextClick=async ()=>{
    console.log("nextclick");
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=7e85262cf67448c695a81bdc0ca1e072&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      page : this.state.page+1,
      articles:parsedData.articles,
      loading : false
    })
    }
    
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center'>NewsRoom - Top headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-4">
        {!this.state.loading &&this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):"    "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
            
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
