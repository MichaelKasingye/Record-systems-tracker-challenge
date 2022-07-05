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

export  const useRegistrationData = (onSuccess, onError, endpoint ) => {
    return useQuery(['registration',endpoint], getAllEntries, {
      onSuccess,
      onError
      // select: data => {
      //   const superHeroNames = data.data.map(hero => hero.name)
      //   return superHeroNames
      // }
    })
  }

  export const useAddEntryContacts = () => {
    return useMutation(addEntriesContacts)
  }
  export const useAddEntryCourse = () => {
    return useMutation(addEntriesCourse)
  }