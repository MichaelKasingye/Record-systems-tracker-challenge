/* eslint-disable no-unused-vars */
import { request } from "../../utils/axios-utils";
import { useQuery, useMutation, useQueryClient } from 'react-query'


  function getAllEntries(endpoint) {
      const urlEndPoint = endpoint.queryKey[1];
        return request({ url: `${urlEndPoint}`})
}

const addEntriesContacts= (infoData) => {
  return request({ url: '/contacts', method: 'post', data: infoData })
}
const addEntriesCourse= (infoData) => {
  return request({ url: '/courses', method: 'post', data: infoData })
}
const addEntriesTrainingSchool= (infoData) => {
  return request({ url: '/trainingSchools', method: 'post', data: infoData })
}
const editEntriesTrainingSchool= (infoData) => {
  return request({ url: '/trainingSchools', method: 'post', data: infoData })
}
const entryId = ({ queryKey }) => {
  const id = queryKey[1]
  return request({ url: `/trainingSchools/${id}`})
}


export  const useRegistrationData = (onSuccess, onError, endpoint ) => {
    return useQuery(['registration',endpoint], getAllEntries, {
      onSuccess,
      onError
    })
  }

  export const useAddEntryContacts = () => {
    return useMutation(addEntriesContacts)
  }
  export const useAddEntryCourse = () => {
    return useMutation(addEntriesCourse)
  }
  export const useAddTrainingSchool = () => {
    return useMutation(addEntriesTrainingSchool)
  }

  export const useEntryId = id => {
    const queryClient = useQueryClient()
    return useQuery(['trainingSchools', id], entryId)
  }


  export const entryIdDelete = (id) => {
    return request({ url: `/trainingSchools/${id}` , method: 'delete'})
  }

