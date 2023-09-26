import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// let counter = 15
// We don't use the above var, as we can update it but it won't get propagate in UI and the values won't change at every place so to accomplish that we will use => useState (a func of React)

function App() {
  let [counter, setCounter] = useState(15)

  let addValue = () => {
    if (counter < 20){
      counter = counter + 1
      console.log('Value Added', counter);
      setCounter(counter)
    } else {
      setCounter(counter);
    }
  }

// so this had sync up the state and UI & thus the value changed in counter will trigger and all the connected values will react to change

  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>React with Chai</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
