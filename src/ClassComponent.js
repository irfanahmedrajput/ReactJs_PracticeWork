import React from "react";
//you can export like named export if you want to export
// import React, {Component} from "react";

class ClassComponent extends React.Component
{
    render(){
        return (
            <>
            <h1>This is Class based Component</h1>
            <p>if you want to add multiple element in class based component you can use fragment or parent tag div as you like same in functional component</p>
            </>
        )
    }
}
//Named Expoert syntax
export {ClassComponent}