
// import React, { Component } from 'react'

// export default class ClickEventFuncationalComponent extends Component {
//     //don't use the function keyword in class component
//     Printname(){
//         alert("Irfan Rajput");
//     }

//   render() {
//     return (
//       <div>
//         <input type='button' value="click" onClick={this.Printname} />
//       </div>
//     )
//   }
// }

// import React from 'react'



// function ClickEventFuncationalComponent() {
//     // function Printname(){
//     //     alert("Irfan Rajput");
//     // }
//     const Printname = (name)=>{
//         alert("Hey "+name)
//     }

//   return (
//     <div className='App'>
//       <h1>Event Handling with Funcational Component</h1>
//       {/* <input type='button' value="click" onClick={Printname} /> */}
//       {/* Event Bending in react you can pass value like tha  */}
//       <input type='button' value="click" onClick={ () => Printname ("Irfan Rajput")} /> 
//     </div>
//   )
// }

// export default ClickEventFuncationalComponent


import React from 'react'


//get data from props this way
function ClickEventFuncationalComponent(props) {
    // function Printname(){
    //     alert("Irfan Rajput");
    // }
    const Printname = (name)=>{
        alert("Hey "+name)
    }

  return (
    <div className='App'>
      <h1>Event Handling with Funcational Component</h1>
      {/* <input type='button' value="click" onClick={Printname} /> */}
      {/* Event Bending in react you can pass value like tha  */}
      <input type='button' value="click" onClick={ () => Printname (props.name)} /> 
    </div>
  )
}

export default ClickEventFuncationalComponent
