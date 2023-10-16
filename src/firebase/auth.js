import app from './index.js'
import { getAuth, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup } from "firebase/auth";

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

export const createUser = (user) => {
    const { email, pass } = user
    createUserWithEmailAndPassword(auth, email, pass)
        .then(resp => {
            console.log(resp.user)
        })
        .catch(err => console.log(err.message))
}

export const signInUser = async(user) => {
    try {        
        const { email, pass } = user;
        const response = await signInWithEmailAndPassword(auth, email, pass);

        console.log(response.user)
    } catch (error) {
        console.log(error.message)
    }
}

export const signInWithGoogle = async() => {
    try {
        await signInWithPopup(auth, googleProvider)
    } catch (error) {
        console.log(error.message)
    }
}