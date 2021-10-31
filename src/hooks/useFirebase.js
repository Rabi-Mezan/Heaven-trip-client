import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../firebase/init";


initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [isLoading, SetIsLoading] = useState(true)



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        SetIsLoading(true)
        return signInWithPopup(auth, googleProvider)


    }

    // observe usser
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            SetIsLoading(false)
        })
    }, [])


    //logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .catch(error => {
                console.log(error.message);
            })
    }



    return {
        user,
        setUser,
        SetIsLoading,
        isLoading,
        googleSignIn,
        setError,
        logout
    }


}

export default useFirebase;
