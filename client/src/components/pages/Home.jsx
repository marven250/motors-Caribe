import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
// import api from '../../api'
// import Secret from './Secret'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="homeHeader">
          <h1>Caribbean Motorz</h1>
          <h3>
            Call <span style={{ color: '#60C1EE' }}>(954) 673-7154</span>
          </h3>
          <Link to="/login">
            <img
              style={{
                width: '50px',
                float: 'right',
                position: 'relative',
                bottom: '55px',
                right: '20px',
              }}
              alt="aih"
              src="https://attachment.outlook.live.net/owa/MSA%3AMaRvEn250%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC1hODdhLWQ5MDItMDACLTAwCgBGAAAD6jBzVcx1MUS283CpyEOo7wcAAABWMlb2ddBOjTbj1QTz38YAAAIBDAAAAVYyVvZ10E6NNuPVBPPfxgAC5IugtAAAAAESABAAdg0FtsyYoU%2BuFChPZcHJOg%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2019100701.12&isc=1&X-OWA-CANARY=dOiDF2G9_06TG7D9NTB3ypAK27_tUtcYs8U6xcnLow3q9_J9KYIY1Oega0w7iimIrcMxD4nikIc.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2MDBGOUY2NzQ2MjA3MzdFNzM0MDRFMjg3QzQ1QTgxOENCN0NFQjgiLCJ4NXQiOiJCZ0Q1OW5SaUJ6Zm5OQVRpaDhSYWdZeTN6cmciLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctNDQyMzY1LTI4MjY2MjMyMzRcIixcInB1aWRcIjpcIjE4OTk5NDYwMzQ1MTgyNzRcIixcIm9pZFwiOlwiMDAwNmJmZmQtYTg3YS1kOTAyLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1NzEzMDg1MjksImV4cCI6MTU3MTMwOTEyOSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.GvsPWkYqCGl6p6-XPxhUzJYiOKxJuNYRAwrnOmY4bdQS-0HWOkNoRnJCaMeG-zyQxljtovrTPBBWXqc8z7pUoDPgGCklCb_O2Q5_h1_p4GmwTO3BZaXGRGRb815WJ-zkrCuBvPBgtk5lf9w5bU9lpDjW4Lg2yhrSfN-oQPCcTk0CbNwj4NciS4nWLrPqEQOvARj9Qp-wdqCn25FAA8RJ5LLOt1QsQi7p4vv_y2q6ef0cdphaS9X8iq_-vHBN_Qhjk6ZO4ixui30E9R7u6x1_W6g7sj0CNriTen0UQQLKMJXMQX2dlhZ5HsNgrRe2ZjbzgoV8yERjkYMF5Im814ntYg&animation=true"
            ></img>
          </Link>
        </header>
        <h1 id="title">_</h1>
        <div>
          <img
            alt="woah"
            src="https://static8.depositphotos.com/1006282/922/i/950/depositphotos_9228573-stock-photo-mechanic-background.jpg"
          ></img>
          <div id="textCenter">
            <h4 class="textCenter">Skip the repair shop</h4>
            <h2 class="textCenter">
              Click
              <Link to="/services" id="here">
                here
              </Link>
              for quotes and bookings
            </h2>
            <h3 class="textCenter">
              Service at your home or office - Fair and transparent pricing - 7
              days a week
            </h3>
          </div>
        </div>
        <img
          alt="woah"
          id="handyMan"
          src="https://attachment.outlook.live.net/owa/MSA%3AMaRvEn250%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC1hODdhLWQ5MDItMDACLTAwCgBGAAAD6jBzVcx1MUS283CpyEOo7wcAAABWMlb2ddBOjTbj1QTz38YAAAIBDAAAAVYyVvZ10E6NNuPVBPPfxgAC4oeOmgAAAAESABAAwVaGd8Nd202%2Banxwa7cUUA%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2019100701.08&isc=1&X-OWA-CANARY=JEk0v_YDr0aP7Kt_7wygHVBR1gqVUNcYdDO3I0WwQmiYY8bG3rpfkckXPtuHDiGYsZjLSunWscw.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2MDBGOUY2NzQ2MjA3MzdFNzM0MDRFMjg3QzQ1QTgxOENCN0NFQjgiLCJ4NXQiOiJCZ0Q1OW5SaUJ6Zm5OQVRpaDhSYWdZeTN6cmciLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctNDQyMzY1LTI4MjY2MjMyMzRcIixcInB1aWRcIjpcIjE4OTk5NDYwMzQ1MTgyNzRcIixcIm9pZFwiOlwiMDAwNmJmZmQtYTg3YS1kOTAyLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1NzEwNTAzNTYsImV4cCI6MTU3MTA1MDk1NiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.Q4kc5I9Pc5n5MrcwN4TQ7dFb4jyZBUJxBDSRfFDCBpI4q9-Fkwp-gQQ9M8-Zk4M1F8WKX4cydOo25K2bPw7oK6xSJatcdWr_AgVjUOetOwmvt4aADnrRztdGS9YSbFIHK2Rv0Ci3YJ8vzeK7tImfUYppLFSXDjAn6c6OJfE7TLUQ6yPiZZxGe79rf_yeAs_12j9dugOQx7UaJsLARhq5YAba-Z8iVFI8v7gI8ND2qLDySQuZljaXKf2LrFJbVkoqx6aszR_7zuE19bUsh51TgLD1H5ESC68xXBTVpJU7yTuBxFRajTg5q6IVfZjVMzD725gVg5Udh4YpZGLNTpoROA&animation=true"
        ></img>
        {/* {api.isLoggedIn() && <Route path="/" render={() => <Secret />} />} */}
      </div>
    )
  }
}

// implement bookings(calendar), nodemailer for confirmation email, cloudinary to upload pictures,etc.
