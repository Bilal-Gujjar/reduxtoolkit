import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,increateByAmount } from '../store/counterSlice';


function Counter() {
    //const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        console.log(state);
        return state.counter.count
    });
 
    return (
        <div >
           <div>Counter {counter}</div>
           <div>
               <button  onClick = {()=>{
                  // setCounter(counter+1) 
                  // dispatch({type:"Increment"});
                  dispatch(increment());
               }}>Increment</button>
               <br/>
               <button onClick = {()=>{
                  // setCounter(counter- 1)
                   dispatch(decrement());
               }}>Decrement</button>
           </div>
            
           <div>
               <input type = "text" onChange={(e)=>{
                   setValue(e.target.value);
                  // setCounter(counter+e.target.value)
               }}/>
               <br/>
               <button onClick = {()=>{
                   //setCounter(counter+Number(value))
                   //dispatch ({type:"By number munipulation",payload: Number(value)})
                   dispatch(increateByAmount(Number(value)))
               }}>By number munipulation </button>
           </div>
        </div>
    )
}

export default Counter;






