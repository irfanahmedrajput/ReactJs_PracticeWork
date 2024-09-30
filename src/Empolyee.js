
import React, { Component } from 'react'

export default class Empolyee extends Component {

    //without constructor you can intialize state like this
    state ={
        name : "Zeeshan",
        // name : this.props.name,
        age : 25,
        surname : "rajput"
       }

       //with constructor 
    // constructor(props){
    //     super(props);
    //    this.state ={
    //     // name : "Zeeshan"
    //     name : this.props.name,
    //     age : 25,
    //     surname : "rajput"
    //    }
    // }

    changeName(){
        this.setState ({
            // name : "Welcome to React Js World"
            name : this.state.name + 1,
            age : 25,
            surname : 'rajput shab'
        });
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.surname}</h1>

        <input type='button' value="click" onClick={()=>this.changeName()}/>
        {/* <input type='button' value="Mouse up" onMouseMove={()=>this.changeName()}/> */}
      </div>
    )
  }
}
