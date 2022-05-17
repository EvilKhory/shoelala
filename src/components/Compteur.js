import { useState } from "react";

export function Compteur() {
    const [count, setCount] = useState(0);
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div className="Compteur" id="Compteur">
            <div className="buttons">
                <button className="ButtonMoins" onClick={decrease}>-</button>
                <button className="compteur" onClick={() => setCount(0)}>{count}</button>
                <button className="ButtonPlus" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}