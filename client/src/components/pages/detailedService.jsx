import React from 'react'
import servicer from '../../services.json'
import { Link } from 'react-router-dom'

export default class DetailedService extends React.Component {
  render() {
    let arr = []
    for (let key in servicer) {
      // console.log('[][][][][][][[]', servicer[key])
      // console.log(key)
      //console.log(servicer[key])
      for (let i = 0; i < servicer[key].length; i++) {
        // console.log(servicer[key])

        if (
          servicer[key][i][
            this.props.location.pathname.slice(
              1,
              this.props.location.pathname.length
            )
          ]
        ) {
          //console.log('//////////', servicer[key][i]['cost'])
          arr.push(
            servicer[key][i][
              this.props.location.pathname.slice(
                1,
                this.props.location.pathname.length
              )
            ],
            servicer[key][i]['cost']
          )
        }
        // var text = arr[0].split('?')

        // console.log(arr[0].split('?'))
        // console.log(
        //   servicer[key][i][
        //     this.props.location.pathname.slice(
        //       1,
        //       this.props.location.pathname.length
        //     )
        //   ]
        // )
      }
    }
    console.log('//////////', arr)
    var text = arr[0].split('?')
    var cost = arr[1]

    return (
      <div>
        <div
          style={{ position: 'fixed', top: '60px', right: '30px' }}
          id="serviceListing"
        >
          <h1 style={{ color: '#60c1ee', marginTop: '60px' }}>{text[0]}?</h1>
          <h3
            style={{
              width: '700px',
              color: 'white',
              position: 'relative',
              left: '250px',
              marginTop: '25px',
            }}
          >
            {text[1]}
          </h3>

          <Link id="arrow" to="/services">
            <a
              style={{
                color: 'yellow',
                fontSize: '3em',
                position: 'fixed',
                bottom: '90px',
                left: '250px',
                textDecoration: 'none',
              }}
              href="/services"
            >
              ←
            </a>
            Go Back To Services
          </Link>
          <div id="money">
            <img alt= "aih"
              style={{ width: '90px' }}
              src="https://attachment.outlook.live.net/owa/MSA%3AMaRvEn250%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC1hODdhLWQ5MDItMDACLTAwCgBGAAAD6jBzVcx1MUS283CpyEOo7wcAAABWMlb2ddBOjTbj1QTz38YAAAIBDAAAAVYyVvZ10E6NNuPVBPPfxgAC4oeO4gAAAAESABAAhTWMRdXzoEKAYT7j6ry2YA%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2019100701.10&isc=1&X-OWA-CANARY=1K91h8j3HU2xXndfFTFW6hCoPlZuUtcY75wd5deYQ-lscGn-rd-b7cXnoqZvaBJc1j4s8LNElJs.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2MDBGOUY2NzQ2MjA3MzdFNzM0MDRFMjg3QzQ1QTgxOENCN0NFQjgiLCJ4NXQiOiJCZ0Q1OW5SaUJ6Zm5OQVRpaDhSYWdZeTN6cmciLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctNDQyMzY1LTI4MjY2MjMyMzRcIixcInB1aWRcIjpcIjE4OTk5NDYwMzQ1MTgyNzRcIixcIm9pZFwiOlwiMDAwNmJmZmQtYTg3YS1kOTAyLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1NzEyNTM2NzcsImV4cCI6MTU3MTI1NDI3NywiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.l5B1m_WCdmgFv2PKLoLZAf5tncoC0rql3sCJ39XUp8HSaGjcO_DjBuw5vBxXpWN1gqf9Fg_Pm-B81TWIMm3C-CPBD2HakxTe61IchQZUFpVo7D99xFZoIhLM3WBvjtqDuJMHuohLmIoZLRegfHmQbkPoxXBawZvNbZuNpG75dKHua5zK3FFN7akXElXqfyH8JhnNv3CWNcz-7zqKXPeLgICZyyOqTQcs2e74Qmo2ChFd9RUHIGtKeL2-TE103uBrgpRZeQJzjTs4KJkpZWnPiDepaG86qsSq47dXj3R0rLIE9Z2LbdwoXqmHHFysDghiD4vdgPEAYmPqfhzTsHL9Uw&animation=true"
            ></img>
            <h4
              style={{
                color: 'white',
                fontSize: '1.8em',
                position: 'relative',
                right: '20px',
                top: '15px',
              }}
            >
              {cost}
            </h4>
          </div>
          <Link id="books" to="/booking">
            <div>Ready To Book?</div>
            <div>
              Click <span id="here">Here</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
