import { useState } from 'react'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'
import Card from './components/card'  

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "bhavya",
    age: 23
  }

  let newArr  = [1,2,3]

  return (
    <>
    <h1>hi</h1>
    <Card username="bhavyasinghuncut" btnText="click me"/>
    <Card username="bhavyasingh2602" />
    </>
  )
}

export default App