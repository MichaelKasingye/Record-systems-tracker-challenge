/* eslint-disable no-unused-vars */
import app from "../../config/firebaseInit"
import { collection, addDoc, doc, deleteDoc, ref, deleteObject, getStorage, getFirestore } from "firebase/firestore"; 

const db = getFirestore();



export default async function deleteEntry(id) {
    try {
        // const storage = await getStorage();
        // const desertRef = await ref(storage, 'images/desert.jpg');
        // await  deleteObject(desertRef)
        
        await deleteDoc(doc(db, "entries", `${id}`));

        // const docRef = await addDoc(collection(db, "entries"));
        // if (!docRef.id) return new Error('An error ocurred while deleting an entry')
        // return docRef
    } catch (error) {
        return error
    }
}