import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "../../service/AddContactservice";

const initialState = {
  contacts: [],
  loading: false,
  hasErrors: false,
};
console.log(initialState.contacts);

export const Contactslice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    fetchContacts: (state) => {
      state.loading = true;
    },
    fetchContactsSuccess: (state, { payload }) => {
      state.contacts = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    fetchContactsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { fetchContacts, fetchContactsSuccess, fetchContactsFailure } =
  Contactslice.actions;

export const ContactsSelector = (state) => state?.Contacts;

export default Contactslice.reducer;

export const fetchContactsAsync = () => {
  return async (dispatch) => {
    getContacts()
      .then((Contacts) => {
        console.log(Contacts.data.data);
        // const info = Contacts.data.data
        dispatch(fetchContactsSuccess(Contacts));
      })
      .catch((error) => {
        dispatch(fetchContactsFailure(error));
      });
  };
};
