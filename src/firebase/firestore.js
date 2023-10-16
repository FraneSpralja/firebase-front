import app from './index'
import { getFirestore, 
        collection, 
        addDoc,
        getDoc, 
        getDocs,
        doc,
        updateDoc 
    } from 'firebase/firestore';

const db = getFirestore(app)
const collectioRef = collection(db, 'users')

export const addNewUser = async(user) => {
    try {

        const { email, pass } = user

        const response = await addDoc(collectioRef, {
            email,
            pass
        })

        console.log(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const getData = async() => {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'))

        return querySnapshot.docs.map((item) => {
            const newData = { ...item.data(), id: item.id }
            return newData
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const getOneDocument = async(id) => {
    try {        
        const docRef = doc(db, 'users', id)
        const docSnap = await getDoc(docRef)
        
        return { ...docSnap.data(), id }
    } catch (error) {
        console.log(error.message)
    }
}

export const updateData = async( { email, pass, id } ) => {
    try {
        const docRef = doc(db, 'users', id)
        await updateDoc(docRef, {
            email,
            pass
        })
        
    } catch (error) {
        console.log(error)
    }
}