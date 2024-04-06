import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider




// {children} ek genric nam h iska mtlb h jo bhi aapke pass aa rha hai usko same waise hi aage pass krdo or usko provider me rap krna padega
// provider ko data bhi provide krna padega jo ki usestate se pass krenge
// value se hum btayenge ki hum kon sa data de rhe h
// iss value ko main.jsx me bhi likh skte h aise hi