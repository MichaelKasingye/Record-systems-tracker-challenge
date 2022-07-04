/* eslint-disable no-unused-vars */
import { requestRegistrationURL } from "../../utils/axios-utils";


export default async function getAllEntries(endpoint) {
    try {
        return requestRegistrationURL({ url: `${endpoint}`})
    } catch (error) {
        return error
    }
}
