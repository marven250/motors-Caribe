import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import About from './pages/about'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <ul className="menu">
          <li className="menu_list">
            <span className="front fas fa-home"></span>

            <NavLink to="/" exact>
              <a className="side">Home</a>
            </NavLink>
          </li>
          <li className="menu_list">
            <span className="front fas fa-info"></span>
            <NavLink to="/about" exact>
              <a className="side">About</a>
            </NavLink>
          </li>
          <li className="menu_list">
            <span className="front fas fa-briefcase"></span>
            <NavLink to="/services">
              <a className="side">Services</a>
            </NavLink>
          </li>
          <li className="menu_list">
            <span className="front fas fa-paper-plane"></span>
            <NavLink to="/add-country">
              <a className="side">Book</a>
            </NavLink>
          </li>
        </ul>
        {/* <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/countries">Services</NavLink>
          <NavLink to="/add-country">Add Services</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          <NavLink to="/secret">Funnies</NavLink> */}

        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/add-country" component={AddCountry} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" render={() => <Secret />} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}
