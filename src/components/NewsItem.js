import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
//   static propTypes = {

//   }

  render() {
      let {title,description,urlToImage,newsurl,author,time, source} = this.props;
    return (
      <div>
        <div className="card my-3">
            <div style={{display: 'flex', right: '0', position: 'absolute'}}>
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img src={urlToImage?urlToImage:'https://cdn.ndtv.com/common/images/ogndtv.png'}style={{height: '233px'}} className="card-img-top" alt="NOT FOUND"/>
                <div className="card-body">
                    <h5 className="card-title">{title?title.slice(0,45)+"...":""}</h5>
                    <p className="card-text">{description?description.slice(0,60)+"...":""}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(time).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
