import { useCallback, useState } from "react";
import Todos from "./Todos";

export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    //if we use "useMemo()" instead: it will be = to only return value , can't accept param, can't have dependency.
    const addTodo = useCallback(() => { //Now the Todos component will only re-render when the todos prop changes.
        return setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}
