import { createSlice } from "@reduxjs/toolkit";
import createEvent from "../../service/Entry/EntryService";

import deleteEntry from "../../service/Entry/DeleteService";
import getEntries from "../../service/Entry/getEntriesService";
import getAnEntryService from "../../service/Entry/getAnEntryService";
import UpdateEntryService from "../../service/Entry/UpdateEntryService";

const initialState = {
  Entries: [],
  loading: false,
  hasErrors: false,
};

export const EntriesSlice = createSlice({
  name: "Entries",
  initialState,
  reducers: {
    fetchEntries: (state) => {
      state.loading = true;
    },
    fetchEntriesSuccess: (state, { payload }) => {
      state.Entries = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    fetchEntriesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    filterEntries: (state, { payload }) => {
      state.Entries = payload;
    },
  },
});

export const { fetchEntries, fetchEntriesSuccess, fetchEntriesFailure } =
  EntriesSlice.actions;

// a selector
export const EntriesSelector = (state) => state?.Entries;

// the reducer
export default EntriesSlice.reducer;

// Asynchronus thunk actionn
export const fetchEntriesAsync = (endpoint) => {
  return async (dispatch) => {
    dispatch(fetchEntries());
    try {
      getEntries(endpoint).then((Entries) => dispatch(fetchEntriesSuccess(Entries)));
    } catch (error) {
      dispatch(fetchEntriesFailure(error));
    }
  };
};

export const fetchAnEntryAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchEntries());
    try {
      getAnEntryService(id).then((Entries) => dispatch(fetchEntriesSuccess(Entries)));
    } catch (error) {
      dispatch(fetchEntriesFailure(error));
    }
  };
};

export const createEventAsync = (entry) => {
  return async (dispatch) => {
    createEvent(entry)
      .then(() => {
        dispatch(fetchEntriesAsync());
      })
      .catch((error) => {
        dispatch(fetchEntriesFailure(error));
      });
  };
};

export const updateEventAsync = (id, data) => {
  return async (dispatch) => {
    UpdateEntryService(id, data)
      .then(() => {
        getAnEntryService(id).then((Entries) => dispatch(fetchEntriesSuccess(Entries)));
      })
      .catch((error) => {
        dispatch(fetchEntriesFailure(error));
      });
  };
};

export const deleteEntryAsync = (id) => {
  return async (dispatch) => {
    deleteEntry(id)
    try {
      getAnEntryService(id).then((Entries) => dispatch(fetchEntriesSuccess(Entries)));
    } catch (error) {
      dispatch(fetchEntriesFailure(error));
    }
  };
};
