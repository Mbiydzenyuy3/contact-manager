import React, { useState, useEffect } from "react";
import { MdAdd, MdSearch, MdArrowBack } from "react-icons/md";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import { useContacts } from "../lib/ContactContext";
import Auth from "../components/Auth";

function Contact() {
  const {
    contacts,
    addContact,
    updateContact,
    deleteContact,
    fetchContacts,
    user,
    loading
  } = useContacts();
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("all");

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, [user, fetchContacts]);

  if (loading)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Loading...
      </div>
    );
  if (!user) return <Auth />;

  const handleAddContact = async (newContact) => {
    const contactData = {
      full_name: newContact.name,
      email: newContact.email,
      phone: newContact.phone,
      context_tag: `${newContact.group}: ${newContact.context}`
    };
    await addContact(contactData);
    return true;
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleUpdateContact = async (updatedContact) => {
    const contactData = {
      full_name: updatedContact.name,
      email: updatedContact.email,
      phone: updatedContact.phone,
      context_tag: `${updatedContact.group}: ${updatedContact.context}`
    };
    await updateContact(editingContact.id, contactData);
    setEditingContact(null);
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
  };

  const mappedContacts = contacts.map((contact) => {
    const parts = contact.context_tag.split(": ");
    const group = parts[0] || "personal";
    const context = parts.slice(1).join(": ") || contact.context_tag;
    return {
      id: contact.id,
      name: contact.full_name,
      email: contact.email,
      phone: contact.phone,
      group,
      context
    };
  });

  // useEffect(() => {
  //   let isMounted = true;
  //   const loadInitialContacts = async () => {
  //     try {
  //       dispatch(fetchContactsStart());
  //       const initialContacts = await fetchTestContacts(5);
  //       if (isMounted) {
  //         dispatch(fetchContactsSuccess(initialContacts));
  //       }
  //     } catch (error) {
  //       if (isMounted) {
  //         dispatch(fetchContactsFailure(error.message));
  //       }
  //     }
  //   };

  //   loadInitialContacts();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [dispatch]);

  return (
    <div className='w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center gap-8'>
      <div className='max-w-7xl mx-auto p-6'>
        <div className='flex items-center justify-between mb-8'>
          <button
            onClick={() => setShowForm(true)}
            className='bg-purple-500 text-white px-6 py-3 border-none rounded-lg font-medium flex items-center gap-2 transition-all hover:bg-purple-600 shadow-sm'
          >
            <MdAdd size={20} />
            Add Contact
          </button>
          <Link to='/'>
            <button className='text-gray-700 px-6 py-3 border border-2 border-purple-900 rounded-lg font-medium flex items-center gap-2 transition-all hover:bg-purple-600 hover:text-white hover:border-0 shadow-sm'>
              <MdArrowBack /> Back
            </button>
          </Link>
        </div>

        <div className='flex mb-6 border border-gray-300 rounded-lg'>
          <div className='flex-1 relative'>
            <MdSearch
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
              size={20}
            />
            <input
              type='text'
              placeholder='Search contacts...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full py-3 pl-10 pr-4 border-0 rounded-lg transition-all focus:outline-none'
            />
          </div>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className='min-w-40 transition-all focus:outline-none z-1 text-center'
          >
            <option value='all'>All Groups</option>
            <option value='professional'>Professional</option>
            <option value='personal'>Personal</option>
            <option value='work'>Business</option>
            <option value='family'>Family</option>
            <option value='friends'>Friends</option>
          </select>
        </div>

        {loading && (
          <div className='border-4 border-gray-300 border-t-blue-500 rounded-full w-10 h-10 animate-spin mx-auto my-5'></div>
        )}

        <ContactList
          contacts={mappedContacts}
          onEdit={handleEditContact}
          onDelete={handleDeleteContact}
          searchTerm={searchTerm}
          selectedGroup={selectedGroup}
        />

        <div>
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
        </div>
      </div>

      <footer className='mt-32'>
        <div>
          <p className='text-black text-center mt-56'>
            &copy; {new Date().getFullYear()} KITH. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
