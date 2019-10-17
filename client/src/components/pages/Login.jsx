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
              <img
                style={{
                  width: '50px',
                }}
                alt="aih"
                src="https://attachment.outlook.live.net/owa/MSA%3AMaRvEn250%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC1hODdhLWQ5MDItMDACLTAwCgBGAAAD6jBzVcx1MUS283CpyEOo7wcAAABWMlb2ddBOjTbj1QTz38YAAAIBDAAAAVYyVvZ10E6NNuPVBPPfxgAC5IugtAAAAAESABAAdg0FtsyYoU%2BuFChPZcHJOg%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2019100701.12&isc=1&X-OWA-CANARY=dOiDF2G9_06TG7D9NTB3ypAK27_tUtcYs8U6xcnLow3q9_J9KYIY1Oega0w7iimIrcMxD4nikIc.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2MDBGOUY2NzQ2MjA3MzdFNzM0MDRFMjg3QzQ1QTgxOENCN0NFQjgiLCJ4NXQiOiJCZ0Q1OW5SaUJ6Zm5OQVRpaDhSYWdZeTN6cmciLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctNDQyMzY1LTI4MjY2MjMyMzRcIixcInB1aWRcIjpcIjE4OTk5NDYwMzQ1MTgyNzRcIixcIm9pZFwiOlwiMDAwNmJmZmQtYTg3YS1kOTAyLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1NzEzMDg1MjksImV4cCI6MTU3MTMwOTEyOSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.GvsPWkYqCGl6p6-XPxhUzJYiOKxJuNYRAwrnOmY4bdQS-0HWOkNoRnJCaMeG-zyQxljtovrTPBBWXqc8z7pUoDPgGCklCb_O2Q5_h1_p4GmwTO3BZaXGRGRb815WJ-zkrCuBvPBgtk5lf9w5bU9lpDjW4Lg2yhrSfN-oQPCcTk0CbNwj4NciS4nWLrPqEQOvARj9Qp-wdqCn25FAA8RJ5LLOt1QsQi7p4vv_y2q6ef0cdphaS9X8iq_-vHBN_Qhjk6ZO4ixui30E9R7u6x1_W6g7sj0CNriTen0UQQLKMJXMQX2dlhZ5HsNgrRe2ZjbzgoV8yERjkYMF5Im814ntYg&animation=true"
              ></img>
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
