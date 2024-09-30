import React from "react";
import Person from "./Person";


let friends = ['Taha Ansari','Huzaifa','Shujjat',123,[20*50],'kashif'];
function House(){
    return (
        <Person  isMarried={false} arr={friends}/>
    );
}

export default House