import React, { Fragment } from "react";
import "./style.css";


function Myhome()
{
    return "hello sumit kumar singh";
}

export default Myhome


export function Myhome1()
{
    return "this is my name export function";
}

export function Myhome2()
{
    // return <h1>this is html element</h1>

    // return <div><h1>this is html element</h1> <h2>heading two</h2></div>
    
    // return( 
    // <>
    //      <h1>this is html element</h1>
    //      <h2>heading two</h2>
    // </>
    // )

    return( 
        <Fragment>
             <h1>this is html element</h1>
             <h2 className="first">heading two</h2>
        </Fragment>
        )
}

