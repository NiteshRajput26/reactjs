import React from "react";
const UserContext = React.createContext()  // har ek context ek provider hota hai
// provider jo bhi ander component hai unn sb ko global usercontext ka access mil jayega


export default UserContext;


// 1 Create Context 
// 1.1  ek variable (UserCintext) bnaya or usko through kr diya output me
// iske bad ek provider bnayenge jo data provide krta hai
{/* <UserContext>
<Login/>
<Card>
    <Data/>     
</Card>
</UserContext> */}