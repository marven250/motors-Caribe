import React, { Component } from 'react'
//import api from '../../api'
import servicer from '../../services.json'
import { Link, Route } from 'react-router-dom'
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
        <div
          style={{
            padding: '10px',
            color: '#cdcfd9',
            border: '2px solid #fffc00',
            width: '250px',
            borderBottom: 'none',
            borderTop: 'none',
          }}
        >
          <Link
            id="serve"
            to={'/services/' + serve}
            style={{
              textDecoration: 'unset',
            }}
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
          <div
            style={{
              width: '40%',
              textAlign: 'center',
              position: 'fixed',
              left: '180px',
              bottom: '270px',
            }}
          >
            <h3>{serviceLister}</h3>
          </div>
          <div style={{ width: '40%', textAlign: 'center' }}>
            <Route
              exact
              path="/services/:stuff"
              render={props => (
                <ServiceDetail
                  showDetails={this.showTheDetails}
                  {...props}
                  allServices={service}
                />
              )}
            />
          </div>
          <img
            id="handyMan2"
            src="https://attachment.outlook.live.net/owa/MSA%3AMaRvEn250%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC1hODdhLWQ5MDItMDACLTAwCgBGAAAD6jBzVcx1MUS283CpyEOo7wcAAABWMlb2ddBOjTbj1QTz38YAAAIBDAAAAVYyVvZ10E6NNuPVBPPfxgAC4oeOmgAAAAESABAAwVaGd8Nd202%2Banxwa7cUUA%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2019100701.08&isc=1&X-OWA-CANARY=JEk0v_YDr0aP7Kt_7wygHVBR1gqVUNcYdDO3I0WwQmiYY8bG3rpfkckXPtuHDiGYsZjLSunWscw.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2MDBGOUY2NzQ2MjA3MzdFNzM0MDRFMjg3QzQ1QTgxOENCN0NFQjgiLCJ4NXQiOiJCZ0Q1OW5SaUJ6Zm5OQVRpaDhSYWdZeTN6cmciLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctNDQyMzY1LTI4MjY2MjMyMzRcIixcInB1aWRcIjpcIjE4OTk5NDYwMzQ1MTgyNzRcIixcIm9pZFwiOlwiMDAwNmJmZmQtYTg3YS1kOTAyLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1NzEwNTAzNTYsImV4cCI6MTU3MTA1MDk1NiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.Q4kc5I9Pc5n5MrcwN4TQ7dFb4jyZBUJxBDSRfFDCBpI4q9-Fkwp-gQQ9M8-Zk4M1F8WKX4cydOo25K2bPw7oK6xSJatcdWr_AgVjUOetOwmvt4aADnrRztdGS9YSbFIHK2Rv0Ci3YJ8vzeK7tImfUYppLFSXDjAn6c6OJfE7TLUQ6yPiZZxGe79rf_yeAs_12j9dugOQx7UaJsLARhq5YAba-Z8iVFI8v7gI8ND2qLDySQuZljaXKf2LrFJbVkoqx6aszR_7zuE19bUsh51TgLD1H5ESC68xXBTVpJU7yTuBxFRajTg5q6IVfZjVMzD725gVg5Udh4YpZGLNTpoROA&animation=true"
          ></img>
        </div>
      </div>
    )
  }
}
