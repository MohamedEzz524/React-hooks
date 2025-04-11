import { useReducer, useState } from "react"
import Todo from "./Todo"

export const ACTIONS = { //5
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo"
}

function reducer(todos, action) { //2
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) { // same element i clicked on
                    return { ...todo, complete: !todo.complete }
                }
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name) { //6
    return { id: Date.now(), name: name, complete: false }
}

export default function UserReducer2() {    //1
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState("")


    function handleSubmit(e) { //4
        e.preventDefault()//prevent refresh of page on submit
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } }) //"payload" 2nd param: object by all values we need to perform this action
        setName("")

    }


    return ( //3
        <>
            <form onSubmit={handleSubmit}>
                Todos:
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </form>
            {todos.map(e => { //7
                return <Todo key={e.id} todo={e} dispatch={dispatch} />
            })}
        </>
    )
}
