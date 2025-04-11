/*
useRef: allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.

*/
import { useState, useEffect, useRef } from "react"

//Ex1: Stop infinite Rendering
export default function HookRef1() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0); // Unlike useState It would prevent rerender in count update(changes), count is object{current:0}

    useEffect(() => {
        console.log(count);

        count.current = count.current + 1;  // it must run infinite cuz of no dependency but useRef solve it.
    });

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>  {/* count.current: represent previous state of inputValue */}
        </>
    );
}


