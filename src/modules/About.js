import React from 'react';
import { increment,decrement } from './myredux/Myslicer';
import { useSelector,useDispatch } from 'react-redux';


function About() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div style={{marginTop:100}}>
      
      
      <h1>About</h1>
      
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
      
      </div>
  )
}

export default About