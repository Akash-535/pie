import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count , setCount] = useState(0)

    useEffect(() => {
       setTimeout(() => {
              setCount(count + 1 === 101 ? 100 :  count + 1)
       } , 1000)
    }, [count])
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <p className='text-center use-effect-text fw-bold text-danger p-5 border border-danger rounded-3'>{count}</p>
    </div>
  )
}

export default Counter
