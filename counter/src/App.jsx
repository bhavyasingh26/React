import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(5) //this made let counter function
      //variable, function that takes the value to be changed accordingly
  //let counter = 5

  let addValue = () =>{
    
    //let updated = counter + 1; the variable stores the sunction that has to performed
    setCounter(counter+1) //here this set counter function is updating the value of the counter uding update variable
    //setcounter(counter + 1)... we can also write like this without using any extra variable
    
    /*
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    here 3 counter are present but it is updating the same counter again and again as operation goes in batch so the counter will update the same. same work is repeacted 3 times and its doing +1 only over all
    */

    /*setCounter(prevCounter=> prevCounter+1) //prevCounter will give the previous value of the counter
    setCounter(prevCounter=> prevCounter+1) 
    setCounter(prevCounter=> prevCounter+1)
    like here 3 prevcounters are present and each value will take the last counter so it will increase the value by +3 */ 
    console.log("clicked", counter);
  }

  let removeValue = () =>{
    let update=counter - 1;
    setCounter(update)
    console.log("clicked", counter);
  }

  return (
    <>
    <h1>counter</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addValue}>increase value{counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>decrease value</button>
    </>
  )
}

export default App
