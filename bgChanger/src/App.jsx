import { useState } from "react"


function App() {
  const [color, setColor] = useState("yellow") 

  return (
    <>
     <div className="h-screen w-screen" style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center absolute bottom-20 left-0 right-0 ">
        <button onClick={() => setColor("red")}
        className="flex flex-wrap text-white bg-red-500 p-2 rounded-lg m-2">red</button>
        <button onClick={() => setColor("blue")}
        className="flex flex-wrap text-white bg-blue-500 p-2 rounded-lg m-2">blue</button>
        <button onClick={() => setColor("green")}
        className="flex flex-wrap text-white bg-green-500 p-2 rounded-lg m-2">green</button>
        <button onClick={() => setColor("purple")}
        className="flex flex-wrap text-white bg-purple-500 p-2 rounded-lg m-2">purple</button>
        <button onClick={() => setColor("black")}
        className="flex flex-wrap text-white bg-black p-2 rounded-lg m-2">black</button>
      </div>
      
     </div>
    </>
  )
}

export default App
