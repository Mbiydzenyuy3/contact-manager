import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };
    getSession();

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const newUser = session?.user ?? null;
      setUser(newUser);
      setLoading(false);
      if (newUser && window.location.pathname !== "/contacts") {
        navigate("/contacts");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchContacts = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setContacts(data);
  };

  const addContact = async (newContact) => {
    if (!user) return;
    // Optimistic update
    const tempId = Date.now().toString();
    setContacts([{ ...newContact, id: tempId }, ...contacts]);

    const { data, error } = await supabase
      .from("contacts")
      .insert([newContact])
      .select();

    if (error) {
      // Rollback
      setContacts(contacts.filter((c) => c.id !== tempId));
      alert("Error adding contact: " + error.message);
    } else {
      // Update with real data
      setContacts((prev) => prev.map((c) => (c.id === tempId ? data[0] : c)));
    }
  };

  const signIn = async (email) => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) throw new Error(error.message);
    return true;
  };

  const updateContact = async (id, updatedContact) => {
    if (!user) return;
    const { error } = await supabase
      .from("contacts")
      .update(updatedContact)
      .eq("id", id);
    if (error) {
      alert("Error updating contact: " + error.message);
    } else {
      // Update local state
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...updatedContact } : c))
      );
    }
  };

  const deleteContact = async (id) => {
    if (!user) return;
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (error) {
      alert("Error deleting contact: " + error.message);
    } else {
      setContacts((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setContacts([]);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        updateContact,
        deleteContact,
        fetchContacts,
        user,
        loading,
        signIn,
        signOut
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);
