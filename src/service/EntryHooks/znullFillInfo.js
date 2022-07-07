/* eslint-disable no-unused-vars */
import { request } from "../../utils/axios-utils";

const fetchRegistrationData = () => {
    return request({ url: '/contacts'})
}
export default async function createEntry(data) {
    try {
        // const docRef = await addDoc(collection(db, "entries"), {...data});
        // if (!docRef.id) return new Error('An error ocurred while creating an entry')
        // return docRef
    } catch (error) {
        return error
    }
}

