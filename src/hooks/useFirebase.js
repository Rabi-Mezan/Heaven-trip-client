import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../firebase/init";


initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)


    }

    // observe usser
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
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
        googleSignIn,
        logout
    }


}

export default useFirebase;
