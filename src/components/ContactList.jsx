import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdEdit,
  MdDelete,
  MdPerson,
  MdComputer,
  MdWork,
  MdPeople,
  MdGroup
} from "react-icons/md";

const groupIcons = {
  professional: <MdComputer className='text-emerald-500' />,
  personal: <MdPerson className='text-blue-500' />,
  work: <MdWork className='text-emerald-500' />,
  family: <MdPeople className='text-rose-500' />,
  friends: <MdGroup className='text-violet-500' />
};

export default function ContactList({
  contacts,
  onEdit,
  onDelete,
  searchTerm,
  selectedGroup
}) {
  const filteredContacts = contacts
    .filter((contact) => {
      const matchesSearch =
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (contact.context &&
          contact.context.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesGroup =
        selectedGroup === "all" || contact.group === selectedGroup;
      return matchesSearch && matchesGroup;
    })

    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className='grid gap-4 mt-6'>
      <AnimatePresence>
        {filteredContacts.map((contact) => (
          <motion.div
            key={contact.id || contact.email}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='bg-white rounded-xl shadow-lg transition-all transform translate-y-0 hover:shadow-2xl hover:-translate-y-1'
          >
            <div className='p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='text-3xl bg-gray-100 p-3 rounded-lg'>
                    {groupIcons[contact.group]}
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg text-gray-900'>
                      {contact.name}
                    </h3>
                    <p className='text-gray-600 text-sm'>{contact.email}</p>
                    <p className='text-gray-500 text-sm mt-1'>
                      {contact.phone}
                    </p>
                    {contact.context && (
                      <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2'>
                        {contact.context}
                      </span>
                    )}
                  </div>
                </div>
                <div className='flex gap-2'>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onEdit(contact)}
                    className='action-button edit-button'
                  >
                    <MdEdit size={20} className='text-blue-500' />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onDelete(contact.id)}
                    className='action-button delete-button'
                  >
                    <MdDelete size={20} className='text-red-500' />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {filteredContacts.length === 0 && (
        <div className='text-center text-gray-600 p-12 bg-white rounded-xl shadow-lg'>
          <p className='text-lg'>No contacts found</p>
        </div>
      )}
    </div>
  );
}
