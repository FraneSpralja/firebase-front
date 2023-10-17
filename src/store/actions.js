import app from '../firebase/'
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

export const addNewUser = async({commit}, user) => {
    try {

        const { email, pass } = user

        const { id } = await addDoc(collectioRef, {
            email,
            pass
        })

        const docRef = doc(db, 'users', id)
        const docSnap = await getDoc(docRef)

        commit('addNewItem', docSnap.data())
    } catch (error) {
        console.log(error.message)
    }
}

export const getData = async( {commit} ) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'))

        const items = querySnapshot.docs.map((item) => {
            const newData = { ...item.data(), id: item.id }
            return newData
        })

        commit('newItems', items)

    } catch (error) {
        console.log(error.message)
    }
}

export const getOneDocument = async({commit} , id) => {
    try {        
        const docRef = doc(db, 'users', id)
        const docSnap = await getDoc(docRef)
        const item = { ...docSnap.data(), id }
        
        commit('getItem', item)
        return item
    } catch (error) {
        console.log(error.message)
    }
}

export const updateData = async( {commit}, data ) => {
    try {
        const { id, email, pass } = data
        const docRef = doc(db, 'users', id)
        await updateDoc(docRef, {
            email,
            pass
        })

        commit('updateItem', data)
        
    } catch (error) {
        console.log(error)
    }
}