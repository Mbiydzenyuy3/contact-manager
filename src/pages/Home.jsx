import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SparklesIcon,
  ClipboardIcon,
  UserGroupIcon,
  ArrowRightIcon,
  DocumentTextIcon
} from "@heroicons/react/outline";

export default function Home() {
  const [pasteText, setPasteText] = useState("");

  const handlePaste = (e) => {
    const text = e.target.value;
    setPasteText(text);
  };

  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <section className='flex flex-col items-center justify-center px-4 py-20 min-h-screen'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              KITH
            </h1>
            <p className='text-xl md:text-2xl text-purple-200 mb-4'>
              Your Smart Contact Manager
            </p>
            <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
              Keep track of professional and personal connections. Remember how
              you met someone, store their details, and organize by groups. Just
              paste a profile or contact info to auto-fill and add context.
            </p>
            <div className='mb-8'>
              <label className='block text-gray-300 mb-2 text-center'>
                Try it now: Paste any contact info here
              </label>
              <textarea
                value={pasteText}
                onChange={handlePaste}
                placeholder='e.g., John Doe&#10;john@example.com&#10;Met at Tech Conference 2023'
                className='w-full max-w-2xl h-32 p-6 text-lg border-2 border-purple-400 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-500 resize-none'
              />
            </div>
            <Link
              to='/auth'
              className='inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105'
            >
              <SparklesIcon className='w-5 h-5 mr-2' />
              Get Started
            </Link>
            <p className='text-sm text-gray-400 mt-4'>
              No account required • Instant parsing
            </p>
          </div>
        </section>

        <section className='py-20 px-4 bg-black/10'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-12'>
              Key Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <DocumentTextIcon className='w-12 h-12 text-purple-400 mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Quick Add by Pasting
                </h3>
                <p className='text-gray-300'>
                  Paste contact info from emails, LinkedIn, or anywhere. Our
                  parser auto-fills the form instantly.
                </p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <ClipboardIcon className='w-12 h-12 text-purple-400 mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Contextual Notes
                </h3>
                <p className='text-gray-300'>
                  Add notes on how you met to remember every connection and
                  build meaningful relationships.
                </p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <UserGroupIcon className='w-12 h-12 text-purple-400 mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Organized Groups
                </h3>
                <p className='text-gray-300'>
                  Categorize contacts into work, personal, family, or custom
                  groups for easy access and management.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-12'>
              How to Use KITH
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='text-center'>
                <div className='bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-xl'>1</span>
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Paste Contact Info
                </h3>
                <p className='text-gray-300'>
                  Copy details from emails, LinkedIn profiles, or business
                  cards.
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-xl'>2</span>
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Auto-Fill Form
                </h3>
                <p className='text-gray-300'>
                  The parser extracts and fills in names, emails, phones
                  automatically.
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-xl'>3</span>
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Add Context
                </h3>
                <p className='text-gray-300'>
                  Include how you met them in the context field to never forget.
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-xl'>4</span>
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Organize & Access
                </h3>
                <p className='text-gray-300'>
                  Group contacts and access them easily for better networking.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 px-4 bg-black/10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Start Managing Your Contacts Today
            </h2>
            <p className='text-lg text-gray-300 mb-8'>
              Effortlessly keep track of your professional and personal
              connections.
            </p>
            <Link
              to='/auth'
              className='inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105'
            >
              Sign Up Now
              <ArrowRightIcon className='w-5 h-5 ml-2' />
            </Link>
          </div>
        </section>

        <footer className='bg-black/20 backdrop-blur-sm py-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <p className='text-gray-400'>
              © {new Date().getFullYear()} KITH. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
