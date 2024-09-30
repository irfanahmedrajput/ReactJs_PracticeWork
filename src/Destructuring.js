import React, { Component } from 'react'

export default class Destructuring extends Component {
 constructor(){
    super();
    this.state ={
        name:"Huzaifa",
        age : 23
    }
 }
  render() {
    let {name,age} = this.state;
    return (
      <div>
        <h1>state Destructuring concept in javascript or react</h1>
        <p className='para'>{name}</p>
        <p className='para'>{age}</p>
      </div>
    )
  }
}



//Props Destructuring Class based concept
// export default class Destructuring extends Component {
//   render() {
//     const {name,age} = this.props;
//     return (
//       <div>
//         <h1>Destructuring Concept in JavaScript Class Based Component</h1>
//         <p className='para'>{name}</p>
//         <p className='para'>{age}</p>
//       </div>
//     )
//   }
// }

export  function DestructuringFunctional({name,age}){
    // let {name,age} = props;
    //this is another way to destructing props values
    return (
        <>
        <h1>Funcational Component with Destructuring Props Concept</h1>
        {/* <p className='para'>{props.name}</p>
        <p className='para'>{props.age}</p> */}
        <p className='para'>{name}</p>
        <p className='para'>{age}</p>
        </>
    );
}
