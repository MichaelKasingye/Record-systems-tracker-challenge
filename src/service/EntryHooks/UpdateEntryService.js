/* eslint-disable no-unused-vars */
import app from "../../config/firebaseInit"
import { collection, addDoc, doc, updateDoc, getFirestore } from "firebase/firestore"; 

const db = getFirestore();

export default async function UpdateEntryService(id, data) {
    try {
        const docRef = await doc(db, "entries", `${id}`);
        if (!docRef) 
        return new Error('An error ocurred while updating an entry')
        await updateDoc(docRef, {...data});
        console.log(docRef);
        return docRef
    } catch (error) {
        return error
    }
}

