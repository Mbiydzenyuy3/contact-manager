import { createSlice } from "@reduxjs/toolkit";

const loadContacts = () => {
  try {
    const contacts = localStorage.getItem("contacts");
    return contacts ? JSON.parse(contacts) : [];
  } catch (error) {
    throw new error("No contacts found in storage");
  }
};

const saveContacts = (contacts) => {
  try {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  } catch (error) {
    throw new error(
      "Check your form to see if contact is inputed correctly"
    )
  }
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: loadContacts(),
    searchTerm: "",
    selectedGroup: "all",
    loading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = { ...action.payload, id: Date.now().toString() };
      state.contacts.push(newContact);
      saveContacts(state.contacts);
    },
    updateContact: (state, action) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      saveContacts(state.contacts);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      saveContacts(state.contacts);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },

    fetchContactsStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchContactsSuccess(state, action) {
      state.loading = false;
      state.contacts = [...state.contacts, ...action.payload];
    },

    fetchContactsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addContact,
  updateContact,
  deleteContact,
  setSearchTerm,
  setSelectedGroup,
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
} = contactsSlice.actions;

export default contactsSlice.reducer;
