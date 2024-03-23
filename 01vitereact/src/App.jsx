
import Code from "./Code"

function App() {
   const username = " Nitesh Rajput"

  return (
    //      <> </> or <div></div> dono rkh skte h
    <>
  <Code/>
  <h1>react code{username}</h1>
     {/* { xyz} jo bhi likha hoga wo variable mana jayega isko evaluated expression bolte hai  iske ander hum js nhi likh skte jaise - if else ,  for loop  kyunki js ka syntax h jo allow nhi krta  ex. app.jsx me h */}
  
  <p>test para</p>
  </>
  )
}

export default App

//  