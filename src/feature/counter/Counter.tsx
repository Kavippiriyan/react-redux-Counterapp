import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incremetnByAmount } from './counterSlice'

const Counter = () => {

    const Count = useSelector((state: any) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setincrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0

    const resetValue = ()=>
        {
            setincrementAmount(0);
            dispatch(reset())
        }

    return (
        <>
            <p> {Count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type="text" value={incrementAmount} onChange={(e:any) =>setincrementAmount(e.target.value)} />
            </div>
            <div>
                <button onClick={()=>dispatch(incremetnByAmount(addValue))}>Add Amount</button>
                <button onClick={ resetValue}>Reset</button>
            </div>
        </>
    )
}

export default Counter