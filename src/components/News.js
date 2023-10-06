import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    static defaultProps = {
        country : 'in',
        category : 'general',
        pagesize:8
    }

    static propTypes = {
        country : PropTypes.string,
        category : PropTypes.string,
        pagesize: PropTypes.number
    }

    capitalise = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalise(this.props.category)} - NEWS`
    }

    update = async (page) =>{
        console.log(page)
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apikey}&page=${page}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true});
        let response = await fetch(url);
        let data = await response.json();
        this.setState({articles: data.articles,
                        page: page,
                        totalResults: data.totalResults,
                        loading: false})
        // console.log(data)
    }
                    
    async componentDidMount()
    {
        // console.log(this.state.page)
        // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=cc7d1c00840d417ea5e582d0eff4ddbc&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        // this.setState({loading: true});
        // let response = await fetch(url);
        // let data = await response.json();
        // this.setState({articles: data.articles,
        //                 totalResults: data.totalResults,
        //                 loading: false})
        // console.log(data)
        this.props.setProgress(0)
        this.update(this.state.page)
        this.props.setProgress(100)
    }
    
    handelnextpage = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=cc7d1c00840d417ea5e582d0eff4ddbc&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        // this.setState({loading: true});
        // let response = await fetch(url);
        // let data = await response.json();
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: data.articles,
        //     loading: false
        // })
        this.update(this.state.page + 1);
    }

    handelprevpage = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=cc7d1c00840d417ea5e582d0eff4ddbc&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        // this.setState({loading: true});
        // let response = await fetch(url);
        // let data = await response.json();
        // this.setState({
        //         page: this.state.page - 1,
        //         articles: data.articles,
        //         loading: false
        //     })
        this.update(this.state.page - 1);
    }

    fetchMoreData = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data)
        this.setState({page: this.state.page + 1,articles: this.state.articles.concat(data.articles),totalResults: data.totalResults})
        // console.log('totalResults ' + this.state.totalResults)
        // console.log(this.state.articles.length)
    }

  render() {
    return (
        <div>
            <h1 id='heading' className='text-center' style={{margin: '35px 0', marginTop: '90px'}}>{!this.state.articles ? 'API EXAUSTED' : `Top ${this.capitalise(this.props.category)} News`}</h1>
                {this.state.loading && <Spinner/>}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner/>}
                style={{overflowY: 'hidden'}}
            >
                <div className="container">
                    <div className="row">
                        {this.state.articles && this.state.articles.map((elements) => {
                            return <div key={elements.url} className="col-md-4">
                                        <NewsItem title = {elements.title} description = {elements.description} urlToImage={elements.urlToImage} newsurl={elements.url} author={elements.author} time={elements.publishedAt} source={elements.source.name}/>
                                    </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container my-3 d-flex justify-content-around">
                <button disabled={this.state.page <= 1} type="button" onClick={this.handelprevpage} className="btn btn-dark">&larr; Prev</button>
                <button disabled={Math.ceil(this.state.totalResults/this.props.pagesize) < (this.state.page + 1)} type="button" onClick={this.handelnextpage} className="btn btn-dark">Next &rarr;</button>
            </div> */}
        </div>
    )
  }
}

export default News
