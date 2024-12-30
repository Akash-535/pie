import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import { PARAMS_CARD_LIST } from '../utils/helper';
import { useSearchParams } from 'react-router-dom';

const Hooks = () => {
    const [counter , setCounter] = useState(0);
    const [, setSearchParams] = useSearchParams();
    const handleClick = (name) => {
        setSearchParams({ name: name.toLowerCase() });
    };
        const [count, setCount] = useState(9);
    useEffect(() => {

        for (let i = 9; i >= 0; i--) {
            setTimeout(() => {
                setCount(i);
            }, (9 - i) * 1000);
        }
    }, []);
for (let i = 9; i >= 0 ;  i--) 
    {console.log(i);};
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 flex-column gap-5'>
            <h2>Count: {count}</h2>
           <div className='d-flex gap-3 text-center flex-row'>
           <button onClick={() => setCounter(counter - 1)} className='py-2 px-3 border border-danger rounded-3 bg-transparent'>Decrease</button>
            <p className='px-3'>{counter}</p>
            <button onClick={() => setCounter(counter + 1)} className='py-2 px-3 border border-danger rounded-3 bg-transparent'>Increase</button>
           </div>
           <div>
           <Counter/>
           </div>
           <div className='d-flex align-items-center gap-4 justify-content-center h-screen px-5 flex-wrap py-4'>
           {PARAMS_CARD_LIST.map((obj, i) => (
                    <div key={i} className='card py-3 px-4 d-flex flex-col justify-content-center align-items-center'>
                        <h2>{obj.heading}</h2>
                        <p className='text-center'>{obj.descripton}</p>
                        <button onClick={() => handleClick(obj.heading)} className='py-2 px-3 border rounded-3'>{obj.button}</button>
                    </div>
                ))}
        </div>
        </div>
    );
};

export default Hooks;