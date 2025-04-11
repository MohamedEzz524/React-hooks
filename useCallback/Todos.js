import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
    console.log("child render"); // Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

//memo: don't let Todos be rerendered unless {todos,addTodo} changes
export default memo(Todos); //we think Todos not let Todos refreshing, but cuz of"referential equality" it will refresh when count get change and function re-render
//To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.
//Use the useCallback Hook to prevent the Todos component from re-rendering needlessly: