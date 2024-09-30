import React from "react";
import PropTypes from 'prop-types';


function Person(props){
    return (
        <>
        <h1>{props.name} lives here...</h1>
        <h1>{props.isMarried.toString()} lives here...</h1>
        <h1>{String(props.isMarried)} Is Married</h1>
        {props.arr ? (
        <ul>
          {props.arr.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        ) : (
            <h1>No Record Found</h1>
        )}
        </>
    );
}
 Person.propTypes = {
    name:PropTypes.string.isRequired,
    isMarried:PropTypes.bool,
    age:PropTypes.number,
    arr:PropTypes.array,
 }
 Person.defaultProps = {
    name:'Anonymous'
 }
export default Person