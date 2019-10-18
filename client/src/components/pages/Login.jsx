import React, { Component } from 'react'
import api from '../../api'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick(e) {
    e.preventDefault()
    api
      .login(this.state.username, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div>
        <h2 className="homeHeader">Login</h2>
        <div className="Login">
          <form className="former">
            {/* <span className="texter">Username:</span> */}
            <input
              placeholder="Username"
              className="enter"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
            />
            <br />
            {/* <span className="texter">Password:</span> */}
            <input
              placeholder="Password"
              className="enter"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
            />
            <br />
            <button id="but" onClick={e => this.handleClick(e)}>
              <span style={{ padding: '30px', fontSize: '1.5em' }}>Login</span>
            </button>
          </form>
          {this.state.message && (
            <div className="info info-danger">{this.state.message}</div>
          )}
        </div>
      </div>
    )
  }
}
