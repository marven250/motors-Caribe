import React from 'react'

export default class Booking extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    )
    head.appendChild(script)
  }
  render() {
    return (
      <div>
        <h1 className="homeHeader">Booking</h1>
        <br></br>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/caribbean-motorz/mechanical-service"
          style={{ minWidth: '320px', height: '630px' }}
        ></div>
      </div>
    )
  }
}
