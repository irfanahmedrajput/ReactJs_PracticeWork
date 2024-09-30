import React, { Component } from 'react'

export default class UnMountingChildClass extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount  called....")
    }
  render() {
    return (
      <div>
      <h1>Hey Irfan Rajput</h1>
      </div>
    )
  }
}
