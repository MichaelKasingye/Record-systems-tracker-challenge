import axios from "axios";
import { JWT } from "./jwt";

const registrationURL = axios.create({
  baseURL: "http://www.registration.unmc.ug/api/v1",
});

export const requestRegistrationURL = ({ ...options }) => {
  registrationURL.defaults.headers.common.Authorization = JWT.get_all_contacts;

  const onSuccess = (response) => response;
  const onError = (error) => {
    console.log("ERROR:..." + error);
    return error;
  };
  return registrationURL(options).then(onSuccess).catch(onError);
};
