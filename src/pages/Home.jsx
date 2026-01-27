import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  SparklesIcon,
  ChatAlt2Icon,
  BriefcaseIcon,
  HeartIcon,
  GlobeAltIcon,
  CheckCircleIcon
} from "@heroicons/react/outline";

const colorVariants = {
  blue: {
    bg: "bg-blue-500/20",
    text: "text-blue-300",
    glow: "bg-blue-500/20",
    hover: "group-hover:bg-blue-500/30"
  },
  emerald: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-300",
    glow: "bg-emerald-500/20",
    hover: "group-hover:bg-emerald-500/30"
  },
  pink: {
    bg: "bg-pink-500/20",
    text: "text-pink-300",
    glow: "bg-pink-500/20",
    hover: "group-hover:bg-pink-500/30"
  },
  purple: {
    bg: "bg-purple-500/20",
    text: "text-purple-300",
    glow: "bg-purple-500/20",
    hover: "group-hover:bg-purple-500/30"
  }
};

// eslint-disable-next-line no-unused-vars
const PersonaCard = ({ icon: Icon, title, role, story, color }) => {
  const theme = colorVariants[color];
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className='bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:border-white/20'
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-16 -mt-16 transition-all ${theme.glow} ${theme.hover}`}
      />
      <div className='relative z-10'>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${theme.bg} ${theme.text}`}
        >
          <Icon className='w-6 h-6' />
        </div>
        <h3 className='text-xl font-bold text-white mb-1'>{title}</h3>
        <p
          className={`text-sm mb-4 uppercase tracking-wider font-semibold ${theme.text}`}
        >
          {role}
        </p>
        <p className='text-gray-300 italic leading-relaxed'>"{story}"</p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [pasteText, setPasteText] = useState("");

  const handlePaste = (e) => {
    const text = e.target.value;
    setPasteText(text);
  };

  useEffect(() => {
    // Set body background for dark theme on this page
    document.body.style.backgroundColor = "#0f172a"; // slate-900
    // Cleanup function to reset background when component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className='min-h-screen w-full text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden'>
      {/* Navigation */}
      <nav className='fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Link
              to='/'
              className='inline-flex items-center gap-2'
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className='w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20'>
                <span className='font-bold text-lg text-white'>K</span>
              </div>
              <span className='text-xl font-bold tracking-tight text-white'>
                KITH
              </span>
            </Link>
          </div>
          <div className='flex items-center gap-6'>
            <Link
              to='/auth'
              className='text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block'
            >
              Sign In
            </Link>
            <Link
              to='/auth'
              className='px-5 py-2.5 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6 overflow-hidden'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none' />

        <div className='max-w-5xl mx-auto text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm'>
              Reimagine your network
            </span>
            <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight'>
              Don't just store contacts. <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400'>
                Capture the Connection.
              </span>
            </h1>
            <p className='text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed'>
              The address book is dead. KITH is the relationship manager that
              remembers
              <span className='text-white font-semibold'> who</span> they are,
              <span className='text-white font-semibold'> where</span> you met,
              and
              <span className='text-white font-semibold'> why</span> they
              matter.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link
                to='/auth'
                className='w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1'
              >
                Start Your Journey
              </Link>
              <a
                href='#demo'
                className='w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm'
              >
                See the Magic
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story/Persona Section */}
      <section className='py-24 px-6 bg-slate-800/30 relative border-y border-white/5'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
              Every Connection Has a Story
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              Standard contact apps treat people like data entries. KITH treats
              them like people. See how KITH fits into your life.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <PersonaCard
              icon={BriefcaseIcon}
              title='The Freelancer'
              role='For the Hustler'
              color='blue'
              story='Met at the co-working space. Needs a React dev for a Q3 project. Loves espresso.'
            />
            <PersonaCard
              icon={GlobeAltIcon}
              title='The Consultant'
              role='For the Advisor'
              color='emerald'
              story='VP of Marketing at TechCorp. Mentioned budget expansion in June. Follow up then.'
            />
            <PersonaCard
              icon={ChatAlt2Icon}
              title='The Socialite'
              role='For the Connector'
              color='pink'
              story='The guy with the cool hat at the gallery opening. Works at Spotify. Intro to Sarah?'
            />
            <PersonaCard
              icon={HeartIcon}
              title='The Friend'
              role='For Everyone'
              color='purple'
              story='Aunt May. New address in Florida. Remember to ask about her garden.'
            />
          </div>
        </div>
      </section>

      {/* Magic Paste Demo Section */}
      <section id='demo' className='py-24 px-6 relative overflow-hidden'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <div className='inline-flex items-center gap-2 text-purple-400 font-bold mb-4'>
              <SparklesIcon className='w-5 h-5' />
              <span>Magic Paste Technology</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
              Messy Data? <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400'>
                Clean Contacts.
              </span>
            </h2>
            <p className='text-gray-400 text-lg mb-8 leading-relaxed'>
              Stop typing manually. Copy an email signature, a LinkedIn bio, or
              a messy text message. Paste it into KITH, and watch our AI parse
              the name, email, phone, and context instantly.
            </p>

            <ul className='space-y-4 mb-8'>
              {[
                "Instantly parses names and emails",
                "Detects phone numbers automatically",
                "Preserves context notes",
                "Works with any text format"
              ].map((item, i) => (
                <li key={i} className='flex items-center gap-3 text-gray-300'>
                  <CheckCircleIcon className='w-6 h-6 text-emerald-500 flex-shrink-0' />
                  <span className='text-lg'>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to='/auth'
              className='inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors group'
            >
              Try it for free{" "}
              <span className='ml-2 group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </Link>
          </div>

          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-3xl opacity-20' />
            <div className='bg-slate-900 border border-white/10 rounded-2xl p-6 relative shadow-2xl backdrop-blur-xl'>
              <div className='flex items-center gap-2 mb-4 border-b border-white/5 pb-4'>
                <div className='w-3 h-3 rounded-full bg-red-500' />
                <div className='w-3 h-3 rounded-full bg-yellow-500' />
                <div className='w-3 h-3 rounded-full bg-green-500' />
                <span className='ml-auto text-xs text-gray-500 font-mono'>
                  MagicParser v1.0
                </span>
              </div>

              <label className='block text-sm font-medium text-gray-400 mb-2'>
                Try it now: Paste any contact info here
              </label>
              <textarea
                value={pasteText}
                onChange={handlePaste}
                placeholder='Paste something like: &#10;John Doe &#10;john@example.com &#10;Met at the React Conference 2024'
                className='w-full h-48 bg-slate-800/50 border border-white/10 rounded-xl p-4 text-gray-300 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none font-mono text-sm leading-relaxed'
              />

              <div className='mt-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-xs text-purple-300 uppercase font-bold tracking-wider mb-1'>
                      Detected Context
                    </p>
                    <p className='text-sm text-white font-medium'>
                      {pasteText ? "Parsing..." : "Waiting for input..."}
                    </p>
                  </div>
                  <Link to='/auth'>
                    <button className='px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-purple-600/20'>
                      Auto-Fill
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/5 bg-slate-900 py-12 m-8 px-4 w-full'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
          <Link
            to='/'
            className='inline-flex items-center gap-2'
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className='w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20'>
              <span className='font-bold text-xs text-white'>K</span>
            </div>
            <span className='font-bold text-gray-300 tracking-tight'>KITH</span>
          </Link>

          <p className='text-gray-500 text-sm'>
            © {new Date().getFullYear()} KITH. Cultivating meaningful
            connections.
          </p>
          <div className='flex gap-6'>
            <a
              href='#'
              className='text-gray-500 hover:text-white transition-colors text-sm'
            >
              Privacy
            </a>
            <a
              href='#'
              className='text-gray-500 hover:text-white transition-colors text-sm'
            >
              Terms
            </a>
            <a
              href='#'
              className='text-gray-500 hover:text-white transition-colors text-sm'
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
