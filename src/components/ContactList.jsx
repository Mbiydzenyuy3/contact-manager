import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdEdit,
  MdDelete,
  MdPerson,
  MdComputer,
  MdWork,
  MdPeople,
  MdGroup,
} from "react-icons/md";
import style from "../components/ContactList.module.css";

const groupIcons = {
  professional: <MdComputer className={style.iconGreen} />,
  personal: <MdPerson className={style.iconBlue} />,
  work: <MdWork className={style.iconEmerald} />,
  family: <MdPeople className={style.iconRose} />,
  friends: <MdGroup className={style.iconViolet} />,
};

export default function ContactList({
  contacts,
  onEdit,
  onDelete,
  searchTerm,
  selectedGroup,
}) {
  const filteredContacts = contacts
    .filter((contact) => {
      const matchesSearch =
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGroup =
        selectedGroup === "all" || contact.group === selectedGroup;
      return matchesSearch && matchesGroup;
    })
    // Add sorting here
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={style.contactGrid}>
      <AnimatePresence>
        {filteredContacts.map((contact) => (
          <motion.div
            key={contact.id || contact.email}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={style.contactCard}
          >
            <div className={style.contactContent}>
              <div className={style.contactHeader}>
                <div className={style.contactInfo}>
                  {contact.picture && (
                    <img
                      src={contact.picture}
                      alt={`${contact.name}'s profile`}
                      className={style.contactImage}
                    />
                  )}
                  <div className={style.contactIcon}>
                    {groupIcons[contact.group]}
                  </div>
                  <div className={style.personInfo}>
                    <h3 className={style.contactName}>{contact.name}</h3>
                    <p className={style.contactEmail}>{contact.email}</p>
                    <p className={style.contactPhone}>{contact.phone}</p>
                  </div>
                </div>
                <div className={style.contactAction}>
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
        <div className={style.noContacts}>
          <p className={style.noContactsTitle}>No contacts found</p>
        </div>
      )}
    </div>
  );
}
