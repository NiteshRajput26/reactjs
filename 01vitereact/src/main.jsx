import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// commom react
function MyApp(){
  return (
    <div>
      <h1>Custom App | By Nitesh Rajput</h1>
    </div>
  )
}
  
// EXAMPLE 1

// const reactElement = {
//   type:'a',
//   props:{
//    href:'https://google.com',
//    target:'_blank'
//   } ,
//   children:'Click me to visit google'
// }

// EXAMPLE 2
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// evaluated expression example app.jsx
const anotherUser = "codeCaption"


// EXAMPLE 3
const reactElement = React.createElement (
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    //anotherElement
   reactElement
   //<App />
)


//  <MyApp />
/* <React.StrictMode>
   <MyApp />
  </React.StrictMode>, */


  // NOTES
  // example 1 ko render krenge to execute nhi hoga kyunki uska syntax humne customize kiya hai react 
  // ka particular syntax hota h jisme return krte or parsing hoti h