/* eslint-disable no-unused-vars */
import app from "../../config/firebaseInit"
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore()

export default async function getAnEntryService(id) {
    const data = []
try
{const docRef = doc(db, "entries", `${id}`);
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  data.push(docSnap.data())
  return data
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}}catch(error){
//   console.log(error);
  return error
}
    


return data    
}