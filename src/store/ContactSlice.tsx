import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

interface ContactItem {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactItemState {
  contacts: ContactItem[];
}

const initialState: ContactItemState = {
  contacts: [],
};

const ContactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<ContactItem>) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateContact(state, action: PayloadAction<ContactItem>) {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    },
  },
});

export const { addContact, removeContact, updateContact } =
  ContactSlice.actions;

export const selectContacts = (state: RootState) => state.ContactStore.contacts;

export default ContactSlice.reducer;
