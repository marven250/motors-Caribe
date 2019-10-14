import React from 'react'
import { Link } from 'react-router-dom'

function ServiceDetail(props) {
  let someService = props.allServices[props.match.params.stuff]
  let found
  // console.log(someService)
  //let allService = () => {
  for (let i = 0; i < someService.length; i++) {
    found = Object.keys(someService[i])
    console.log(found[0])
    //return <li>{found[0]}</li>
  }
  //}

  return <div>{/* <ul>{allService}</ul> */}</div>
}

export default ServiceDetail
