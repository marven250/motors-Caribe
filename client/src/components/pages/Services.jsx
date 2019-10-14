import React, { Component } from 'react'
//import api from '../../api'
import servicer from '../../services.json'
import { Link, Route, Switch } from 'react-router-dom'
import ServiceDetail from './serviceDetail'

export default class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {
      services: servicer,
    }
  }
  render() {
    let service = this.state.services
    let list = Object.keys(service)
    let serviceLister = list.map(serve => {
      return (
        <div style={{ padding: '10px', color: '#cdcfd9' }}>
          <Link
            to={'/services/' + serve}
            style={{ color: 'white', textDecoration: 'unset' }}
          >
            {serve}
          </Link>
        </div>
      )
    })
    return (
      <div>
        <h1 className="homeHeader">List Of Services</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id="servicesList">
          <div style={{ width: '40%', textAlign: 'center' }}>
            <h3>{serviceLister}</h3>
          </div>
          <div style={{ width: '40%', textAlign: 'center' }}>
            <Route
              exact
              path="/services/:stuff"
              render={props => (
                <ServiceDetail {...props} allServices={service} />
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}
