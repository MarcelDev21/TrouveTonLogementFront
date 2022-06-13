//import React from 'react';
import React,{useContext} from "react";
import AuthContext from "../Redux/AuthContext";
import Login from "../Component/Login/Login";

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    return user.logged ? children : <Login/>
};

export default PrivateRouter;