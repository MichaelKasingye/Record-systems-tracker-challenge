/* eslint-disable no-unused-vars */
import axios from "axios";
import app from "../config/firebaseInit";
import { request } from "../utils/axios-utils";

export async function getContacts() {
  let data;
  try {
    data = await axios.get("http://www.registration.unmc.ug/api/v1/contacts", {
      headers: {
        Authorization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU2NTc0MTcwLCJqdGkiOiJkNjEyMTViN2I5ZWY0OTc5YmQ5MGJiNTI0NWM1ZTZlMSIsInVzZXJfaWQiOiJlZmI0ZTFlNy1hOTA1LTQxZmQtOTAwOC0yNTU0MjYzNGQzY2MiLCJyb2xlIjoiYXBwbGljYW50In0.jvYMv_8tOLHZJPQziNUU_xZZ2x8UGUEelWZtU_qlBgQ",
      },
    });
  } catch (err) {
    return err;
  }
  return data;
}

export async function getCourses() {
  let data;
  try {
    data = await axios.get("http://www.registration.unmc.ug/api/v1/courses", {
      headers: {
        Authorization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo",
      },
    });
  } catch (err) {
    return err;
  }
  return data;
}

export async function getDistricts() {
  let data;
  try {
    data = await axios.get("http://www.registration.unmc.ug/api/v1/districts", {
      headers: {
        Authorization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDQ2NjgwLCJqdGkiOiIwZTRiYmViODM0NzY0NTRlOGM1NGM1ZjljMDc3MjdkYyIsInVzZXJfaWQiOiIxNTE4MzdlOC1iYmJhLTQ0OGYtODM5NC1lZGQwZmQ2OWQyZTciLCJyb2xlIjoicmVjb3JkcyBvZmZpY2VyIn0.HT51NRbQ6GJtDYx3m8zb6IVbuWnn4GzcDTn27G1MVig",
      },
    });
  } catch (err) {
    return err;
  }
  return data;
}
