import { useState, useCallback, useEffect, useRef } from 'react'

// useRef jb kisi chej ka reference lena ho tb use krte hai

function App() {
  const [length, setLength] = useState(8)                 // useState is a React Hook that lets you add a state variable to your component.
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  // ref hook ko use krne ke liye ek variable bnana pdta hai
  const passwordRef = useRef(null)  // default value null

  const passwordGenerator = useCallback(() => {     //useCallback is a React Hook that lets you cache a function definition between re-renders.
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  // Memoization is an optimization technique for accelerating computer programs by caching 
  //the results of heavy function calls and returning them when similar inputs are encountered repeatedly

  const copyPasswordToClipboard = useCallback(() => {     
    passwordRef.current?.select();   // password copy krte h to wo select ho jata h isliye passref use kiya hai 
    passwordRef.current?.setSelectionRange(0, 999);   // selectrange se ek range tk hi value select hogi
    window.navigator.clipboard.writeText(password)   // core react me kam kr rhe isliye direct windore likh skte h next js me server side rendering hoti h to waha direct aise use nhi kr skte
  }, [password])



  useEffect(() => {
     
    //useEffect is a React Hook that lets you synchronize a component with an external system.
    //useEffect(setup, dependencies?)
    
    
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}    // hume refrence lena h to har ek input ke ander ref pass kr skte h
        />
        <button
        onClick={copyPasswordToClipboard}     // ye method pass ko clipboard pr copy krne ke liye bnaya hai
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App


// 1 variable select krenge kya kya allowed hai or kya nhi h ex. numbers characters ye input me show krenge
// 2 password generator ka method likhenege jo string values lega or usme condtions lga di
// 3 loop lenge jisme char lenge or randomly ek char generate kiya
// 4 charAt method hota h kon si index me value chahiye uske liye 
// 5 optimize kiya or use callback likha ye function ko memorize krta hai jitna ho ske
// 6 useeffect jb bhi fist time me page load hota h tb ye call hota h or agar dependecies me kuch change hua to dibara se run hoga
// 7 copy toclipboard method bnaya
// 8 user ko better UI dikhane ke liye useRef hook use kiya hai jo hme refrence deta h kisi bhi element ka jo hamre page pe h or usme manipulation kr skte h