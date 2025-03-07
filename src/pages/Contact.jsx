import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdAdd, MdSearch } from "react-icons/md";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import style from "../components/Contact.module.css";
import {
  addContact,
  updateContact,
  deleteContact,
  setSearchTerm,
  setSelectedGroup,
} from "../store/contactsSlice";
import "../styles/App.css";

function App() {
  const dispatch = useDispatch();
  const { contacts, searchTerm, selectedGroup } = useSelector(
    (state) => state.contacts
  );
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleUpdateContact = (updatedContact) => {
    dispatch(updateContact({ ...updatedContact, id: editingContact.id }));
    setEditingContact(null);
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={style.appContainer}>
      <div className={style.contentWrapper}>
        <div className={style.header}>
          <h1 className={style.headerTitle}>Contact Manager</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(true)}
            className={style.addButton}
          >
            <MdAdd size={20} />
            Add Contact
          </motion.button>
        </div>

        <div className={style.searchFilterContainer}>
          <div className={style.searchWrapper}>
            <MdSearch className={style.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className={style.searchInput}
            />
          </div>
          <select
            value={selectedGroup}
            onChange={(e) => dispatch(setSelectedGroup(e.target.value))}
            className={style.groupSelect}
          >
            <option value="all">All Groups</option>
            <option value="professional">Professional</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
          </select>
        </div>

        <ContactList
          contacts={contacts}
          onEdit={handleEditContact}
          onDelete={handleDeleteContact}
          searchTerm={searchTerm}
          selectedGroup={selectedGroup}
        />

        <AnimatePresence>
          {showForm && (
            <ContactForm
              onSubmit={editingContact ? handleUpdateContact : handleAddContact}
              onClose={() => {
                setShowForm(false);
                setEditingContact(null);
              }}
              initialData={editingContact}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
