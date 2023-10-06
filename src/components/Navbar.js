import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div>
        <Router>
          <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a rel="noreferrer" className="navbar-brand" href="/">NEWS App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"  href="/business">business</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/entertainment">entertainment</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/general">general</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/health">health</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/science">science</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/sports">sports</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/technology">technology</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">About</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}
                    {/* <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
          </nav>
        </Router>
      </div>
    )
  }
}

export default Navbar
