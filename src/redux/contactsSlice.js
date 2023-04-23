import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import initialContacts from '../components/assets/contacts';
import { addContact, deleteContact, fetchContacts } from './operations';

// const defaultStatus = {
//   pending: 'pending',
//   fulfilled: 'fulfilled',
//   rejected: 'rejected',
// };

// const apiFunctions = [fetchContacts];

// const fn = status => apiFunctions.map(el => el[status]);

// const handlePending = state => {
//   state.status = defaultStatus.pending;
// };

// const handleFulfilled = (state, { payload }) => {
//   state.status = defaultStatus.fulfilled;
//   state.items = payload;
//   state.error = '';
//   state.isLoading = false;
// };

// const handleRejected = (state, { payload }) => {
//   state.status = defaultStatus.rejected;
//   state.error = payload;
//   state.isLoading = false;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       // .addCase(getNewsThunk.pending, handlePending)
//       // .addCase(getNewsThunk.fulfilled, handleFulfilled)
//       // .addCase(getNewsThunk.rejected, handleRejected)
//       // .addCase(getNewsSearchThunk.pending, handlePending)
//       // .addCase(getNewsSearchThunk.fulfilled, handleFulfilled)
//       // .addCase(getNewsSearchThunk.rejected, handleRejected)
//       .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
//       .addMatcher(isAnyOf(...fn(defaultStatus.fulfilled)), handleFulfilled)
//       .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
//   },
// });

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },

    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },

    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },

    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
