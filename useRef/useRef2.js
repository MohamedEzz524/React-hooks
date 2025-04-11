import { useState, useEffect, useRef } from "react"


//Ex2: Get previous value
export default function HookRef2() {
    const [inputValue2, setInputValue2] = useState("");
    const previousState = useRef(""); // Unlike useState It would prevent rerender in count update(changes), count is object{current:0}

    useEffect(() => {
        previousState.current = inputValue2;  // it must run infinite cuz of no dependency but useRef solve it.
    }, [inputValue2]);

    return (
        <>
            <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}
            />
            <h1>This Input Value: {inputValue2} , And This Previous Value: {previousState.current}</h1>
        </>
    );
}