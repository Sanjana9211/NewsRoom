import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "PTI",
      "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
      "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
      "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T05:43:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Bloomberg",
      "title": "Even record death toll may hide extent of India’s Covid crisis",
      "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
      "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:41:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Dipak K Dash",
      "title": "Government to provide 5 kg free food grains to poor for May & June",
      "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
      "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:23:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
      "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
      "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T03:54:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Times Of India",
      "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
      "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
      "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-22T16:20:06Z",
      "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
      "description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
      "publishedAt": "2020-04-25T03:00:09Z",
      "content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
    }
  ]
  constructor(){
      super();
      console.log("Hello I am a constructor from News component");
      this.state={
          articles : this.articles,
          loading : false
      }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsRoom - Top headlines</h2>
        
        <div className="row my-4">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title.slice(0,40)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
            
        </div>
      </div>
    )
  }
}

export default News
