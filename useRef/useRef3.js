import { useRef } from "react";


//Ex3:Here useRef Will Work As Selector In ref={}
export default function HookRef3() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}