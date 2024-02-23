import{ createContext, useState } from "react";

// Here we create the Context
export const AuthContext =createContext();

// Here we create the component that will wrap our app, this means all itchildren can access the context using are hook.
export const AuthProvider = (props) => {
    // Using a object for the state here, this way we can add more properties tothe state later on like user id.
    const [auth, setAuth] =useState({
        token:window.localStorage.getItem("token"),
    });

    return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {props.children}
    </AuthContext.Provider>
    );
};
