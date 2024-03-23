import { useState } from "react"


function App() {
 const [color,setcolor]=useState("olive")

  return (
    <>
 <div className="w-full h-screen duration -200"
 style={{backgroundColor: color}}
 >
  <div className="justify center shadow-lg ">Nitesh Rajput</div>
  <div className="fixed flex flex-wrap
  justify-center bottom-12 inset-x-0 px-2">
    <div className="felx flex-wrap justify-center gap-3
    shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button
      // onClick={setcolor}   // onClick expect krta hai ki hum usko ek function pass krenge 
      //lekin yaha humuse function ka refrence de rhe hai  ....iss tarah se function dene pr hum uske ander parameter nhi pass kr skte
      onClick={()=>setcolor("red")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"red"}}
      >Red</button>

<button
onClick={()=>setcolor("green")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"green"}}
      >Green</button>

<button   
  onClick={()=>setcolor("yellow")}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"yellow"}}
      >Yellow</button>

<button 
   onClick={()=>setcolor("blue")}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"blue"}}
      >Blue</button>

<button 
   onClick={()=>setcolor("orange")}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"orange"}}
      >orange</button>


<button 
   onClick={()=>setcolor("black")}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"black"}}
      >Black</button>


<button 
   onClick={()=>setcolor("grey")}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"grey"}}
      >grey</button>

<button 
   onClick={()=>setcolor("white")}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"white"}}
      >white</button>

    
    </div>
  </div>
 </div>
    </>
  )
}

export default App
