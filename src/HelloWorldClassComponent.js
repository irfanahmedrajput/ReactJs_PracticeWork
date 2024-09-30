import React, { Component } from 'react'
import PropTypes from 'prop-types'

//you can access properties of component in class component like this ways
export default class HelloWorldClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>My name is {this.props.name}</h1>
        <h1>My age is {this.props.age}</h1>
        <p>My age is {this.props.children}</p>
      </div>
    )
  }
}


export  class HelloWorldClassComponent2 extends Component {
  render() {
    return (
      <div>
        <h1>This is Second class in same class component & this is named export example</h1>
      </div>
    )
  }
}

HelloWorldClassComponent.propTypes =
{
    name:PropTypes.string,
    age:PropTypes.number,
}