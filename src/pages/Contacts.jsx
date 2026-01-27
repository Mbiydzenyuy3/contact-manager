import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SearchIcon,
  PlusIcon,
  LogoutIcon,
  PhoneIcon,
  MailIcon,
  DotsHorizontalIcon,
  SparklesIcon,
  ViewGridIcon,
  ViewListIcon
} from "@heroicons/react/outline";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Contacts() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set dark theme body background
    document.body.style.backgroundColor = "#0f172a";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // Mock fetching data - Replace with your actual Supabase fetch logic
  useEffect(() => {
    const fetchContacts = async () => {
      // Simulate network delay
      setTimeout(() => {
        setContacts([
          {
            id: 1,
            name: "Sarah Wilson",
            email: "sarah@example.com",
            phone: "+1 234 567 890",
            group: "Personal"
          },
          {
            id: 2,
            name: "James Rodriguez",
            email: "james@work.com",
            phone: "+1 987 654 321",
            group: "Business"
          },
          {
            id: 3,
            name: "Emily Chen",
            email: "emily@design.co",
            phone: "+1 555 012 345",
            group: "Professional"
          },
          {
            id: 4,
            name: "Michael Chang",
            email: "mike@family.net",
            phone: "+1 555 987 654",
            group: "Family"
          },
          {
            id: 5,
            name: "Alex Turner",
            email: "alex@music.com",
            phone: "+1 555 111 222",
            group: "Friends"
          }
        ]);
        setLoading(false);
      }, 800);
    };
    fetchContacts();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const groups = [
    "All",
    "Personal",
    "Business",
    "Family",
    "Friends",
    "Professional"
  ];

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup =
      selectedGroup === "All" || contact.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className='min-h-screen w-full text-white font-sans selection:bg-purple-500 selection:text-white pb-24 md:pb-10 relative overflow-x-hidden'>
      {/* Background Effects */}
      <div className='fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none' />
      <div className='fixed bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none' />

      {/* Navbar */}
      <nav className='sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-white/5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link to='/' className='flex items-center gap-2 group'>
              <div className='w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform'>
                <span className='font-bold text-lg text-white'>K</span>
              </div>
              <span className='text-xl font-bold tracking-tight text-white'>
                KITH
              </span>
            </Link>

            {/* Actions */}
            <div className='flex items-center gap-4'>
              <button
                onClick={handleLogout}
                className='p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors'
                title='Sign Out'
              >
                <LogoutIcon className='w-6 h-6' />
              </button>
              <div className='w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 p-[1px]'>
                <div className='w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden'>
                  <span className='text-xs font-bold'>JD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8'>
          <div>
            <h1 className='text-3xl font-bold mb-2'>Contacts</h1>
            <p className='text-gray-400'>
              You have{" "}
              <span className='text-white font-semibold'>
                {contacts.length}
              </span>{" "}
              connections
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-3 w-full md:w-auto'>
            {/* Search */}
            <div className='relative group w-full md:w-72'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors' />
              </div>
              <input
                type='text'
                className='block w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all'
                placeholder='Search contacts...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Magic Parse Button */}
            <button className='flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-purple-300 font-medium transition-all whitespace-nowrap'>
              <SparklesIcon className='w-5 h-5' />
              <span>Magic Paste</span>
            </button>
          </div>
        </div>

        {/* Filters & View Toggle */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-6'>
          <div className='flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto scrollbar-hide'>
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                  selectedGroup === group
                    ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className='flex justify-center py-20'>
            <div className='w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin' />
          </div>
        ) : (
          <motion.div
            layout
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
          >
            <AnimatePresence>
              {filteredContacts.map((contact) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={contact.id}
                  className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all group relative overflow-hidden'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-lg font-bold text-white shadow-inner ring-2 ring-white/10'>
                        {contact.name[0]}
                      </div>
                      <div>
                        <h3 className='font-semibold text-lg text-white leading-tight'>
                          {contact.name}
                        </h3>
                        <span className='inline-block mt-1 text-xs font-medium text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20'>
                          {contact.group}
                        </span>
                      </div>
                    </div>
                    <button className='text-gray-500 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10'>
                      <DotsHorizontalIcon className='w-5 h-5' />
                    </button>
                  </div>

                  <div className='space-y-2 text-sm text-gray-400'>
                    <div className='flex items-center gap-2'>
                      <MailIcon className='w-4 h-4 text-gray-500' />
                      <span className='truncate'>{contact.email}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <PhoneIcon className='w-4 h-4 text-gray-500' />
                      <span>{contact.phone}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 text-white z-50 hover:shadow-purple-500/50 transition-shadow'
      >
        <PlusIcon className='w-7 h-7' />
      </motion.button>
    </div>
  );
}
