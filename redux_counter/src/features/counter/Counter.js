import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, reset, addAmount } from './counterSlice';

const Counter = () => {

    const count = useSelector((state)=>state.counter.count);

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState(0);

    const amount = Number(inputValue) || 0;

    const totalReset = ()=>{
        dispatch(reset());
        setInputValue(0);
    }


  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <input
            type='text'
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
        />
        <button onClick={()=>{dispatch(addAmount(amount))}}>Add Amount</button>
        <button onClick={totalReset}>Reset</button>
    </div>
  )
}

export default Counter