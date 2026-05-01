import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/counter/counterSlice'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
    <button onClick={()=>{
        dispatch(increment())
    }}>Increment</button>
    <h2>
      Counter Value Is {count}
    </h2>
    <button onClick={()=>{
        dispatch(decrement())
    }}>Decrement</button>
    
</>
    )
}

export default Navbar
