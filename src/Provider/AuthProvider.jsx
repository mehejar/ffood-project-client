import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { app } from "../../firebase.config";


 export const AuthContex = createContext(null);
 const auth = getAuth(app)

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // Create User
    const createuser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                // get token and store client
            }
            else{
                // TODO: remove token
            }
            setLoading(false)
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    


    const authInfo = {
        user,
        loading,
        createuser,
        logOut,
        login
    }
    return(
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthProvider