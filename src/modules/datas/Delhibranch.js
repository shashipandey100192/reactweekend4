import React from 'react'

function Delhibranch(props) {
    
  return (
    <div>
        <h2>Delhibranch  {props.one} {props.two}</h2>
        <select>
        {props.mydata.map((a)=>{
            return(
                <option>{a}</option>
            )
        })}
        </select>

        </div>
  )
}

export default Delhibranch