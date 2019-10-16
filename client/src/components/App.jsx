import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
//import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import About from './pages/about'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import DetailedService from './pages/detailedService'
import servicer from '../services.json'
import Booking from './pages/booking'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      services: servicer,
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
              <a href="/" className="side">
                Home
              </a>
            </NavLink>
          </li>
          <li className="menu_list">
            <span className="front fas fa-info"></span>
            <NavLink to="/about" exact>
              <a href="/about" className="side">
                About
              </a>
            </NavLink>
          </li>
          <li className="menu_list">
            <span className="front fas fa-briefcase"></span>
            <NavLink to="/services">
              <a href="/services" className="side">
                Services
              </a>
            </NavLink>
          </li>
          <li className="menu_list">
            <span className="front fas fa-paper-plane"></span>
            <NavLink to="/booking">
              <a href="/booking" className="side">
                Book
              </a>
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

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/about" exact component={About} />
                  <Route path="/" exact component={Home} />
                  <Route path="/services" component={Services} />
                  <Route path="/booking" component={Booking} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/secret" render={() => <Secret />} />
                  <Route
                    path="/:stuffer"
                    render={props => <DetailedService {...props} />}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    )
  }
}
