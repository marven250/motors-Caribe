import React from 'react'
import { Link } from 'react-router-dom'

function ServiceDetail(props) {
  let someService = props.allServices[props.match.params.stuff]
  let found
  let arr = []
  for (let i = 0; i < someService.length; i++) {
    found = Object.keys(someService[i])
    arr.push(
      <div
        style={{
          padding: '10px',
          border: '1px solid white',
          margin: '5px',
          backgroundColor: '#cdcfd9',
          borderRadius: '10px',
          ':hover': { backgroundColor: '#60c1ee' },
        }}
        onClick={e => props.showDetails(e, someService[i])}
      >
        <Link
          id="details"
          to={'/' + found[0]}
          style={{ color: 'white', textDecoration: 'unset', fontSize: '1.2em' }}
        >
          {found[0]}
        </Link>
      </div>
    )
  }
  // let title = document.getElementById('heads')
  // console.log('//////////////', title)
  // setInterval(function() {
  //   console.log(title)
  //   var letters = '0123456789ABCDEF'
  //   var colors = '#'
  //   for (var i = 0; i < 6; i++) {
  //     colors += letters[Math.floor(Math.random() * 16)]
  //   }
  //   title.tyle.color = { colors }
  // }, 2000)

  //}

  return (
    <div>
      <h1 id="heads" style={{ color: '#60c1ee', marginBottom: '30px' }}>
        {props.match.params.stuff}
      </h1>
      {arr}
    </div>
  )
}

export default ServiceDetail
