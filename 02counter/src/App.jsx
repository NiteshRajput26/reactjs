import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState hooks hai
  let [counter,setcounter] = useState(10) //counter  setcounter name rkhna jaruri nhi h kuch bhi rkh skte h ye sirf ek refrence holder hai
  //let counter = 10;

  const addValue = () =>{
    // console.log("clicked",Math.random());
  //  console.log("clicked",counter);
 //   counter = counter + 1    
    // setcounter(counter+1)
    // setcounter(counter+1)
    // setcounter(counter+1)
    // setcounter(counter+1)
    setcounter(prevCounter => prevCounter+1)              //*********************INTERVIEW QUESTION************ */
    setcounter(prevCounter => prevCounter+1)
    setcounter(prevCounter => prevCounter+1)
    setcounter(prevCounter => prevCounter+1)
  }
// fiber grp me usko update dega
  const removeValue =()=>{

   // console.log("clicked",counter);
  if(counter > 0){
    setcounter(counter-1)
  }
  else{
    setcounter(counter=0)
  }
  }

  return (
    <>
      <h1>react with codecaptain</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value{counter}</button>

      <br></br>

      <button
       onClick={removeValue}
       >Remove Value{counter}</button>

      <p>footer:{counter}</p>
    </>
  )
}

export default App



// ************NOTES****************
// react me changes propagate kaise karaye jate hai