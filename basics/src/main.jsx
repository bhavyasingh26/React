import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//like js format
const trial = (
    <a href='https://google.com' target='_self'>visit google</a>
)

//this syntax cant be changed because react render is used
const var2 = " trying variable insertion"
const trial2=React.createElement(
    'a', //typeof
    {href:'https://google.com', target:'_self'}, //props
    'click for google', //what to be written...reference 
    var2 //variable inserted at last..this is evaluated expression.. we cant calculate here as we cant put if etc in an object ..the total value has to be given here
)

createRoot(document.getElementById('root')).render(
    trial2
)
