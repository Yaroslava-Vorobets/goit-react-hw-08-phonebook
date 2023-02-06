import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from 'redux/contacts/operations'

const extraActions = [fetchContacts, addContact, deleteContact]
export const ContactSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
    isLoading: false,
    error: null
  },
  extraReducers: builder =>
    builder
  
    .addCase(fetchContacts.fulfilled,(state, action)=>{    
        state.items = action.payload;   
      })
  
    .addCase(addContact.fulfilled,(state, action) =>{    
      state.items.push(action.payload);
    })

   .addCase(deleteContact.fulfilled,(state, action)=> {    
      const index = state.items.findIndex(
        contacts => contacts.id === action.payload.id);
      state.items.splice(index, 1);
   }) 
  .addMatcher(isAnyOf(...extraActions.map(action => action.pending)), (state) => { state.isLoading = true })
 
  .addMatcher(isAnyOf(...extraActions.map(action => action.rejected)), (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
  })
        .addMatcher(isAnyOf(...extraActions.map(action => action.fulfilled)), (state) => {
          state.isLoading = false;
          state.error = null;
        })
  
  })


export const ContactReduser = ContactSlise.reducer;
