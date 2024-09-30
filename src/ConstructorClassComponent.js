import React, { Component } from 'react'

export default class ConstructorClassComponent extends Component {
    constructor(props){
        super(props);
        console.log("this is constructor in class based component example and my name is "+ this.props.name);
     
    }
  render() {
    return (
      <div>
           <h1>This is test name : {this.props.name}</h1>
      </div>
    )
  }
}
