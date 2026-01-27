import { useState } from "react";

const Counter = ()=>{
    let [count, setCount] = useState(0);

    const handleIncrease = ()=>{
        setCount(count=>count+1);
    }
    const handleDecrease = ()=>{
        setCount(count=>count-1);
    }
    const handleReset = ()=>{
        setCount(0);
    }

    return(
        <div className="card">
            <h2>Counter: {count}</h2>
            <button className="countInc" onClick={handleIncrease}>Increase</button>
            <button className="countDec" onClick={handleDecrease}>Decrease</button>
            <button className="countReset" onClick={handleReset}>Reset</button>
        </div>
    ) 
    
}

export default Counter;