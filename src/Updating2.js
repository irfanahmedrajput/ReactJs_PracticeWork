import React, { Component } from 'react'

export default class Updating2 extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name2 : this.props.name
      }
    }

    static getDerivedStateFromProps(props,state){
        console.log(props);
        console.log(state);
        if(props.name !== state.name2){
            //short syntax or setstate or update state
            return {name2 :props.name}
        }
        return props.name
    }

    
  render() {
    return (
      <div>
        <h1>{this.state.name2}</h1>
      </div>
    )
  }
}
