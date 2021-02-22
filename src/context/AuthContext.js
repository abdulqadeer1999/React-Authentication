import React, {useContext,useState,useEffect} from 'react'
import {auth} from '../firebase'


const AuthContext = React.createContext()  

export   function useAuth () {
    return useContext (AuthContext)
}

export function  AuthProvider ({children}) {
       const [currentuser , setCurrentUser ] = useState()
       const [loading,setLoading] = useState(true )


       function signup (email,password) {
          return auth.createUserWithEmailAndPassword(email,password)
       }

        function login(email,password) {
            return auth.signInWithEmailAndPassword(email,password)
        }
       
     function logout() {
        return auth.signOut()
     }

     function resetPassword(email) {
         return auth.sendPasswordResetEmail(email)
         
     }

     function UpdateEmail(email) {
         return auth.currentUser.updateEmail(email)
     }
     
     function UpdatePassword(password) {
        return auth.currentUser.updatePassword(password)
    }

        useEffect ( ()=> {
        const unsubsribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading (false)
           
         })
          
         return unsubsribe

        },[])

       const value = {
           currentuser,
           signup,
           login,
           logout,
           resetPassword,
           UpdateEmail,
           UpdatePassword
       }


return (
    <AuthContext.Provider value = {value}>
        {!loading && children}
    </AuthContext.Provider>
)
}
