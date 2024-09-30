import React, { Component } from 'react'

export default class BindingExample extends Component {
    constructor(){
        super();
        //this is the first way to bind event with this keyword
        //Performance is better on this way of binding
        // this.HandleEvent = this.HandleEvent.bind(this)
        this.state = {
            name:  "Irfan Rajput"
        }
    }
    HandleEvent(){
        this.setState({
            name: "Taha"
        });
    }
    // HandleEvent = () => {
    //     this.setState({
    //         name: "Taha"
    //     });
    // }
  render() {
    return (
      <div>
        <h1>This is Binding Events Example Class Based {this.state.name}</h1>
        {/* second way of bind this keyword to HandleEvent */}
       {/* <button className='App' onClick={this.HandleEvent.bind(this)}>Clik Button</button> */}
       {/* third way of bind events in react js */}
       {/* <button className='App' onClick={this.HandleEvent}>Clik Button</button> */}
       <button className='App' onClick={ () => this.HandleEvent()}>Clik Button</button>
      </div>
    )
  }
}



// note: if you use arrow function in react you dont need to bind this keyword it is supported by default