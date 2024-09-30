import React, { Component } from 'react'
import Updating2 from './Updating2'

export default class Updating1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name : "Irfan Rajput Developer"
      }
    }
    
    changeState = () => {
        this.setState({
            name : "Kashif"
        });
    }
  render() {
    return (
      <div>
      <Updating2 name={this.state.name}/>
      <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
