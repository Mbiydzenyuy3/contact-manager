import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdEdit,
  MdDelete,
  MdPerson,
  MdWork,
  MdPeople,
  MdGroup,
} from "react-icons/md";
import style from "../components/ContactList.module.css";

const groupIcons = {
  personal: <MdPerson className="icon-blue" />,
  work: <MdWork className="icon-emerald" />,
  family: <MdPeople className="icon-rose" />,
  friends: <MdGroup className="icon-violet" />,
};

export default function ContactList({
  contacts,
  onEdit,
  onDelete,
  searchTerm,
  selectedGroup,
}) {
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup =
      selectedGroup === "all" || contact.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className={style.contactgrid}>
      <AnimatePresence>
        {filteredContacts.map((contact) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="contact-card"
          >
            <div className="contact-content">
              <div className="contact-header">
                <div className="contact-info">
                  <div className="contact-icon">
                    {groupIcons[contact.group]}
                  </div>
                  <div>
                    <h3 className="contact-name">{contact.name}</h3>
                    <p className="contact-email">{contact.email}</p>
                    <p className="contact-phone">{contact.phone}</p>
                  </div>
                </div>
                <div className="contact-actions">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onEdit(contact)}
                    className="action-button edit-button"
                  >
                    <MdEdit size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onDelete(contact.id)}
                    className="action-button delete-button"
                  >
                    <MdDelete size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {filteredContacts.length === 0 && (
        <div className="no-contacts">
          <p className="no-contacts-title">No contacts found</p>
          <p className="no-contacts-subtitle">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
