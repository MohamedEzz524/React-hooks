import { useReducer } from "react"
import "./style.css"

// This for simplifying only
const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

function reducer(state, action) { // action would be taken from "dispatch"
    switch (action.type) { // better use switch in complexity state 
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}
export default function UseReducer1() {
    //state > count value , dispatch > it gives "func what we call" in order to "update our state" & "send to action"
    const [state, dispatch] = useReducer(reducer, { count: 0 }) //may write 0 instead{count:0}, but usually we gonna use object cuz of complexity

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT }) // type is action we are gonna do
    }
    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }
    return (
        <>
            <button onClick={decrement}>-</button>
            {state.count}
            <button onClick={increment}>+</button>
        </>
    )
}



/*
import  {useState } from "react"

export default function UseReducer1() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount((c) => c + 1)
    }
    function decrement() {
        setCount((c) => c - 1)
    }
    return (
        <>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </>
    )
}

*/