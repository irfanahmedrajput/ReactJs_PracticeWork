import React from "react";

function HelloMessage({ name,names, age, children }){
    console.log(names);
    return (
        <>
      {/* Check if 'names' exists, if not, fallback to 'name' */}
      {names ? (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : (
        <h1>{name}</h1>
      )}
      <p>{age}</p>
      {children}
    </>
    );
}

export default HelloMessage