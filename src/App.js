import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {  BrowserRouter as Router,
          Routes,
          Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 6
  apikey = process.env.REACT_APP_NEWS_API2;
  
  state = {progress: 0}
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  
  render() {
    return (
      <div>
        {/* hello guyzz................. */}
        <LoadingBar color='#f11946' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)}/>
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} key="general1" />}/>
            <Route path='/business' element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country='in' category='business' key="business" />}/>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} pagesize={this.pageSize} country='in' category='entertainment' key="entertainment" />}/>
            <Route path='/general' element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country='in' category='general' key="general" />}/>
            <Route path='/health' element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country='in' category='health' key="health" />}/>
            <Route path='/science' element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country='in' category='science' key="science" />}/>
            <Route path='/sports' element={<News setProgress={this.setProgress} apikey={this.apikey} pagesize={this.pageSize} country='in' category='sports' key="sports" />}/>
            <Route path='/technology' element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={this.pageSize} country='in' category='technology' />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

