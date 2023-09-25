import { getAuth, onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { db } from "../utils/firebase-config";
import {getDocs,collection,addDoc} from "firebase/firestore";


export const AuthContext = createContext()
const studentCollectionRef = collection(db,"students");
export const  getStudents = async () => {
    try{
                const data = await getDocs(studentCollectionRef);    
        const filteredData = data.docs.map((doc) => {
            return {...doc.data(),id:doc.id};
        });
        return filteredData;
    }catch(err){
        console.log(err);
    }
};

export const addStudents = async(data) => {
    try{
        await addDoc(studentCollectionRef,{Name:data.username,password:data.password})
    }catch(err){
        console.log(err);
    }
};

export const AuthContextProvider = props => {
    const [user, setUser] = useState()
    const [error, setError] = useState()
    const [students, setStudents] = useState([]);


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
      return () => unsubscribe()
    }, [])
    return <AuthContext.Provider value={{ user, error }} {...props} />
  }

  export const useAuthState = () => {
    const auth = useContext(AuthContext)
    return { ...auth, isAuthenticated: auth.user != null }
  }