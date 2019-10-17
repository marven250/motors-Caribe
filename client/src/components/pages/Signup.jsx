import React, { Component } from 'react'
import api from '../../api'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
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
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
        <h2 className="homeHeader">Signup</h2>
        <div className="Login">
          <form className="former">
            <input
              placeholder="Username"
              className="enter"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
            />
            <br />
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
              <span style={{ padding: '30px', fontSize: '1.5em' }}>Signup</span>
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
