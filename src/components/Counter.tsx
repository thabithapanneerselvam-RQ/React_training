import { useState } from "react";

const Counter = ()=>{
    let [count, setCount] = useState<number>(0);

    const handleIncrease = (): void=>{
        setCount(count=>count+1);
    }
    const handleDecrease = (): void=>{
        setCount(count=>count-1);
    }
    const handleReset = (): void=>{
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