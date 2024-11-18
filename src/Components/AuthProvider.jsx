import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase.config";


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser)
            setLoading(false)
        });

        return () => {
            unSubscribe()
        }

    }, [])

    const authinfo = {
        loading,
        users,
        createUser,
        loginUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;