import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { app } from "../../firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import axios from "axios";


 export const AuthContex = createContext(null);
 const auth = getAuth(app)

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

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
            console.log(currentUser)
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email};
                axios.post('https://freshfood-server.vercel.app/jwt', userInfo)
                
                .then(res =>{
                    // console.log('TOKEN',res.data.token)
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // TODO: remove token
                localStorage.removeItem('access-token');
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