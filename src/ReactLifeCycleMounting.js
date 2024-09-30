import React, { Component } from 'react'

export default class ReactLifeCycleMounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Zubair Jatoi"
      }
      console.log("Mounting Example Constructor Call");
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps ");
        console.log(props);
        console.log(state);
        return null
    }

    componentDidMount(){
        console.log('you can use this method for handle api call , ajax call , DOM Intaraction');
    }
    
  render() {
      console.log("Render ");
    return (
      <div>
        <h1>We are Learing React Life Cycle Topic Mounting</h1>
        <p>{this.state.name}</p>
        <p>{this.props.city}</p>
      </div>
    )
  }
}
