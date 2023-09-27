import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Anjani",
    age: "21"
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      {/* <Card username= "Kishan" someObj = {myObj} newArr = {myArr} /> */}
      <Card username= "Hermione" btnName = "Click Me" />
      {/* <Card username= "Ana" btnName = "Visit Me"/> */}
      <Card username= "Ana" />
    </>
  )
}

export default App
