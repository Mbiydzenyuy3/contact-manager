import React from "react";
import { Link } from "react-router-dom";
import {
  SparklesIcon,
  ClipboardIcon,
  UserGroupIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from "@heroicons/react/outline";

export default function Home() {
  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <section className='flex flex-col items-center justify-center px-4 py-20 min-h-screen'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              KITH
            </h1>
            <p className='text-xl md:text-2xl text-purple-200 mb-4'>
              Never forget how you met.
            </p>
            <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
              KITH is your intelligent contact manager. Effortlessly organize
              contacts from emails, LinkedIn, and more, with built-in context to
              remember every connection.
            </p>
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
              Powerful Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <ClipboardIcon className='w-12 h-12 text-purple-400 mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Smart Parsing
                </h3>
                <p className='text-gray-300'>
                  Paste contact info from anywhere—emails, LinkedIn, business
                  cards—and let AI extract details instantly.
                </p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <UserGroupIcon className='w-12 h-12 text-purple-400 mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Contextual Notes
                </h3>
                <p className='text-gray-300'>
                  Add notes on how you met each person to build meaningful
                  relationships and never forget connections.
                </p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
                <CogIcon className='w-12 h-12 text-purple-400 mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Organized Groups
                </h3>
                <p className='text-gray-300'>
                  Categorize contacts into groups like work, personal, or family
                  for easy management and quick access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-12'>
              How It Works
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='text-center'>
                <div className='bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-xl'>1</span>
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Paste Info
                </h3>
                <p className='text-gray-300'>
                  Copy contact details from emails, LinkedIn, or any source.
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-xl'>2</span>
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Auto Extract
                </h3>
                <p className='text-gray-300'>
                  Our parser intelligently extracts names, emails, phones, and
                  more.
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
                  Include notes on how you met to personalize your contacts.
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-xl'>4</span>
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Organize
                </h3>
                <p className='text-gray-300'>
                  Group and manage contacts effortlessly for better networking.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 px-4 bg-black/10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Manage Your Contacts Smarter?
            </h2>
            <p className='text-lg text-gray-300 mb-8'>
              Join thousands of professionals who never forget a connection.
            </p>
            <Link
              to='/auth'
              className='inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105'
            >
              Start Organizing Now
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
