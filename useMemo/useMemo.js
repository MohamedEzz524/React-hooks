import { useState, useMemo, useEffect } from "react"

export default function UseMemo() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => { // like that we're caching number value until it changes "stop slow function in render"
    return slowFunction(number)
  }, [number])
  const themeStyles = useMemo(() => { //
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log("theme changed when change number"); //before usMemo on themeStyle: cuz of "referential equality": means each change comp is recreated "themeStyles" object
    //after usMemo on themeStyle: it wont run when change number only when change theme
  }, [themeStyles])

  return ( //before using useMemo() every time changing input / click button it will take time cuz it re-create all component and run slowFunction
    //After using useMemo() button will work normally / only printing number will take time
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

//expensive function we need to stop it from re-running cuz its too slow
function slowFunction(num) {
  console.log('calling slowFunction');
  for (let i = 0; i < 1000000000; i++) { }
  return num * 2
}


//Think of memoization as caching a value so that it does not need to be recalculated.
//The useMemo Hook only runs when one of its dependencies update.
// This can improve performance.
