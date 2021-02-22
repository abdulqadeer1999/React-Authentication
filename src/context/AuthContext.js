import React, {useContext,useState,useEffect} from 'react'
import {auth} from '../firebase'


const AuthContext = React.createContext()  

export function useUth ( ) {
    return useContext (AuthContext)
}

export function  AuthProvider ({children}) {
       const [currentuser , setCurrentUser ] = useState()


       function signup (email,password) {
          return auth.createUserWithEmailAndPassword(email,password)
       }

        useEffect ( ()=> {
        const unsubsribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user)
         })
          
         return unsubsribe

        },[])

       const value = {
           currentuser,
           signup
       }


return (
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
)
}