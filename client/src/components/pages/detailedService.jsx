import React from 'react'
import servicer from '../../services.json'

export default class DetailedService extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    console.log(servicer)
  }
  showTheDetails = (e, something) => {
    console.log('///////////////', something)
  }
  render() {
    for (let i = 0; i < servicer.length; i++) {
      console.log('-------------', servicer[i])
    }
    return <div>vdvsdvfsfefewefs</div>
  }
}
