import { useCallback, useState } from 'react'
import './App.css'

function App() {
  //useState contains the default state
  const [len, setlen] = useState(8)
  const [numallowed, setnumallowed]=useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password , setpassword]=useState("")

  //useCallback(fn,[]) this contains fn..function and dependencies in the array[] form

  const passwordGenerator = useCallback( () => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numallowed==true){
      str+="0123456789"
    }
    if (charallowed==true){
      str+="!@#$%^&*()_+-={}[]|\:;<>,.?/~"
    }

    for (let i=1; i<=str.length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setpassword(pass)

  } , [len, numallowed, charallowed])

  return (
    <>
    <h1 className='text-white'>Password generator</h1>
    </>
  )
}

export default App
