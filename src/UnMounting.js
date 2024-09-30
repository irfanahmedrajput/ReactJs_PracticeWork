import React, { Component } from 'react'
import UnMountingChildClass from './UnMountingChildClass'

export default class UnMounting extends Component {
    constructor(props) {
      super(props)
      this.state = {
         active : true
      }
    }

    changestate = () =>{
        this.setState({
            active : false
        });
    } 
    
  render() {
    return (
      <div>
        {this.state.active ? <UnMountingChildClass/> : <h1>Component Deleted...</h1>}
        <button onClick={this.changestate}>Change State</button>
      </div>
    )
  }
}
