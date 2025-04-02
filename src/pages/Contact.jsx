import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdAdd, MdSearch } from "react-icons/md";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import style from "../components/Contact.module.css";
import { Link } from "react-router-dom";

import {
  addContact,
  updateContact,
  deleteContact,
  setSearchTerm,
  setSelectedGroup,
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
} from "../store/contactsSlice";

import { fetchTestContacts } from "../services/contactService";

function Contact() {
  const dispatch = useDispatch();
  const { contacts, searchTerm, selectedGroup, loading, error } = useSelector(
    (state) => state.contacts
  );
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [duplicateError, setDuplicateError] = useState(null);

  const isDuplicateContact = (newContact) => {
    return contacts.some(
      (contact) =>
        contact.phone === newContact.phone || contact.email === newContact.email
    );
  };

  const handleAddContact = (newContact) => {
    if (isDuplicateContact(newContact)) {
      setDuplicateError("Contact with this email or phone already exists!");
      return false;
    }
    dispatch(addContact(newContact));
    return true;
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

  useEffect(() => {
    let isMounted = true;
    const loadInitialContacts = async () => {
      try {
        dispatch(fetchContactsStart());
        const initialContacts = await fetchTestContacts(5);
        if (isMounted) {
          dispatch(fetchContactsSuccess(initialContacts));
        }
      } catch (error) {
        if (isMounted) {
          dispatch(fetchContactsFailure(error.message));
        }
      }
    };

    loadInitialContacts();

    return () => {
      isMounted = false; // Cleanup to prevent state updates on unmounted component
    };
  }, [dispatch]);

  return (
    <div className={style.appContainer}>
      <div className={style.contentWrapper}>
        <div className={style.header}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(true)}
            className={style.addButton}
          >
            <MdAdd size={20} />
            Add Contact
          </motion.button>
          <Link to="/">
            <button className="cta">Back to home</button>
          </Link>
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
            <option value="work">Business</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
          </select>
        </div>

        {error && <div className={style.errorMessage}>{error}</div>}
        {loading && <div className={style.loadingSpinner}></div>}

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
                setDuplicateError(null);
              }}
              initialData={editingContact}
              duplicateError={duplicateError}
              clearDuplicateError={() => setDuplicateError(null)}
            />
          )}
        </AnimatePresence>
      </div>

      <footer className="footer-two">
        <div className="footer-item-two">
          <p className="text footer-text-two">
            &copy; 2025 MEL Contact. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
